"use client"
import { Fragment } from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Bell, User, LightbulbFilament, Bank, Sun } from '@phosphor-icons/react';
import { useTheme } from '../app/context/ThemeContext';
import Image from 'next/legacy/image';
import Link from 'next/link';



const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: false },
  { name: 'Empresas', href: '/empresas', current: false },
  { name: 'Usuários', href: '/usuarios', current: false },
]

const Navbar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isGroupDropdownOpen, setGroupDropdownOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    router.push('/login');
  };

  return (
    <nav className=" bg-white dark:bg-black relative left-5">
      <div className="w-full flex justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex justify-between h-16">
          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" className="text-gray-500 dark:text-white inline-flex items-center px-1 pt-1 text-sm font-medium">
                <span className="ml-2"><LightbulbFilament size={22} /></span> Acesso Rápido
              </a>
            </div>
            <div className="relative">
              <button
                onClick={() => setGroupDropdownOpen(!isGroupDropdownOpen)}
                className="text-gray-500 dark:text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                <Bank size={22} className="mr-2" />
                Empresas do Grupo
              </button>
              {isGroupDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-2 z-20">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                    Empresa 1
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                    Empresa 2
                  </a>
                </div>
              )}
              <button
                onClick={toggleTheme}
                className="text-gray-500 dark:text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                <Sun size={22} className="mr-2" />
                {/* {isDarkMode ? 'Modo Light' : 'Modo Dark'} */}
                {isDarkMode && 'Modo Dark'}
                {!isDarkMode && 'Modo Light'}
                
              </button>
            </div>
          </div>
          <div className="flex items-center relative right-28">
            <div className="flex-shrink-0 flex items-center ml-4">
              <Link href='/home'>
                <Image className="h-8 w-auto" width={180} height={100} src="/tes3.svg" alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-1 rounded-full text-gray-400 dark:text-white hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out">
              <span className="sr-only">View notifications</span>
              <Bell size={24} />
            </button>
            <div className="ml-3 relative">
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="text-white focus:outline-none"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500 dark:text-white">frotas</span>
                  <User size={24} />
                </div>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-2 z-20">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
