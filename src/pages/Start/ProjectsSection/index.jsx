import { FaEye } from "react-icons/fa6";
import { SectionTemplate } from "../../../components/SectionTemplate";
import { Card } from './Card';

export function ProjectsSection() {
  return (
    <SectionTemplate title="Projetos">
      <div className="grid lg:grid-rows-1 justify-center gap-8 md:gap-x-4 xl:gap-10  md:grid-cols-2 lg:grid-cols-3 px-2">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="flex justify-center mt-8 lg:mt-12">
        <button className="bg-azul-escuro hover:bg-blue-950 dark:bg-blue-950 dark:hover:bg-blue-900 text-lg p-3 lg:px-10 lg:py-4 rounded-lg text-light-100 font-bold flex items-center gap-x-2 transition-colors duration-700 border-none outline-none">
          Ver Mais <FaEye />
        </button>
      </div>
    </SectionTemplate>
  );
}
