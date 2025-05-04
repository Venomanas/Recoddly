
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

        {/* Testimonials */}
        <section className="py-16 px-6">
          <div className="container max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-6 border">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-red-600/20"></div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Iffat </h4>
                    <p className="text-sm text-muted-foreground">
                      Photographer & Video-Editor
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Recoddly has completely transformed how I share my content
                  online. The customization options are amazing!"
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 border">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-red-600/20"></div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Rakesh sahoo</h4>
                    <p className="text-sm text-muted-foreground">
                      Content Creator 
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I love how easy it is to update my links and customize the
                  design to match my brand. Highly recommended!"
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 border">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-red-600/20"></div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Nikhil kumar </h4>
                    <p className="text-sm text-muted-foreground">
                      Small Business Owner
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "As a business owner, having all my important links in one
                  place has helped me connect better with customers."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-red-600 to-red-800 text-white">
          <div className="container max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Your Link Page?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join thousands of content creators, influencers, and businesses
              who use Recoddly to connect with their audience.
            </p>
            <Link to="/signup">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
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
