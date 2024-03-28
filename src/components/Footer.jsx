import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaReact, FaWhatsapp } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { LinkIcon } from "./LinkIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-azul-escuro dark:bg-dark-100 w-full py-2">
      <div className="max-w-screen-xl mx-auto padding-page">
        <div className="grid gap-y-6 md:gap-y-8">
          <div className="grid md:grid-cols-3 gap-y-8">
            <div className="text-light-200 space-y-4">
              <p className="text-center text-xl">Navegue</p>
              <div className="space-y-4">
                <p>Início</p>
                <p>Projetos</p>
                <p>Certificados</p>
              </div>
            </div>
            <div className="text-light-200 space-y-4">
              <p className="text-center text-xl">Projetos</p>
              <div className="space-y-4">
                <p>Lecaru</p>
                <p>VollMed</p>
                <p>TopLibray</p>
              </div>
            </div>
            <div className="text-light-200 space-y-4">
              <p className="text-center text-xl">Links</p>
              <div className="grid gap-4">
                <LinkIcon 
                  path="https://www.linkedin.com/in/caio-pfaltzgraff/"
                  className="flex items-center gap-x-4 border border-zinc-400 p-2 rounded-tr-xl rounded-bl-xl hover:border-linkedin hover:text-linkedin md:max-w-72"
                >
                  <FaLinkedin className="w-6 h-6" />
                  <span>/in/caio-pfaltzgraff</span>
                </LinkIcon>

                <LinkIcon 
                  path="https://github.com/Caio-Pfaltzgraff"
                  className="flex items-center gap-x-4 border border-zinc-400 p-2 rounded-tr-xl rounded-bl-xl hover:border-github hover:text-github md:max-w-72"
                >
                  <FaGithub className="w-6 h-6" />
                  <span>Caio-Pfaltzgraff</span>
                </LinkIcon>

                <LinkIcon 
                  path="mailto:caio.rllcr@gmail.com"
                  className="flex items-center gap-x-4 border border-zinc-400 p-2 rounded-tr-xl rounded-bl-xl hover:border-gmail hover:text-gmail md:max-w-72"
                >
                  <BiLogoGmail className="w-6 h-6" />
                  <span>caio.rllcr@gmail.com</span>
                </LinkIcon>

                <LinkIcon 
                  path="https://wa.me/5521980891793"
                  className="flex items-center gap-x-4 border border-zinc-400 p-2 rounded-tr-xl rounded-bl-xl hover:border-whatsapp hover:text-whatsapp md:max-w-72"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  <span>+55 21 98089-1793</span>
                </LinkIcon>
              </div>
            </div>
          </div>

          <div className="h-[2px] rounded-full bg-orange-700"/>

          <div className="text-light-200 space-y-4">
            <p className="text-center">
              © Copyright {year} | Todos os direitos reservados.
            </p>
            <div className="flex sm:justify-center items-center gap-x-2 text-center">
              <p>
                Desenvolvido por Caio Pfaltzgraff utilizando{" "}
                <span className="sm:hidden">React com Javascript.</span>
              </p>
              <FaReact className="w-7 h-7 -mt-1 text-cyan-700 hidden sm:block" />
              <span className="hidden sm:block">com</span>
              <RiJavascriptFill className="w-7 h-7 -mt-1 text-yellow-500 hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
