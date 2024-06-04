"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { menuItems } from '../app/utils/menuItems';
import {
  CaretRight,
  CaretDown,
} from '@phosphor-icons/react';



const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const handleMenuClick = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bg-black text-white h-full fixed top-0 left-0 z-40 transition-all duration-300 ease-in-out ${isExpanded ? 'w-64' : 'w-16'}`}
    >
      <div className="flex items-center justify-center h-16">
        <span className="text-xl font-bold">{isExpanded ? 'Vólus' : 'V'}</span>
      </div>
      <ul className="mt-2">
        {menuItems.map((menu, index) => (
          <li key={index} className="flex flex-col">
            <div
              className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleMenuClick(menu.title)}
            >
              <div className="flex items-center space-x-2">
                {menu.icon}
                {isExpanded && <span>{menu.title}</span>}
              </div>
              {isExpanded && (openMenu === menu.title ? <CaretDown size={16} /> : <CaretRight size={16} />)}
            </div>
            {isExpanded && openMenu === menu.title && (
              <ul className="ml-8">
                {menu.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className="px-4 py-2 hover:bg-gray-600">
                    <Link href={subItem.path}>{subItem.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
