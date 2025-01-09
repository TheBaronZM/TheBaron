'use client'

import { Menu, X, Watch, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Collection', href: '#collection' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2" onClick={(e) => scrollToSection(e, '#home')}>
              <Watch className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">THE BARON</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => scrollToSection(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <button 
                className="text-gray-300 hover:text-white"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-6 w-6" />
              </button>
              <button 
                className="text-gray-300 hover:text-white"
                onClick={() => setIsSignInOpen(true)}
              >
                <User className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-300 hover:text-white"
                    onClick={(e) => scrollToSection(e, item.href)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Shopping Cart</h2>
              <button onClick={() => setIsCartOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="text-center text-gray-600">
              Your cart is empty
            </div>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      {isSignInOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Sign In</h2>
              <button onClick={() => setIsSignInOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
} 