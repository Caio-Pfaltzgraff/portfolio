import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
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
          <a href="#" className="nav-link">Início</a>
          <a href="#aboutme" className="nav-link">Sobre mim</a>
          <a href="#skills" className="nav-link">Habilidades</a>
          <a href="#projects" className="nav-link">Projetos</a>
          <a href="#achievements" className="nav-link">Conquistas</a>
          <a href="#contact" className="nav-link">Contato</a>
          <ToggleTheme />
        </div>
      </div>
      {menuOpen && (
        <div className='h-screen w-full absolute md:hidden bg-azul-escuro dark:bg-dark-100'>
          <div className='flex flex-col justify-center items-center h-full gap-y-8'>
            <a href="#" className="nav-link-mobile" onClick={handlerToggleMenu}>Início</a>
            <a href="#aboutme" className="nav-link-mobile" onClick={handlerToggleMenu}>Sobre mim</a>
            <a href="#skills" className="nav-link-mobile" onClick={handlerToggleMenu}>Habilidades</a>
            <a href="#projects" className="nav-link-mobile" onClick={handlerToggleMenu}>Projetos</a>
            <a href="#achievements" className="nav-link-mobile" onClick={handlerToggleMenu}>Conquistas</a>
            <a href="#contact" className="nav-link-mobile" onClick={handlerToggleMenu}>Contato</a>
          </div>
        </div>
      )}
    </nav>
  )
}