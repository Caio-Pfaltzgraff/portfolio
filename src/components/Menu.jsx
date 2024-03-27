import { useEffect, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { ToggleTheme } from './ToggleTheme';

export function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location]);

  const handlerToggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className='bg-azul-escuro dark:bg-dark-100 fixed top-0 w-full z-50'>
      <div className='max-w-screen-xl mx-auto padding-page flex items-center justify-between'>
        <Link to="/" className='text-2xl font-title text-light-200 font-semibold'>
          Port<span className='text-orange-700'>fólio</span>
        </Link>

        <div className='flex gap-x-6 items-center md:hidden'>
          <ToggleTheme />
          {!menuOpen && <FaBars className='h-7 w-7 text-light-200 cursor-pointer' onClick={handlerToggleMenu}/>}
          {menuOpen && <AiOutlineClose className='h-7 w-7 text-light-200 cursor-pointer' onClick={handlerToggleMenu}/>}
        </div>

        <div className='hidden md:flex gap-x-4'>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'border-b-2 border-orange-700' : ''}`}>Início</Link>
          <Link to="/aboutme" className={`nav-link ${location.pathname === '/aboutme' ? 'border-b-2 border-orange-700' : ''}`}>Sobre mim</Link>
          <Link to="/skills" className={`nav-link ${location.pathname === '/skills' ? 'border-b-2 border-orange-700' : ''}`}>Habilidades</Link>
          <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'border-b-2 border-orange-700' : ''}`}>Projetos</Link>
          <Link to="/achievements" className={`nav-link ${location.pathname === '/achievements' ? 'border-b-2 border-orange-700' : ''}`}>Conquistas</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'border-b-2 border-orange-700' : ''}`}>Contato</Link>
          <ToggleTheme />
        </div>
      </div>
      {menuOpen && (
        <div className='h-screen w-full absolute md:hidden bg-azul-escuro dark:bg-dark-100'>
          <div className='flex flex-col justify-center items-center h-full gap-y-8'>
            <Link to="/" className={`nav-link-mobile ${location.pathname === '/' ? 'text-orange-700' : ''}`}>Início</Link>
            <Link to="/aboutme" className={`nav-link-mobile ${location.pathname === '/aboutme' ? 'text-orange-700' : ''}`}>Sobre mim</Link>
            <Link to="/skills" className={`nav-link-mobile ${location.pathname === '/skills' ? 'text-orange-700' : ''}`}>Habilidades</Link>
            <Link to="/projects" className={`nav-link-mobile ${location.pathname === '/projects' ? 'text-orange-700' : ''}`}>Projetos</Link>
            <Link to="/achievements" className={`nav-link-mobile ${location.pathname === '/achievements' ? 'text-orange-700' : ''}`}>Conquistas</Link>
            <Link to="/contact" className={`nav-link-mobile ${location.pathname === '/contact' ? 'text-orange-700' : ''}`}>Contato</Link>
          </div>
        </div>
      )}
    </nav>
  )
}