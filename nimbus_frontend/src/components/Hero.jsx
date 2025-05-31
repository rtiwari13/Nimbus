import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-[var(--background)] text-white h-screen overflow-hidden flex items-center justify-center px-6">
      {/* Animated Bubbles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-yellow-500 opacity-10 rounded-full animate-bubble"
            style={{
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`,
              bottom: `-40px`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Organize. Collaborate. Succeed.
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-6">
          Nimbus — Your ultimate task management workspace
        </p>
        <button onClick={ ()=> window.location.href = "/projects"} className="px-6 py-3 bg-[var(--primary-blue)] hover:bg-indigo-700 rounded-lg transition shadow-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;



