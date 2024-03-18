import { DocumentArrowDownIcon, UserIcon } from '@heroicons/react/24/solid';
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import photo from "../assets/my-photo.png";
import photo2 from "../assets/my-photo2.png";
import skills from '../data/skills.json';

export function Start() {
  return (
    <article>
      <section className="padding-page bg-light-100 dark:bg-dark-200">
        <div className="flex flex-col md:justify-between md:flex-row-reverse md:items-center py-12 md:py-20 lg:py-24">
          <div className="flex justify-center items-center">
            <div className="border dark:border-light-200 rounded-full shadow-lg shadow-gray-700 dark:shadow-none p-2 hover:scale-110 transition duration-500">
              <img
                src={photo}
                alt="Foto de Caio Pfaltzgraff"
                className="rounded-full h-60 md:h-64 lg:h-72 xl:h-80 m-0"
              />
            </div>
          </div>
          <div className="dark:text-light-200 text-2xl lg:text-3xl font-medium mt-6 flex flex-col items-center md:items-start px-4 md:px-0">
            <div>
              <p className="mb-4">
                Olá, seja Bem-<span className="text-orange-700">Vindo!</span>
              </p>
              <h1 className="font-title text-3xl lg:text-4xl font-bold mb-1">
                Sou Caio <span className="text-orange-700">Pfaltzgraff</span>
              </h1>
              <p>
                E sou um{" "}
                <span className="font-developer font-medium">
                  desenvolvedor Full-
                  <span className="text-orange-700">Stack</span>
                </span>
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.linkedin.com/in/caio-pfaltzgraff/"
                  target="_blank"
                  className="hover:animate-bounce"
                >
                  <FaLinkedin className="h-10 lg:h-12 w-auto hover:text-linkedin" />
                </a>
                <a
                  href="https://github.com/Caio-Pfaltzgraff"
                  target="_blank"
                  className="hover:animate-bounce"
                >
                  <FaGithub className="h-10 lg:h-12 w-auto hover:text-github" />
                </a>
                <a
                  href="mailto:caio.rllcr@gmail.com"
                  target="_blank"
                  className="hover:animate-bounce"
                >
                  <BiLogoGmail className="h-10 lg:h-12 w-auto hover:text-gmail" />
                </a>
                <a
                  href="https://wa.me/5521980891793"
                  target="_blank"
                  className="hover:animate-bounce"
                >
                  <FaWhatsapp className="h-10 lg:h-12 w-auto hover:text-whatsapp" />
                </a>
              </div>
              <div className='flex justify-center md:justify-start mt-10'>
                <button className="bg-orange-700 hover:bg-orange-600 text-lg p-3 lg:px-10 lg:py-4 rounded-lg text-light-100 font-bold flex items-center transition-colors duration-700 border-none outline-none">
                  Download CV{" "}
                  <DocumentArrowDownIcon className="h-6 ml-2 animate-bounce" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="padding-page dark:bg-dark-100">
        <div className='py-10 md:py-12 lg:py-14'>
          <div className="text-center pb-10 md:pb-12 lg:pb-14">
            <h2 className="text-3xl font-title font-bold dark:text-light-100">
              Quem sou eu ?
            </h2>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
            <div className="m-4 md:m-2 flex justify-center md:justify-start md:pb-24 lg:pb-0">
              <div className="border shadow-lg -rotate-6 rounded-sm max-w-80 md:max-w-[400px] lg:max-w-[460px] md:min-h-80 bg-light-200 dark:border-none dark:shadow-gray-800">
                <div className="p-3 lg:p-4">
                  <img src={photo2} alt="Caio turistando" />
                </div>
                <div className="flex justify-center items-center pb-3 lg:pb-4">
                  <p className="md:text-lg">Turistando</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 md:space-y-10">
              <div className='space-y-4 font-medium lg:text-lg 2xl:text-xl dark:text-light-100'>
                <p>
                  Sou recém-formado em Análise e Desenvolvimento de Sistemas com
                  experiência em desenvolvimento de APIs Rest (Java/Spring Boot) e
                  interfaces interativas (React/JavaScript/TypeScript).
                </p>
                <p>
                  Além das habilidades técnicas, trabalho minhas habilidades
                  comportamentais, como comunicação, dedicação e organização, o
                  que me faz ser um dev versátil.
                </p>
                <p>
                  Estou atualmente em busca da minha primeira oportunidade como
                  desenvolvedor web Jr ou trainee,ansioso para aplicar e ampliar
                  minhas habilidades em um ambiente desafiador.
                </p>
              </div>
              <div className="flex gap-6 justify-center">
                <button className="bg-azul-escuro hover:bg-blue-950 dark:bg-orange-700 dark:hover:bg-orange-600 text-lg p-3 lg:px-10 lg:py-4 rounded-lg text-light-100 font-bold flex items-center transition-colors duration-700 border-none outline-none">
                  Saiba mais
                  <UserIcon className="h-6 ml-2 " />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='padding-page bg-light-100 dark:bg-dark-200'>
        <div className='py-10 md:py-12 lg:py-14'>
          <div className="text-center pb-10 md:pb-12 lg:pb-14">
            <h2 className="text-3xl font-title font-bold dark:text-light-100">
              Habilidades
            </h2>
          </div>
          <div className='flex justify-center'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-y-10 justify-center border-2 border-gray-400 dark:border-[#3f3f3f] rounded-xl px-4 md:px-6 py-10 sm:py-10  box-border max-w-2xl lg:max-w-4xl xl:max-w-5xl'>
              {skills.map( skill => (
                <div className='flex flex-col justify-center gap-4 items-center dark:text-light-200' key={skill.name}>
                  <img src={skill.icon} alt={skill.name} className='aspect-square max-w-16 max-h-16 hover:-translate-y-2 duration-500'/>
                  <p className='text-center font-developer font-semibold text-lg'>{skill.name}</p>
                  <p className='text-gray-700 dark:text-gray-400 font-medium'>{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
