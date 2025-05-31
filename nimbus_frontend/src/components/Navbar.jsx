import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[var(--background)] border-b border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="text-2xl font-bold">
            Nimbus
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
       
          <a href="#" className="block text-gray-300 hover:text-white">Features</a>
          <a href="#" className="block text-gray-300 hover:text-white">Solutions</a>
          <a href="#" className="block text-gray-300 hover:text-white">Pricing</a>
          <a href="#" className="block text-gray-300 hover:text-white">Login</a>
    
     
    
          </div>

          {/* Avatar */}
          <div className="hidden md:flex items-center">
          <a href="#" className="block px-6 py-3 bg-[var(--primary-blue)] hover:bg-indigo-700 rounded-lg transition shadow-lg">Get Started for Free</a>
          </div>

      
      
        </div>
      </div>

   
     
    </nav>
  );
};

export default Navbar;
