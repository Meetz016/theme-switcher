import React, { createContext, useState, useContext, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
  
    return (
      <button 
        onClick={toggleTheme} 
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full transition-all"
      >
        {theme === 'light' ? (
          <Moon className="text-gray-800" />
        ) : (
          <Sun className="text-yellow-500" />
        )}
      </button>
    );
  };
  
function Navbar(){
    return <div className="flex justify-between">
        <div className="font-semibold text-2xl">Theme Changer </div>
        <ThemeToggle/>
    </div>
}

export default Navbar