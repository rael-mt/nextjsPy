// components/Layout.tsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ThemeProvider } from '../context/ThemeContext';
import Sidebar from './Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
    <ThemeProvider> 
      <div className="min-h-screen flex flex-col">
        <Navbar />
          <div className="flex flex-grow">
            <Sidebar />
            <main className="flex-grow ml-16">{children}</main>
          </div>
        <Footer />
      </div>
    </ThemeProvider>
    </>
  );
};

export default Layout;
