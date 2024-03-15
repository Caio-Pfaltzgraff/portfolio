import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-azul-escuro dark:bg-dark-100">
      <div className="padding-page flex flex-col gap-4 sm:flex-row sm:justify-between items-center py-4 xl:py-5 text-light-200">
        <div className="flex gap-2 text-3xl ">
          <FaLinkedin className="hover:text-linkedin cursor-pointer"/>
          <FaGithub className="cursor-pointer"/>
          <BiLogoGmail className="hover:text-gmail cursor-pointer"/>
          <FaWhatsapp className="hover:text-whatsapp cursor-pointer"/>
        </div>
        <div>
          <p className="font-medium text-sm md:text-base">
            © {year} Caio Pfaltzgraff | Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}