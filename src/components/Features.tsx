
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Customizable Design",
      description: "Personalize your link page with custom colors, backgrounds, and themes to match your brand.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path><path d="M19 3v4"></path><path d="M21 5h-4"></path></svg>
      )
    },
    {
      title: "Analytics & Insights",
      description: "Track clicks, views, and visitor information to optimize your online presence.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
      )
    },
    {
      title: "Mobile Optimized",
      description: "Your link page looks great on any device, ensuring a seamless experience for all visitors.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple"><rect width="12" height="20" x="6" y="2" rx="2"></rect><path d="M12 18h.01"></path></svg>
      )
    },
    {
      title: "Easy Management",
      description: "Add, edit, or remove links in seconds through our intuitive dashboard interface.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
      )
    },
    {
      title: "Custom Domain",
      description: "Connect your own domain for a professional branded experience your visitors will trust.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"></path><path d="M13.9 21.818a10 10 0 0 1-3.8 0"></path><path d="M13.9 2.182a10 10 0 0 1 3.9 1.129"></path><path d="M6.2 3.31a10 10 0 0 1 3.9-1.128"></path><path d="M17.8 20.69a10 10 0 0 1-3.9 1.128"></path><path d="M2 12h20"></path><path d="M6.2 20.69a10 10 0 0 1-3.9-7.69"></path><path d="M2.3 8a10 10 0 0 1 3.9-4.69"></path><path d="M21.7 16a10 10 0 0 1-3.9 4.69"></path><path d="M17.8 3.31a10 10 0 0 1 3.9 4.69"></path><path d="M6.2 20.69a10 10 0 0 1-3.9-4.69"></path><path d="M12 2v20"></path></svg>
      )
    },
    {
      title: "Social Integration",
      description: "Connect all your social platforms in one place for easy discovery by your audience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple"><circle cx="18" cy="18" r="3"></circle><circle cx="9" cy="9" r="3"></circle><path d="M10 18a8 8 0 0 0 8-8"></path><line x1="7" x2="15" y1="20" y2="12"></line></svg>
      )
    }
  ];
  
  return (
    <section className="py-16 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-4">Features That Empower Your Online Presence</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create a beautiful and effective link page
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden bg-background border border-border hover:shadow-md transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/signup">
            <Button size="lg" className="px-8">Get Started for Free</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
