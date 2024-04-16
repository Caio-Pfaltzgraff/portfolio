import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaReact, FaWhatsapp } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { LinkIcon } from '/src/components/LinkIcon.jsx';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-azul-escuro dark:bg-dark-100 w-full py-2">
      <div className="max-w-screen-xl mx-auto padding-page">
        <div className="space-y-6 md:space-y-8">
          <div className="w-full space-y-4">
            <p className="text-light-200 text-lg text-center font-medium">Links</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <LinkIcon 
                path="https://www.linkedin.com/in/caio-pfaltzgraff/"
                className="flex items-center gap-x-4 border border-zinc-400 p-3 rounded-tr-xl rounded-bl-xl hover:border-linkedin hover:text-linkedin text-light-200"
              >
                <FaLinkedin className="size-6" />
                <span>Linkedin</span>
              </LinkIcon>

              <LinkIcon 
                path="https://github.com/Caio-Pfaltzgraff"
                className="flex items-center gap-x-4 border border-zinc-400 p-3 rounded-tr-xl rounded-bl-xl hover:border-github hover:text-github text-light-200"
              >
                <FaGithub className="size-6" />
                <span>Github</span>
              </LinkIcon>

              <LinkIcon 
                path="mailto:caio.rllcr@gmail.com"
                className="flex items-center gap-x-4 border border-zinc-400 p-3 rounded-tr-xl rounded-bl-xl hover:border-gmail hover:text-gmail text-light-200"
              >
                <BiLogoGmail className="size-6" />
                <span>Email</span>
              </LinkIcon>

              <LinkIcon 
                path="https://wa.me/5521980891793"
                className="flex items-center gap-x-4 border border-zinc-400 p-3 rounded-tr-xl rounded-bl-xl hover:border-whatsapp hover:text-whatsapp text-light-200"
              >
                <FaWhatsapp className="size-6" />
                <span>Whatsapp</span>
              </LinkIcon>
            </div>
          </div>

          <div className="h-[2px] rounded-full bg-orange-700"/>

          <div className="space-y-4">
            <p className="text-center text-sm text-light-200 ">
              © Copyright {year} | Todos os direitos reservados.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center gap-x-2 gap-y-3">
              <p className="text-center text-sm text-light-200 ">
                Desenvolvido por Caio Pfaltzgraff utilizando
              </p>
              <div className="flex justify-center gap-2">
                <FaReact className="size-6 -mt-1 text-cyan-700" />
                <span className="text-sm text-light-200">com</span>
                <RiJavascriptFill className="size-6 -mt-1 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
