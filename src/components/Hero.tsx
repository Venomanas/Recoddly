
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-accent/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              One Link to 
              <span className="gradient-text"> Share All </span> 
              Your Online Profiles
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Create a personalized link page to showcase all your social media profiles, websites, and 
              content in one beautiful, customizable page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700">
                  Create Your Link Page
                </Button>
              </Link>
              <Link to="/examples">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-red-600 text-red-600 hover:bg-red-50">
                  See Examples
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            {/* Device mockup */}
            <div className="relative max-w-xs sm:max-w-sm">
              <div className="rounded-[3rem] border-8 border-foreground/5 bg-background shadow-xl overflow-hidden">
                <div className="relative aspect-[9/19.5]">
                  {/* Preview image of a profile page */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-black/40 flex flex-col items-center pt-12 px-4">
                    <div className="w-24 h-24 rounded-full bg-white shadow-lg mb-4"></div>
                    <div className="text-center mb-6">
                      <h3 className="font-bold text-lg">@username</h3>
                      <p className="text-sm">Digital Creator</p>
                    </div>
                    
                    {/* Sample links */}
                    <div className="w-full space-y-3">
                      <div className="link-card bg-white shadow-sm">Instagram</div>
                      <div className="link-card bg-white shadow-sm">YouTube</div>
                      <div className="link-card bg-white shadow-sm">Twitter</div>
                      <div className="link-card bg-white shadow-sm">Website</div>
                      <div className="link-card bg-white shadow-sm">Latest Project</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-accent rounded-full blur-xl opacity-50"></div>
              <div className="absolute -left-4 -top-4 w-32 h-32 bg-red-600/30 rounded-full blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
