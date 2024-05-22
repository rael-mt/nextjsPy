import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { LightbulbFilament } from '@phosphor-icons/react';

const Footer: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <footer className="bg-gray-100 dark:bg-black p-4 flex justify-between items-center">
      <div className="text-gray-600 dark:text-gray-300">
        <span>© 2024 <span className="text-green-600 dark:text-green-400">VÓLUS</span> Instituição de Pagamento LTDA.</span>
      </div>
      <div className="text-gray-600 dark:text-gray-300">
        <span>000600-000001 - VÓLUS TESTE</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-600 dark:text-gray-300">Desenvolvimento Vólus</span>
        <button
          onClick={toggleTheme}
          className="text-gray-600 dark:text-gray-300 focus:outline-none"
        >
          <LightbulbFilament size={22} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
