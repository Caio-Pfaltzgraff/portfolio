import { SectionTemplate } from "../../components/SectionTemplate.jsx";
import photo2 from "/my-photo2.png";

export function AboutMeSection() {
  return (
    <SectionTemplate title="Sobre mim" id="aboutme">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex justify-center lg:justify-start items-center md:pl-3">
          <div className="p-2 max-w-sm">
            <div className="border shadow-lg lg:shadow-xl dark:shadow-none p-2 md:p-3 -rotate-6 rounded-sm dark:bg-gray-300">
              <img
                src={photo2}
                alt="Foto do Caio Pfaltzgraff"
                className="aspect-square rounded-sm mb-[8vw] md:mb-10"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-4 lg:gap-y-8">
          <p className="leading-relaxed tracking-wider dark:text-light-200">
            Sou recém-formado em Análise e Desenvolvimento de Sistemas com
            experiência em desenvolvimento de APIs Rest (
            <span className="font-bold dark:text-orange-600">
              Java
            </span>
            ,{" "}
            <span className="font-bold dark:text-orange-600">
              Spring Boot
            </span>
            ) e interfaces interativas (
            <span className="font-bold dark:text-orange-600">
              React
            </span>
            ,{" "}
            <span className="font-bold dark:text-orange-600">
              JavaScript
            </span>
            ,{" "}
            <span className="font-bold dark:text-orange-600">
              TypeScript
            </span>
            ).
          </p>

          <p className="leading-relaxed tracking-wider dark:text-light-200">
            Além das habilidades técnicas, trabalho minhas habilidades
            comportamentais, como comunicação, organização e
            proatividade, características que me fazem ser um dev versátil.
          </p>

          <p className="leading-relaxed tracking-wider dark:text-light-200">
            Estou atualmente em busca da minha primeira oportunidade como
            desenvolvedor web full-stack Jr, ansioso para aplicar e ampliar
            minhas habilidades em um ambiente desafiador.
          </p>
        </div>
      </div>
    </SectionTemplate>
  );
}
