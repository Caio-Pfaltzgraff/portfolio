import { FaGithub } from "react-icons/fa6";
import { RiExternalLinkFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

export function Card({image, title, description, techs, github, deploy}) {
  return (
    <div className="grid gap-y-4 border px-[2.5vw] py-[4vw] md:px-3 md:py-4 lg:px-3.5 rounded-lg dark:shadow-lg dark:shadow-orange-800 max-w-md shadow-lg">
      <div className="flex gap-2 ml-0.5">
        <div className="rounded-full size-3 bg-red-500" />
        <div className="rounded-full size-3 bg-yellow-500" />
        <div className="rounded-full size-3 bg-green-500" />
      </div>

      <div className="h-48 xl:h-52">
        {image ? (
          <img src={image} alt="Projeto" className="object-cover object-left aspect-auto size-full rounded-md" />
        ) : (
          <div className="bg-azul-escuro flex justify-center items-center h-full w-full rounded-md">
            <TbApi className="text-light-200 size-16"/>
          </div>
        )}
      </div>

      <h4 className="text-xl font-bold dark:text-light-200">{title}</h4>

      <p className="line-clamp-5 dark:text-gray-400">{description}</p>

      <div className="flex flex-wrap gap-x-3 gap-y-4 text-gray-600 dark:text-white mb-2">
        {techs.map((tech => (
          <Tooltip
          title={tech.name}
          interactive={true}
          arrow={true}
          animation="perspective"
          key={tech.name}
        >
          <img src={tech.image} className="size-8"/>
        </Tooltip>
        )))}
      </div>

      <div className="flex justify-center sm:justify-start flex-wrap gap-4 md:gap-6 box-border mb-1.5">
        <a 
          href={github}
          target="_blank"
          className="flex gap-2 items-center border-2 border-orange-700 rounded-2xl py-2 px-8 text-sm dark:text-light-200 hover:text-orange-700 hover:scale-105 duration-500 dark:hover:text-orange-700 tracking-wider"
        >
          Github <FaGithub className="text-lg"/>
        </a>
        {deploy && <a 
          href={deploy}
          target="_blank"
          className="flex gap-2 items-center border-2 border-orange-700 rounded-2xl py-2 px-8 text-sm dark:text-light-200 hover:text-orange-700 hover:scale-105 duration-500 dark:hover:text-orange-700 tracking-wider"
        >
          Site <RiExternalLinkFill className="text-lg"/>
        </a>}
      </div>
    </div>
  );
}
