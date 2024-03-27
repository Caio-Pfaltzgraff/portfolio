import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

export function ToggleTheme() {
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : systemPreference;
  });
  const pageClasses = document.documentElement.classList;

  useEffect(() => {
    // Atualiza o localStorage quando o tema for alterado
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    // Atualiza as classes no JSX
    darkMode ? pageClasses.add('dark') : pageClasses.remove('dark');
  }, [darkMode, pageClasses]);

  const toggle = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className='md:ml-2'>
      <HiMoon className='h-6 w-6 text-gray-100 block dark:hidden cursor-pointer' onClick={toggle}/>
      <HiSun className='h-6 w-6 text-gray-100 hidden dark:block cursor-pointer' onClick={toggle}/>
    </div>
  )
}
