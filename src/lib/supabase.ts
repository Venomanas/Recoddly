import { createClient } from "@supabase/supabase-js";

// Get these from your Supabase project settings -> API
// We provide fallback mock values for development to prevent build errors
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || "https://example.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock-key";

// Check if we're in a production environment and credentials are missing
if (
  process.env.NODE_ENV === "production" &&
  (!import.meta.env.VITE_SUPABASE_URL ||
    !import.meta.env.VITE_SUPABASE_ANON_KEY)
) {
  console.warn(
    "WARNING: Missing Supabase credentials. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment."
  );
}

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auth helpers
export const auth = {
  signUp: async (email: string, password: string) => {
    return await supabase.auth.signUp({ email, password });
  },
  signIn: async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({ email, password });
  },
  signOut: async () => {
    return await supabase.auth.signOut();
  },
  getCurrentUser: async () => {
    return await supabase.auth.getUser();
  },
  onAuthStateChange: (callback) => {
    return supabase.auth.onAuthStateChange(callback);
  },
};

// Database helpers
export const db = {
  // Example: Get a user's profile
  getUserProfile: async (userId: string) => {
    return await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();
  },

  // Example: Update a user's profile
  updateUserProfile: async (userId: string, updates) => {
    return await supabase.from("profiles").update(updates).eq("id", userId);
  },

  // Example: Get a user's links
  getUserLinks: async (userId: string) => {
    return await supabase
      .from("links")
      .select("*")
      .eq("user_id", userId)
      .order("position", { ascending: true });
  },

  // Example: Add a new link
  addLink: async (linkData) => {
    return await supabase.from("links").insert(linkData);
  },

  // Example: Update a link
  updateLink: async (linkId: string, updates) => {
    return await supabase.from("links").update(updates).eq("id", linkId);
  },

  // Example: Delete a link
  deleteLink: async (linkId: string) => {
    return await supabase.from("links").delete().eq("id", linkId);
  },

  // Client tracking functions
  recordPageVisit: async (pageData: {
    page_url: string;
    user_agent: string;
    referrer?: string;
    ip_address?: string;
    user_id?: string;
  }) => {
    return await supabase.from("page_visits").insert(pageData);
  },

  getPageVisits: async (userId?: string) => {
    const query = supabase
      .from("page_visits")
      .select("*")
      .order("created_at", { ascending: false });

    if (userId) {
      query.eq("user_id", userId);
    }

    return await query;
  },

  // Function to get client statistics
  getClientStats: async () => {
    return await supabase.rpc("get_client_statistics");
  },

  // Function to get registered clients/users
  getRegisteredClients: async () => {
    return await supabase
      .from("profiles")
      .select("*")
      .order("created_at", { ascending: false });
  },

  // Subscribe to real-time updates
  subscribeToTableChanges: (
    tableName: string,
    callback: (payload) => void
  ) => {
    return supabase
      .channel(`${tableName}-changes`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: tableName,
        },
        payload => callback(payload)
      )
      .subscribe();
  },
};
