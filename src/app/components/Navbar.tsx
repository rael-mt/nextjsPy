// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import { Bell, User } from '@phosphor-icons/react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" className="text-gray-500 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Acesso Rápido <span className="ml-2">▼</span>
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out">
              <span className="sr-only">View notifications</span>
              <Bell size={24} />
            </button>
            <div className="ml-3 relative">
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">frotas</span>
                <User size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
