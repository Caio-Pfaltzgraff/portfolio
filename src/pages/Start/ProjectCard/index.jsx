import { BiLogoTypescript } from "react-icons/bi";
import { FaGithub, FaJava } from "react-icons/fa6";
import { RiExternalLinkFill, RiJavascriptFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import photo from '/projects/project.png';

export function ProjectCard() {
  return (
    <div className="flex flex-col gap-y-4 rounded-lg p-2 box-border border dark:border-[#3f3f3f] shadow-lg max-w-md">
      <div className="flex gap-2">
        <div className="rounded-full h-3 w-3 xl:h-3.5 xl:w-3.5 bg-red-500"/>
        <div className="rounded-full h-3 w-3 xl:h-3.5 xl:w-3.5 bg-yellow-500"/>
        <div className="rounded-full h-3 w-3 xl:h-3.5 xl:w-3.5 bg-green-500"/>
      </div>
      <div className="flex justify-center">
        <img 
          src={photo} 
          alt="Projeto" 
          className="object-cover aspect-video rounded-md bg-no-repeat outline-none"
        />
      </div>
      <h3 className="text-2xl font-semibold font-title dark:text-light-200">
        NLW-Notes
      </h3>
      <p className="line-clamp-5 font-medium dark:text-light-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti velit
        eos iusto commodi non labore placeat eum illum provident tenetur hic
        veritatis illo excepturi fuga dignissimos, nobis eligendi doloribus
        quasi?
      </p>
      <div className="flex gap-2 text-3xl text-gray-600 dark:text-gray-400 flex-wrap">
        <Tooltip
          title="Javascript"
          interactive={true}
          arrow={true}
          animation="perspective"
        >
          <RiJavascriptFill />
        </Tooltip>
        <Tooltip
          title="Java"
          interactive={true}
          arrow={true}
          animation="perspective"
        >
          <FaJava />
        </Tooltip>
        <Tooltip
          title="Typescript"
          interactive={true}
          arrow={true}
          animation="perspective"
        >
          <BiLogoTypescript />
        </Tooltip>
        <Tooltip
          title="Vite"
          interactive={true}
          arrow={true}
          animation="perspective"
        >
          <SiVite />
        </Tooltip>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 box-border">
        <button className="flex gap-2 justify-center items-center outline-none cursor-pointer bg-orange-700 hover:bg-orange-600 py-2 px-6 rounded-3xl font-bold text-white tracking-wide">
          Site <RiExternalLinkFill />
        </button>
        <button className="flex gap-2 justify-center items-center outline-none cursor-pointer bg-orange-700 hover:bg-orange-600 py-2 px-6 rounded-3xl font-bold text-white tracking-wide">
          Github <FaGithub />
        </button>
      </div>
    </div>
  );
}
