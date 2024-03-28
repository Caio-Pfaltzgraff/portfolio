import { BiLogoGmail } from "react-icons/bi";
import { FaEye, FaGithub, FaLinkedin, FaUser, FaWhatsapp } from "react-icons/fa6";
import { HiDocumentArrowDown, HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { LiaRobotSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import photo2 from "../../assets/my-photo2.png";
import { ContactForm } from '../../components/ContactForm';
import { LinkIcon } from '../../components/LinkIcon';
import aboutme from '../../data/aboutme.json';
import skills from '../../data/skills.json';
import { ProjectCard } from './ProjectCard';
import { SkillsCard } from './SkillsCard';
import { Title } from './Title';

export default function Start() {
  function myAgeCalculator() {
    const today = new Date();
    const birthday = new Date('2002-04-04');
    let age = today.getFullYear() - birthday.getFullYear();
    const currentMonth = today.getMonth();
    const birthdayMonth = birthday.getMonth();

    if(currentMonth < birthdayMonth || (currentMonth === birthdayMonth && today.getDay() < birthday.getDay())) {
      age--;
    }

    return age;
  }

  return (
    <article className="w-full">
      <section>
        <div className="flex items-center max-w-screen-xl mx-auto h-screen padding-page">
          <div className="grid gap-y-6 md:gap-y-8">
            <div className="flex justify-center">
              <h1 className="font-extrabold text-[12vw] sm:text-[5.5rem] xl:text-8xl leading-tight text-center text-slate-800 dark:text-light-100 z-10">
                {"Seu próximo desenvolvedor "}{" "}
                <span className="bg-gradient-to-r from-blue-700 via-pink-700 to-orange-700 inline-block text-transparent bg-clip-text">
                  Fullstack
                </span>
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="max-w-2xl font-medium md:text-lg leading-relaxed dark:text-light-100 text-center">
                Olá, me chamo Caio Pfaltzgraff, {myAgeCalculator()} anos,
                desenvolvedor fullstack, backend,{" "}
                <span className="font-bold dark:text-orange-700">Java</span> e{" "}
                <span className="font-bold dark:text-orange-700">React</span>,
                saiba mais sobre mim
              </p>
            </div>
            <div className="flex justify-center gap-4 dark:text-light-100">
              <LinkIcon
                path="https://www.linkedin.com/in/caio-pfaltzgraff/"
                animation={true}
              >
                <FaLinkedin className="h-9 w-auto hover:text-linkedin" />
              </LinkIcon>
              <LinkIcon
                path="https://github.com/Caio-Pfaltzgraff"
                animation={true}
              >
                <FaGithub className="h-9 w-auto hover:text-github" />
              </LinkIcon>
              <LinkIcon path="mailto:caio.rllcr@gmail.com" animation={true}>
                <BiLogoGmail className="h-9 w-auto hover:text-gmail" />
              </LinkIcon>
              <LinkIcon path="https://wa.me/5521980891793" animation={true}>
                <FaWhatsapp className="h-9 w-auto hover:text-whatsapp" />
              </LinkIcon>
            </div>
            <div className="flex justify-center">
              <button className="bg-orange-700 hover:bg-orange-600 text-lg p-3 lg:px-10 lg:py-4 rounded-lg text-light-100 font-bold flex items-center transition-colors duration-700 border-none outline-none">
                Download CV{" "}
                <HiDocumentArrowDown className="h-6 w-6 ml-2 animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-10 md:py-12 lg:py-14 mx-auto max-w-screen-xl padding-page">
          <Title content="Sobre mim" />

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
              <div className="space-y-4 font-medium lg:text-lg 2xl:text-xl dark:text-light-100">
                {aboutme.map((text) => (
                  <p key={text.id}>{text.content}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-10 md:py-12 lg:py-14 mx-auto max-w-screen-xl padding-page">
          <Title content="Habilidades" />

          <div className="flex justify-center px-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-y-10 justify-center border-2 border-gray-400 dark:border-[#3f3f3f] rounded-xl px-4 md:px-6 py-10 sm:py-10 box-border max-w-2xl lg:max-w-4xl xl:max-w-5xl">
              {skills.map((skill) => (
                <SkillsCard skill={skill} key={skill.name} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-10 md:py-12 lg:py-14 mx-auto max-w-screen-xl padding-page">
          <Title content="Projetos" />

          <div className="grid lg:grid-rows-1 justify-center gap-8 md:gap-x-4 xl:gap-10  md:grid-cols-2 lg:grid-cols-3 px-2">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>

          <div className="flex justify-center mt-8 lg:mt-12">
            <button className="bg-azul-escuro hover:bg-blue-950 dark:bg-blue-950 dark:hover:bg-blue-900 text-lg p-3 lg:px-10 lg:py-4 rounded-lg text-light-100 font-bold flex items-center gap-x-2 transition-colors duration-700 border-none outline-none">
              Ver Mais <FaEye />
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="py-10 md:py-12 lg:py-14 mx-auto max-w-screen-xl padding-page">
          <Title content="Conquistas" />

          <div className="grid gap-y-6 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            <div className="space-y-3 border-2 border-orange-700 dark:bg-transparent shadow-lg dark:shadow-orange-900 hover:scale-110 duration-500 rounded-lg p-6 md:col-span-2">
              <h6 className="font-title font-semibold text-lg sm:text-xl tracking-widest dark:text-light-100">
                Tecnólogo
              </h6>
              <p className="dark:text-light-100 text-lg sm:text-2xl font-bold line-clamp-2">
                Análise e Desenvolvimento de Sistemas -{" "}
                <span className="font-normal text-base">
                  Universidade Estácio de Sá
                </span>
              </p>
              <p className="dark:text-light-100 text-lg sm:text-xl font-semibold">
                2021 - 2024
              </p>
            </div>

            <div className="space-y-3 border shadow-lg dark:shadow-gray-700 hover:scale-110 duration-500 dark:border-zinc-500 rounded-lg p-6">
              <h6 className="font-title font-semibold text-lg sm:text-xl tracking-widest dark:text-light-100">
                Curso
              </h6>
              <p className="dark:text-light-100 text-lg sm:text-2xl font-bold line-clamp-2">
                Java e Spring Boot -{" "}
                <span className="font-normal text-base">Alura</span>
              </p>
              <p className="dark:text-light-100 text-lg sm:text-xl font-semibold">
                40h - 2023
              </p>
            </div>

            <div className="space-y-3 border shadow-lg dark:shadow-gray-700 hover:scale-110 duration-500 dark:border-zinc-500 rounded-lg p-6">
              <h6 className="font-title font-semibold text-lg sm:text-xl tracking-widest dark:text-light-100">
                Curso
              </h6>
              <p className="dark:text-light-100 text-lg sm:text-2xl font-bold line-clamp-2">
                Java e Spring Boot -{" "}
                <span className="font-normal text-base">Alura</span>
              </p>
              <p className="dark:text-light-100 text-lg sm:text-xl font-semibold">
                40h - 2023
              </p>
            </div>

            <div className="space-y-3 border shadow-lg dark:shadow-gray-700 hover:scale-110 duration-500 dark:border-zinc-500 rounded-lg p-6">
              <h6 className="font-title font-semibold text-lg sm:text-xl tracking-widest dark:text-light-100">
                Curso
              </h6>
              <p className="dark:text-light-100 text-lg sm:text-2xl font-bold line-clamp-2">
                Java e Spring Boot -{" "}
                <span className="font-normal text-base">Alura</span>
              </p>
              <p className="dark:text-light-100 text-lg sm:text-xl font-semibold">
                40h - 2023
              </p>
            </div>

            <div className="space-y-3 border shadow-lg dark:shadow-gray-700 hover:scale-110 duration-500 dark:border-zinc-500 rounded-lg p-6">
              <h6 className="font-title font-semibold text-lg sm:text-xl tracking-widest dark:text-light-100">
                Curso
              </h6>
              <p className="dark:text-light-100 text-lg sm:text-2xl font-bold line-clamp-2">
                Java e Spring Boot -{" "}
                <span className="font-normal text-base">Alura</span>
              </p>
              <p className="dark:text-light-100 text-lg sm:text-xl font-semibold">
                40h - 2023
              </p>
            </div>

            <div className="space-y-3 border shadow-lg dark:shadow-gray-700 hover:scale-110 duration-500 dark:border-zinc-500 rounded-lg p-6">
              <h6 className="font-title font-semibold text-lg sm:text-xl tracking-widest dark:text-light-100">
                Curso
              </h6>
              <p className="dark:text-light-100 text-lg sm:text-2xl font-bold line-clamp-2">
                Java e Spring Boot -{" "}
                <span className="font-normal text-base">Alura</span>
              </p>
              <p className="dark:text-light-100 text-lg sm:text-xl font-semibold">
                40h - 2023
              </p>
            </div>

            <div className="space-y-3 border shadow-lg dark:shadow-gray-700 hover:scale-110 duration-500 dark:border-zinc-500 rounded-lg p-6">
              <h6 className="font-title font-semibold text-lg sm:text-xl tracking-widest dark:text-light-100">
                Curso
              </h6>
              <p className="dark:text-light-100 text-lg sm:text-2xl font-bold line-clamp-2">
                Java e Spring Boot -{" "}
                <span className="font-normal text-base">Alura</span>
              </p>
              <p className="dark:text-light-100 text-lg sm:text-xl font-semibold">
                40h - 2023
              </p>
            </div>

            <div className="space-y-3 border shadow-lg dark:shadow-gray-700 hover:scale-110 duration-500 dark:border-zinc-500 rounded-lg p-6">
              <h6 className="font-title font-semibold text-lg sm:text-xl tracking-widest dark:text-light-100">
                Curso
              </h6>
              <p className="dark:text-light-100 text-lg sm:text-2xl font-bold line-clamp-2">
                Java e Spring Boot -{" "}
                <span className="font-normal text-base">Alura</span>
              </p>
              <p className="dark:text-light-100 text-lg sm:text-xl font-semibold">
                40h - 2023
              </p>
            </div>

            <div className="space-y-3 border shadow-lg dark:shadow-gray-700 hover:scale-110 duration-500 dark:border-zinc-500 rounded-lg p-6">
              <h6 className="font-title font-semibold text-lg sm:text-xl tracking-widest dark:text-light-100">
                Curso
              </h6>
              <p className="dark:text-light-100 text-lg sm:text-2xl font-bold line-clamp-2">
                Java e Spring Boot -{" "}
                <span className="font-normal text-base">Alura</span>
              </p>
              <p className="dark:text-light-100 text-lg sm:text-xl font-semibold">
                40h - 2023
              </p>
            </div>

            <div className="space-y-3 border shadow-lg dark:shadow-gray-700 hover:scale-110 duration-500 dark:border-zinc-500 rounded-lg p-6">
              <h6 className="font-title font-semibold text-lg sm:text-xl tracking-widest dark:text-light-100">
                Curso
              </h6>
              <p className="dark:text-light-100 text-lg sm:text-2xl font-bold line-clamp-2">
                Java e Spring Boot -{" "}
                <span className="font-normal text-base">Alura</span>
              </p>
              <p className="dark:text-light-100 text-lg sm:text-xl font-semibold">
                40h - 2023
              </p>
            </div>

            <div className="space-y-3 border shadow-lg dark:shadow-gray-700 hover:scale-110 duration-500 dark:border-zinc-500 rounded-lg p-6">
              <h6 className="font-title font-semibold text-lg sm:text-xl tracking-widest dark:text-light-100">
                Curso
              </h6>
              <p className="dark:text-light-100 text-lg sm:text-2xl font-bold line-clamp-2">
                Java e Spring Boot -{" "}
                <span className="font-normal text-base">Alura</span>
              </p>
              <p className="dark:text-light-100 text-lg sm:text-xl font-semibold">
                40h - 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-10 md:py-12 lg:py-14 mx-auto max-w-screen-xl padding-page">
          <Title content="Serviços" />

          <div className="grid justify-center md:flex md:justify-between md:gap-x-3 gap-y-6">
            <div className="grid justify-items-center gap-y-4 py-10 w-64 sm:w-80 bg-azul-escuro dark:bg-dark-100 border-b-4 border-orange-700">
              <HiOutlineDevicePhoneMobile className="text-4xl text-orange-700" />
              <p className="font-medium text-center text-light-100 dark:text-zinc-600">
                Criação de sites
              </p>
            </div>
            <div className="grid justify-items-center gap-y-4 py-10 w-64 sm:w-80 bg-azul-escuro dark:bg-dark-100 border-b-4 border-orange-700">
              <TbApi className="text-4xl text-orange-700" />
              <p className="font-medium text-center text-light-100 dark:text-zinc-600">
                Criação de APIs
              </p>
            </div>
            <div className="grid justify-items-center gap-y-4 py-10 w-64 sm:w-80 bg-azul-escuro dark:bg-dark-100 border-b-4 border-orange-700">
              <LiaRobotSolid className="text-4xl text-orange-700" />
              <p className="font-medium text-center text-light-100 dark:text-zinc-600">
                Automações
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-10 md:py-12 lg:py-14 mx-auto max-w-screen-xl padding-page">
          <Title content="Contato" />

          <div className="flex justify-center items-center">
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
              <div className="space-y-4">
                <h5 className="text-2xl font-bold font-title text-orange-700">
                  Se interessou?
                </h5>
                <p className="dark:text-light-200 leading-relaxed">
                  Se você estiver em busca de alguém dedicado, com fome por
                  aprendizado e que deseja crescer junto à sua empresa, ficaria
                  honrado em ter essa oportunidade. Estou disponível também para novos
                  projetos e colaborações. Sinta-se à vontade para entrar em
                  contato e juntos transformarmos ideias em realidade. Entre em
                  contato e marcamos uma conversa para discutir como podemos
                  trabalhar juntos.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-x-4">
                    <div className="flex justify-center items-center h-11">
                      <FaUser className="text-orange-700 text-2xl" />
                    </div>
                    <div>
                      <p className="font-semibold dark:text-light-200">Nome</p>
                      <p className="dark:text-gray-400">Caio Pfaltzgraff</p>
                    </div>
                  </div>
                  <div className="flex gap-x-4">
                    <div className="flex justify-center items-center h-11">
                      <MdEmail className="text-orange-700 text-2xl" />
                    </div>
                    <div>
                      <p className="font-semibold dark:text-light-200">Email</p>
                      <p className="dark:text-gray-400">caio.rllcr@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h5 className="text-2xl font-bold font-title text-orange-700">
                  Mande uma mensagem
                </h5>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
