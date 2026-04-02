import React from 'react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { DriftingCosmicDust } from '@/components/ui/drifting-cosmic-dust';
import '../horizon.css';

export default function GetStarted() {
  return (
    <main className="bg-black min-h-screen text-white relative">
      <Navbar />
      <div className="fixed inset-0 z-0">
        <DriftingCosmicDust />
      </div>
      
      <div className="relative z-10 pt-40 pb-20 px-4 min-h-[80vh] flex flex-col items-center justify-center text-center">
        <h1 className="hero-title text-5xl md:text-7xl mb-6">ALL SYSTEMS GO</h1>
        <p className="subtitle-line max-w-2xl mx-auto mb-10">
          This is a demonstration of the Get Started portal. In a production environment, this would integrate with an onboarding flow or user authentication.
        </p>
        
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl max-w-md w-full backdrop-blur-xl">
          <form className="flex flex-col gap-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <label className="text-sm text-white/50 font-inter">Work Email</label>
            <input 
              type="email" 
              placeholder="hello@visionary.com" 
              className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 font-inter"
            />
            
            <button className="cta__btn cta__btn--primary w-full justify-center mt-4">
              Enter Early Access
            </button>
          </form>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
