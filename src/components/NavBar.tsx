
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="w-full py-4 px-6 border-b bg-background/90 backdrop-blur-md fixed top-0 z-50">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center text-white font-bold">
            R
          </div>
          <span className="text-xl font-semibold">Recoddly</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link to="/help" className="text-muted-foreground hover:text-foreground transition-colors">
            Help
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" className="border-red-600/30 text-red-600 hover:bg-red-50 hover:border-red-600">Login</Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-red-600 hover:bg-red-700">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
