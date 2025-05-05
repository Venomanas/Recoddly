
// Configuration settings for the application

// Determine the current base URL from the browser location or environment variable
const getCurrentBaseUrl = () => {
  // In browser environment
  if (typeof window !== 'undefined') {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? `:${port}` : ''}`;
  }
  
  // In server/build environment
  return (
    import.meta.env.VITE_APP_URL ||
    (process.env.NODE_ENV === "production"
      ? "https://your-production-domain.com" // Replace with actual domain when deployed
      : "http://localhost:8080")
  );
};

// Base URL for the application - change this when deploying
export const CONFIG = {
  baseUrl: getCurrentBaseUrl(),
  
  // Add other configuration values here
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL || '',
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
};