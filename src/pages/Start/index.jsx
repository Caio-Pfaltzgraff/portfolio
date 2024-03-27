import { DocumentArrowDownIcon, UserIcon } from '@heroicons/react/24/solid';
import { BiLogoGmail } from "react-icons/bi";
import { FaEye, FaGithub, FaLinkedin, FaUser, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { LiaRobotSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import photo from "../../assets/my-photo.png";
import photo2 from "../../assets/my-photo2.png";
import { ContactForm } from '../../components/ContactForm';
import { LinkIcon } from '../../components/LinkIcon';
import aboutme from '../../data/aboutme.json';
import skills from '../../data/skills.json';
import { ProjectCard } from './ProjectCard';
import { SkillsCard } from './SkillsCard';
import { Title } from './Title';

export default function Start() {
  return (
    <article>
      <section className="padding-page">
        <div className="flex flex-col mx-auto max-w-screen-xl md:justify-between md:flex-row-reverse md:items-center py-12 md:py-20 lg:py-24">
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
                <LinkIcon path="https://www.linkedin.com/in/caio-pfaltzgraff/" animation={true} >
                  <FaLinkedin className="h-10 lg:h-12 w-auto hover:text-linkedin" />
                </LinkIcon>
                <LinkIcon path="https://github.com/Caio-Pfaltzgraff" animation={true} >
                  <FaGithub className="h-10 lg:h-12 w-auto hover:text-github" />
                </LinkIcon>
                <LinkIcon path="mailto:caio.rllcr@gmail.com" animation={true} >
                  <BiLogoGmail className="h-10 lg:h-12 w-auto hover:text-gmail" />
                </LinkIcon>
                <LinkIcon path="https://wa.me/5521980891793" animation={true} >
                  <FaWhatsapp className="h-10 lg:h-12 w-auto hover:text-whatsapp" />
                </LinkIcon>
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
      
      <section className="padding-page">
        <div className='py-10 md:py-12 lg:py-14 mx-auto max-w-screen-xl'>
          <Title content="Quem sou eu ?" />

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
                {aboutme.map(text => (
                  <p key={text.id}>
                    {text.content}
                  </p>
                ))}
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

      <section className='padding-page'>
        <div className='py-10 md:py-12 lg:py-14 mx-auto max-w-screen-xl'>
          <Title content="Habilidades" />

          <div className='flex justify-center px-2'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-y-10 justify-center border-2 border-gray-400 dark:border-[#3f3f3f] rounded-xl px-4 md:px-6 py-10 sm:py-10 box-border max-w-2xl lg:max-w-4xl xl:max-w-5xl'>
              { skills.map( skill => <SkillsCard skill={skill} key={skill.name} />) }
            </div>
          </div>
        </div>
      </section>

      <section className="padding-page">
        <div className='py-10 md:py-12 lg:py-14 mx-auto max-w-screen-xl'>
          <Title content="Projetos" />

          <div className='grid lg:grid-rows-1 justify-center gap-8 md:gap-x-4 xl:gap-10  md:grid-cols-2 lg:grid-cols-3 px-2'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>

          <div className='flex justify-center mt-8 lg:mt-12'>
            <button className='bg-azul-escuro hover:bg-blue-950 dark:bg-orange-700 dark:hover:bg-orange-600 text-lg p-3 lg:px-10 lg:py-4 rounded-lg text-light-100 font-bold flex items-center gap-x-2 transition-colors duration-700 border-none outline-none'>
              Ver Mais {" "}
              <FaEye />
            </button>
          </div>
        </div>
      </section>

      <section className='padding-page'>
        <div className='py-10 md:py-12 lg:py-14 mx-auto max-w-screen-xl'>
          <Title content="Conquistas" />

          <div className='grid gap-y-6 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            <div className='space-y-3 border-2 border-orange-700 bg-azul-escuro dark:bg-transparent rounded-lg p-6 md:col-span-2'>
              <h6 className='font-title font-semibold text-lg sm:text-xl tracking-widest text-light-100'>
                Tecnólogo
              </h6>
              <p className='text-light-100 text-lg sm:text-2xl font-bold line-clamp-2'>Análise e Desenvolvimento de Sistemas - <span className='font-normal text-base'>Universidade Estácio de Sá</span></p>
              <p className='text-light-100 text-lg sm:text-xl font-semibold'>2021 - 2024</p>
            </div>
            <div className='space-y-3 border-2 border-azul-escuro dark:border-zinc-500 bg-azul-escuro dark:bg-transparent rounded-lg p-6'>
              <h6 className='font-title font-semibold text-lg sm:text-xl tracking-widest text-light-100'>
                Curso
              </h6>
              <p className='text-light-100 text-lg sm:text-2xl font-bold line-clamp-2'>Java e Spring Boot - <span className='font-normal text-base'>Alura</span></p>
              <p className='text-light-100 text-lg sm:text-xl font-semibold'>40h - 2023</p>
            </div>
            <div className='space-y-3 border-2 border-azul-escuro dark:border-zinc-500 bg-azul-escuro dark:bg-transparent rounded-lg p-6'>
              <h6 className='font-title font-semibold text-lg sm:text-xl tracking-widest text-light-100'>
                Curso
              </h6>
              <p className='text-light-100 text-lg sm:text-2xl font-bold line-clamp-2'>Java e Spring Boot - <span className='font-normal text-base'>Alura</span></p>
              <p className='text-light-100 text-lg sm:text-xl font-semibold'>40h - 2023</p>
            </div>
            <div className='space-y-3 border-2 border-azul-escuro dark:border-zinc-500 bg-azul-escuro dark:bg-transparent rounded-lg p-6'>
              <h6 className='font-title font-semibold text-lg sm:text-xl tracking-widest text-light-100'>
                Curso
              </h6>
              <p className='text-light-100 text-lg sm:text-2xl font-bold line-clamp-2'>Java e Spring Boot - <span className='font-normal text-base'>Alura</span></p>
              <p className='text-light-100 text-lg sm:text-xl font-semibold'>40h - 2023</p>
            </div>
            <div className='space-y-3 border-2 border-azul-escuro dark:border-zinc-500 bg-azul-escuro dark:bg-transparent rounded-lg p-6'>
              <h6 className='font-title font-semibold text-lg sm:text-xl tracking-widest text-light-100'>
                Curso
              </h6>
              <p className='text-light-100 text-lg sm:text-2xl font-bold line-clamp-2'>Java e Spring Boot - <span className='font-normal text-base'>Alura</span></p>
              <p className='text-light-100 text-lg sm:text-xl font-semibold'>40h - 2023</p>
            </div>
            <div className='space-y-3 border-2 border-azul-escuro dark:border-zinc-500 bg-azul-escuro dark:bg-transparent rounded-lg p-6'>
              <h6 className='font-title font-semibold text-lg sm:text-xl tracking-widest text-light-100'>
                Curso
              </h6>
              <p className='text-light-100 text-lg sm:text-2xl font-bold line-clamp-2'>Java e Spring Boot - <span className='font-normal text-base'>Alura</span></p>
              <p className='text-light-100 text-lg sm:text-xl font-semibold'>40h - 2023</p>
            </div>
            <div className='space-y-3 border-2 border-azul-escuro dark:border-zinc-500 bg-azul-escuro dark:bg-transparent rounded-lg p-6'>
              <h6 className='font-title font-semibold text-lg sm:text-xl tracking-widest text-light-100'>
                Curso
              </h6>
              <p className='text-light-100 text-lg sm:text-2xl font-bold line-clamp-2'>Java e Spring Boot - <span className='font-normal text-base'>Alura</span></p>
              <p className='text-light-100 text-lg sm:text-xl font-semibold'>40h - 2023</p>
            </div>
            <div className='space-y-3 border-2 border-azul-escuro dark:border-zinc-500 bg-azul-escuro dark:bg-transparent rounded-lg p-6'>
              <h6 className='font-title font-semibold text-lg sm:text-xl tracking-widest text-light-100'>
                Curso
              </h6>
              <p className='text-light-100 text-lg sm:text-2xl font-bold line-clamp-2'>Java e Spring Boot - <span className='font-normal text-base'>Alura</span></p>
              <p className='text-light-100 text-lg sm:text-xl font-semibold'>40h - 2023</p>
            </div>
            <div className='space-y-3 border-2 border-azul-escuro dark:border-zinc-500 bg-azul-escuro dark:bg-transparent rounded-lg p-6'>
              <h6 className='font-title font-semibold text-lg sm:text-xl tracking-widest text-light-100'>
                Curso
              </h6>
              <p className='text-light-100 text-lg sm:text-2xl font-bold line-clamp-2'>Java e Spring Boot - <span className='font-normal text-base'>Alura</span></p>
              <p className='text-light-100 text-lg sm:text-xl font-semibold'>40h - 2023</p>
            </div>
            <div className='space-y-3 border-2 border-azul-escuro dark:border-zinc-500 bg-azul-escuro dark:bg-transparent rounded-lg p-6'>
              <h6 className='font-title font-semibold text-lg sm:text-xl tracking-widest text-light-100'>
                Curso
              </h6>
              <p className='text-light-100 text-lg sm:text-2xl font-bold line-clamp-2'>Java e Spring Boot - <span className='font-normal text-base'>Alura</span></p>
              <p className='text-light-100 text-lg sm:text-xl font-semibold'>40h - 2023</p>
            </div>
            <div className='space-y-3 border-2 border-azul-escuro dark:border-zinc-500 bg-azul-escuro dark:bg-transparent rounded-lg p-6'>
              <h6 className='font-title font-semibold text-lg sm:text-xl tracking-widest text-light-100'>
                Curso
              </h6>
              <p className='text-light-100 text-lg sm:text-2xl font-bold line-clamp-2'>Java e Spring Boot - <span className='font-normal text-base'>Alura</span></p>
              <p className='text-light-100 text-lg sm:text-xl font-semibold'>40h - 2023</p>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-page">
        <div className='py-10 md:py-12 lg:py-14 mx-auto max-w-screen-xl'>
          <Title content="Serviços" />

          <div className='grid justify-center md:flex md:justify-between md:gap-x-3 gap-y-6'>
            <div className='grid justify-items-center gap-y-4 py-10 w-64 sm:w-80 bg-azul-escuro dark:bg-zinc-800 border-b-4 border-orange-700'>
              <HiOutlineDevicePhoneMobile className='text-4xl text-orange-700'/>
              <p className='font-medium text-center text-light-100 dark:text-zinc-600'>Criação de sites</p>
            </div>
            <div className='grid justify-items-center gap-y-4 py-10 w-64 sm:w-80 bg-azul-escuro dark:bg-zinc-800 border-b-4 border-orange-700'>
              <TbApi className='text-4xl text-orange-700'/>
              <p className='font-medium text-center text-light-100 dark:text-zinc-600'>Criação de APIs</p>
            </div>
            <div className='grid justify-items-center gap-y-4 py-10 w-64 sm:w-80 bg-azul-escuro dark:bg-zinc-800 border-b-4 border-orange-700'>
              <LiaRobotSolid className='text-4xl text-orange-700'/>
              <p className='font-medium text-center text-light-100 dark:text-zinc-600'>Automações</p>
            </div>
          </div>
        </div>
      </section>

      <section className='padding-page'>
        <div className='py-10 md:py-12 lg:py-14 mx-auto max-w-screen-xl'>
          <Title content="Contato" />

          <div className='flex justify-center items-center'>
            <div className='grid md:grid-cols-2 gap-4 max-w-5xl'>
              <div className='space-y-4'>
                <h5 className='text-2xl font-bold font-title text-orange-700'>Se interessou?</h5>
                <p className='dark:text-light-200'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestias tenetur enim, libero iure veniam id impedit molestiae aperiam iste quae quidem quis quaerat ab mollitia quos? Nemo, quidem neque?
                </p>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-x-4'>
                    <div className='flex justify-center items-center h-11'>
                      <FaUser className='text-orange-700 text-2xl'/>
                    </div>
                    <div>
                      <p className='font-semibold dark:text-light-200'>Nome</p>
                      <p className='dark:text-gray-400'>Caio Pfaltzgraff</p>
                    </div>
                  </div>
                  <div className='flex gap-x-4'>
                    <div className='flex justify-center items-center h-11'>
                      <MdEmail className='text-orange-700 text-2xl'/>
                    </div>
                    <div>
                      <p className='font-semibold dark:text-light-200'>Email</p>
                      <p className='dark:text-gray-400'>caio.rllcr@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='space-y-4'>
                <h5 className='text-2xl font-bold font-title text-orange-700'>Mande uma mensagem</h5>
              
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
