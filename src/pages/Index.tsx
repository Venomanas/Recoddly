
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* How It Works Section */}
        <section className="py-16 px-6 bg-secondary">
          <div className="container max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="bg-brand-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand-purple">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                <p className="text-muted-foreground">Create an account or sign in with Google, Apple, or as a guest.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand-purple">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Add Your Links</h3>
                <p className="text-muted-foreground">Easily add social media profiles, websites, or any URL you want to share.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand-purple">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Share Your Page</h3>
                <p className="text-muted-foreground">Get your unique URL and share it on your social media profiles.</p>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <Link to="/signup">
                <button className="bg-brand-purple text-white px-8 py-3 rounded-lg hover:bg-brand-darkPurple transition-colors">
                  Get Started Now
                </button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 px-6">
          <div className="container max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-6 border">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-brand-purple/20"></div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Content Creator</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Linkify has completely transformed how I share my content online. The customization options are amazing!"
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 border">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-brand-purple/20"></div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Alex Rivera</h4>
                    <p className="text-sm text-muted-foreground">Photographer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I love how easy it is to update my links and customize the design to match my brand. Highly recommended!"
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 border">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-brand-purple/20"></div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Jamie Smith</h4>
                    <p className="text-sm text-muted-foreground">Small Business Owner</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "As a business owner, having all my important links in one place has helped me connect better with customers."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-brand-purple to-brand-darkPurple text-white">
          <div className="container max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Link Page?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join thousands of content creators, influencers, and businesses who use Linkify to connect with their audience.
            </p>
            <Link to="/signup">
              <button className="bg-white text-brand-purple px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Start for Free
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
