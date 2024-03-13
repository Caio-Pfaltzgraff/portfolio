import { DocumentArrowDownIcon } from '@heroicons/react/24/solid';
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import photo from "../assets/my-photo.png";

export function Start() {
  return (
    <article className="padding-page bg-light-100 dark:bg-dark-200">
      <section className='flex flex-col md:justify-between md:flex-row-reverse md:items-center py-12 md:py-20 lg:py-24'>
        <div className="flex justify-center items-center">
          <div className='border dark:border-light-200 rounded-full shadow-lg shadow-gray-700 dark:shadow-none p-2 hover:scale-110 transition duration-500'>
            <img src={photo} alt="Foto de Caio Pfaltzgraff" className="rounded-full h-60 md:h-64 lg:h-72 xl:h-80 m-0"/>
          </div>
        </div>
        <div className="dark:text-light-200 text-2xl lg:text-3xl font-medium mt-6 flex flex-col items-center md:items-start px-4 md:px-0">
          <div>
            <p className="mb-4">Olá, seja Bem-<span className="text-orange-700">Vindo!</span></p>
            <p className="font-title text-3xl lg:text-4xl font-bold mb-1">Sou Caio <span className="text-orange-700">Pfaltzgraff</span></p>
            <p >
              E sou um <span className="font-developer font-medium">desenvolvedor Full-<span className="text-orange-700">Stack</span></span>
            </p>
            <div className="flex gap-4 mt-8">
              <a href="https://www.linkedin.com/in/caio-pfaltzgraff/" target="_blank" className="hover:animate-bounce">
                <FaLinkedin className="h-10 lg:h-12 w-auto hover:text-linkedin"/>
              </a>
              <a href="https://github.com/Caio-Pfaltzgraff" target="_blank" className="hover:animate-bounce">
                <FaGithub className="h-10 lg:h-12 w-auto"/>
              </a>
              <a href="mailto:caio.rllcr@gmail.com" target="_blank" className="hover:animate-bounce">
                <BiLogoGmail className="h-10 lg:h-12 w-auto hover:text-gmail"/>
              </a>
              <a href="https://wa.me/5521980891793" target="_blank" className="hover:animate-bounce">
                <FaWhatsapp className="h-10 lg:h-12 w-auto hover:text-whatsapp"/>
              </a>
            </div>
          </div>
          <div className='flex justify-center md:justify-start mt-10'>
            <button className="bg-orange-700 hover:bg-orange-600 text-lg p-3 lg:px-10 lg:py-4 rounded-lg text-light-100 font-bold flex justify-center items-center transition-colors duration-700">
              Download CV <DocumentArrowDownIcon className="h-6 ml-2 animate-bounce"/>
            </button>
          </div>
        </div>
      </section>
    </article>
  );
}
