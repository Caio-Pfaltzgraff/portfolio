import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { LinkIcon } from "./LinkIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-azul-escuro dark:bg-dark-100">
      <div className="padding-page flex flex-col gap-4 sm:flex-row sm:justify-between items-center py-4 xl:py-5 text-light-200">
        <div className="flex gap-4 lg:gap-6 text-3xl ">
          <LinkIcon path="https://www.linkedin.com/in/caio-pfaltzgraff/">
            <FaLinkedin className="hover:text-linkedin"/>
          </LinkIcon>

          <LinkIcon path="https://github.com/Caio-Pfaltzgraff">
            <FaGithub className="hover:text-github"/>
          </LinkIcon>

          <LinkIcon path="mailto:caio.rllcr@gmail.com">
            <BiLogoGmail className="hover:text-gmail"/>
          </LinkIcon>
          
          <LinkIcon path="https://wa.me/5521980891793">
            <FaWhatsapp className="hover:text-whatsapp"/>
          </LinkIcon>
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