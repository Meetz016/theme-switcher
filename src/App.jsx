import React, { createContext, useState, useContext, useEffect } from 'react';
import { Eclipse, Moon, MoonStar, Sun } from 'lucide-react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('app-theme');
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    localStorage.setItem('app-theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full transition-all"
    >
      {theme === 'light' ? (
        <MoonStar className="text-gray-800" />
      ) : (
        <Sun className="text-yellow-500" />
      )}
    </button>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 p-6">
        <div className="container mx-auto">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Theme Switcher</h1>
            <ThemeToggle />
          </header>
          
          <main>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h2 className="text-xl mb-4">Theme Switcher Demo</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Toggle theme to switch between light and dark modes.
                This is a simple demo made on how to switch between themes using localStorage and contextAPI available in React.JS
              </p>
            </div>
          </main>
        </div>
        
      </div>
    </ThemeProvider>
  );
};

export default App;