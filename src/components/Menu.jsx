import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
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
    <header>
      <nav className="bg-azul-escuro dark:bg-dark-100">
        <div className="padding-page py-4 md:py-5">

          <div className="flex items-center justify-between">
            <div>
              <h2 className='text-light-100 font-title font-semibold text-2xl'>
                Port<span className='text-orange-700'>folio</span>
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'border-b-2 border-orange-700' : ''}`}>Início</Link>
              <Link to="/aboutme" className={`nav-link ${location.pathname === '/aboutme' ? 'border-b-2 border-orange-700' : ''}`}>Sobre mim</Link>
              <Link to="/skills" className={`nav-link ${location.pathname === '/skills' ? 'border-b-2 border-orange-700' : ''}`}>Habilidades</Link>
              <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'border-b-2 border-orange-700' : ''}`}>Projetos</Link>
              <Link to="/achievements" className={`nav-link ${location.pathname === '/achievements' ? 'border-b-2 border-orange-700' : ''}`}>Conquistas</Link>
              <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'border-b-2 border-orange-700' : ''}`}>Contato</Link>
              <ToggleTheme />
            </div>

            <div className='md:hidden flex items-center'>
              <div className='mr-6'>
                <ToggleTheme />
              </div>
              <button
                className='inline-flex items-center justify-center text-light-200'
                onClick={handlerToggleMenu}
              >
                {menuOpen ? <XMarkIcon className='h-8'/> : <Bars3Icon className='h-8'/>}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className='md:hidden'>
            <div className="px-2 pt-2 pb-3 space-y-7 sm:px-3">
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
    </header>
  )
}