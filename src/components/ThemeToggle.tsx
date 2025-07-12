import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-6 right-6 z-50",
        "w-12 h-12 rounded-full",
        "bg-card border border-border",
        "shadow-soft hover:shadow-hover",
        "flex items-center justify-center",
        "transition-all duration-300 ease-smooth",
        "hover:scale-110 hover:-translate-y-1",
        "text-foreground hover:text-primary",
        "animate-fade-in"
      )}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-6 h-6">
        <Sun 
          size={20} 
          className={cn(
            "absolute inset-0 transition-all duration-300",
            isDark ? "opacity-0 rotate-180 scale-50" : "opacity-100 rotate-0 scale-100"
          )} 
        />
        <Moon 
          size={20} 
          className={cn(
            "absolute inset-0 transition-all duration-300",
            isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-50"
          )} 
        />
      </div>
    </button>
  );
};