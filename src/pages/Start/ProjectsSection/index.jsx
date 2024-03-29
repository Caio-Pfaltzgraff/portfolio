import { FaEye } from "react-icons/fa6";
import { SectionTemplate } from "../../../components/SectionTemplate";
import { Card } from './Card';

export function ProjectsSection() {
  return (
    <SectionTemplate title="Projetos">
      <div className="grid gap-y-10 gap-x-6 xl:gap-x-8 justify-center md:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="flex justify-center items-center mt-8 lg:mt-12">
        <button 
          className="bg-azul-escuro hover:bg-blue-950 dark:bg-blue-950 dark:hover:bg-blue-900 text-lg p-3 lg:px-10 lg:py-4 rounded-lg text-light-100 font-bold flex items-center gap-x-2 transition-colors duration-700 border-none outline-none"
        >
          Ver mais <FaEye />
        </button>
      </div>
    </SectionTemplate>
  );
}
