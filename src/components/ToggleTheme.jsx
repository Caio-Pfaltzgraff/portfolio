import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useEffect } from "react";

export function ToggleTheme() {
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const pageClasses = document.documentElement.classList;

  useEffect(() => {
    systemPreference && pageClasses.add('dark');
  }, [pageClasses, systemPreference]);

  const toggle = () => {
    pageClasses.toggle('dark');
  }

  return (
    <div>
      <MoonIcon className='h-8 text-gray-100 block dark:hidden cursor-pointer' onClick={toggle}/>
      <SunIcon className='h-8 text-gray-100 hidden dark:block cursor-pointer' onClick={toggle}/>
    </div>
  )
}