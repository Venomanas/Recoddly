
import React from 'react';
import AdminPanel from '@/components/AdminPanel';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Admin = () => {
  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <header className="bg-background sticky top-0 z-10 border-b">
        <div className="container max-w-7xl mx-auto flex items-center justify-between p-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-brand-purple to-brand-darkPurple flex items-center justify-center text-white font-bold">
              L
            </div>
            <span className="text-xl font-semibold">Linkify</span>
            <span className="bg-primary/10 text-primary text-xs py-1 px-2 rounded ml-2">Admin</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="outline" size="sm">
                Switch to User Dashboard
              </Button>
            </Link>
            <Link to="/logout">
              <Button variant="ghost" size="sm">
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <AdminPanel />
      </main>
    </div>
  );
};

export default Admin;
