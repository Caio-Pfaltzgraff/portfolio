import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link as LinkNav } from 'react-scroll';
import { ToggleTheme } from './ToggleTheme';

export function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handlerToggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className='bg-azul-escuro dark:bg-dark-100 fixed top-0 w-full 2xl:py-1 z-50'>
      <div className='max-w-screen-xl mx-auto padding-page flex items-center justify-between'>
        <h3 className='text-2xl font-title text-light-200 font-semibold tracking-wide'>
          {"Port"}<span className='text-orange-700'>fólio</span>
        </h3>

        <div className='flex gap-x-6 items-center md:hidden'>
          <ToggleTheme />
          {!menuOpen && <FaBars className='size-7 text-light-200 cursor-pointer' onClick={handlerToggleMenu}/>}
          {menuOpen && <AiOutlineClose className='size-7 text-light-200 cursor-pointer' onClick={handlerToggleMenu}/>}
        </div>

        <div className='hidden md:flex gap-x-4'>
          <LinkNav className="nav-link" activeClass='nav-link-active' smooth spy to='start' offset={-100}>
            Início
          </LinkNav>
          <LinkNav className="nav-link" activeClass='nav-link-active' smooth spy to='aboutme' offset={-100}>
            Sobre mim
          </LinkNav>
          <LinkNav className="nav-link" activeClass='nav-link-active' smooth spy to='skills' offset={-100}>
            Habilidades
          </LinkNav>
          <LinkNav className="nav-link" activeClass='nav-link-active' smooth spy to='projects' offset={-100}>
            Projetos
          </LinkNav>
          <LinkNav className="nav-link" activeClass='nav-link-active' smooth spy to='achievements' offset={-100}>
            Conquistas
          </LinkNav>
          <LinkNav className="nav-link" activeClass='nav-link-active' smooth spy to='contact' offset={-100}>
            Contato
          </LinkNav>
          <ToggleTheme />
        </div>
      </div>
      {menuOpen && (
        <div className='h-screen w-full absolute md:hidden bg-azul-escuro dark:bg-dark-100'>
          <div className='flex flex-col justify-center items-center h-full gap-y-8'>
          <LinkNav 
            className="nav-link-mobile" 
            activeClass='nav-link-mobile-active' 
            smooth spy 
            to='start'
            onClick={handlerToggleMenu}
            offset={-64}
          >
            Início
          </LinkNav>
          <LinkNav 
            className="nav-link-mobile" 
            activeClass='nav-link-mobile-active' 
            smooth spy 
            to='aboutme'
            onClick={handlerToggleMenu}
            offset={-64}
          >
            Sobre mim
          </LinkNav>
          <LinkNav 
            className="nav-link-mobile" 
            activeClass='nav-link-mobile-active' 
            smooth spy 
            to='skills'
            onClick={handlerToggleMenu}
            offset={-64}
          >
            Habilidades
          </LinkNav>
          <LinkNav 
            className="nav-link-mobile" 
            activeClass='nav-link-mobile-active' 
            smooth spy 
            to='projects'
            onClick={handlerToggleMenu}
            offset={-64}
          >
            Projetos
          </LinkNav>
          <LinkNav 
            className="nav-link-mobile" 
            activeClass='nav-link-mobile-active' 
            smooth spy 
            to='achievements'
            onClick={handlerToggleMenu}
            offset={-64}
          >
            Conquistas
          </LinkNav>
          <LinkNav 
            className="nav-link-mobile" 
            activeClass='nav-link-mobile-active' 
            smooth spy 
            to='contact'
            onClick={handlerToggleMenu}
            offset={-64}
          >
            Contato
          </LinkNav>
          </div>
        </div>
      )}
    </nav>
  )
}