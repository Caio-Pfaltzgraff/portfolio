import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
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
          className="flex justify-center items-center gap-1.5 border-2 border-orange-700 dark:border-orange-600 rounded-full px-5 py-2 text-sm text-orange-700 dark:text-orange-600 tracking-wider hover:bg-orange-700 hover:dark:bg-orange-600 hover:text-white dark:hover:text-white duration-400"
        >
          Github <FaGithub className="size-5"/>
        </a>
        {deploy && <a 
          href={deploy}
          target="_blank"
          className="flex justify-center items-center gap-1.5 border-2 border-orange-700 dark:border-orange-600 rounded-full px-5 py-2 text-sm text-orange-700 dark:text-orange-600 tracking-wider hover:bg-orange-700 hover:dark:bg-orange-600 hover:text-white dark:hover:text-white duration-400"
        >
          Site <CiGlobe className="size-5"/>
        </a>}
      </div>
    </div>
  );
}
