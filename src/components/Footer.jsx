import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { LinkIcon } from "./LinkIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-azul-escuro dark:bg-dark-100 w-full">
      <div className="max-w-screen-xl mx-auto padding-page flex flex-col md:flex-row md:justify-between items-center gap-y-5 text-light-200">
        <div className="flex mx-0 gap-x-4 text-3xl">
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