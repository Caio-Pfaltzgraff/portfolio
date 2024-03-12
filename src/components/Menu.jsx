import { ToggleTheme } from "./ToggleTheme";

export function Menu() {
  return (
    <header>
      <nav className="w-full bg-[#051933] dark:bg-dark-100 py-6 flex justify-between px-2">
        <h1 className="text-light-100 font-bold text-2xl font-title">Portfo<span className="text-orange-700">lio</span></h1>
        <p className="text-light-100 border-b-2 border-orange-700 font-medium">Início</p>
        <p className="text-light-100 font-medium">Sobre mim</p>
        <p className="text-light-100 font-medium">Habilidades</p>
        <p className="text-light-100 font-medium">Projetos</p>
        <p className="text-light-100 font-medium">Conquistas</p>
        <p className="text-light-100 font-medium">Contato</p>
        <ToggleTheme />
      </nav>
    </header>
  )
}