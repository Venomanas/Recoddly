
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

interface AuthFormProps {
  type: 'login' | 'signup';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // This would be replaced with actual authentication logic
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (type === 'login') {
        toast({
          title: "Successfully logged in",
          description: "Welcome back to your Linkify dashboard!",
        });
      } else {
        toast({
          title: "Account created",
          description: "Welcome to Linkify! Your account has been created.",
        });
      }
      
      navigate('/dashboard');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Authentication error",
        description: "There was a problem with your request. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setLoading(true);
    
    // Simulate Google authentication process
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Google authentication successful",
        description: "You've been successfully authenticated with Google.",
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Authentication error",
        description: "There was a problem with Google authentication. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAppleAuth = async () => {
    setLoading(true);
    
    // Simulate Apple authentication process
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Apple authentication successful",
        description: "You've been successfully authenticated with Apple.",
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Authentication error",
        description: "There was a problem with Apple authentication. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGuestAuth = async () => {
    setLoading(true);
    
    // Simulate guest authentication process
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Guest access granted",
        description: "You're now using Linkify as a guest. Some features may be limited.",
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Authentication error",
        description: "There was a problem with guest access. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">
        {type === 'login' ? 'Welcome Back' : 'Create Your Account'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <Input 
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            disabled={loading}
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <Input 
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            disabled={loading}
            required
          />
        </div>
        
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Processing...' : type === 'login' ? 'Sign In' : 'Create Account'}
        </Button>
      </form>
      
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="px-2 bg-background text-muted-foreground">or continue with</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <Button 
          variant="outline" 
          className="w-full flex items-center gap-2" 
          onClick={handleGoogleAuth}
          disabled={loading}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 186.69 190.5">
            <path fill="#4285f4" d="M95.25 77.932v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"/>
            <path fill="#34a853" d="M41.87 113.57l-6.849 5.307-24.023 18.75c15.431 30.583 47.137 51.58 83.757 51.58 25.329 0 46.758-8.323 62.326-22.71L126.16 143.52c-8.688 5.83-19.827 9.249-32.607 9.249-25.147 0-46.473-16.971-54.106-39.798z"/>
            <path fill="#fbbc05" d="M41.87 76.93c-3.279 9.662-5.156 19.921-5.156 30.625s1.877 20.963 5.156 30.625l30.872-24.057c-1.671-6.291-2.646-12.724-2.646-19.658s.975-13.367 2.646-19.658z"/>
            <path fill="#ea4335" d="M41.87 113.57c7.633 22.827 28.959 39.798 54.106 39.798 12.78 0 23.919-3.419 32.607-9.249l-30.913-23.986c-10.132 6.754-16.887 16.799-19.137 28.662H41.87z"/>
            <path fill="#ea4335" d="M41.87 76.93l30.872 24.057c2.25-11.863 9.006-21.908 19.137-28.662 11.042-7.396 24.909-9.072 37.12-4.654 4.271 1.533 8.268 3.773 11.858 6.566l27.389-27.389C151.879 32.689 130.199 23 93.628 23 57.008 23 25.302 43.998 9.871 74.58l32 24.057z"/>
          </svg>
          Continue with Google
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full flex items-center gap-2" 
          onClick={handleAppleAuth}
          disabled={loading}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 384 512" fill="currentColor">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
          </svg>
          Continue with Apple
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={handleGuestAuth}
          disabled={loading}
        >
          Continue as Guest
        </Button>
      </div>
    </div>
  );
};

export default AuthForm;
