import { FaGithub } from "react-icons/fa6";
import { RiExternalLinkFill } from "react-icons/ri";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import photo from "/projects/project.png";

export function Card() {
  return (
    <div className="grid gap-y-4 border px-[2.5vw] py-[4vw] md:px-3 md:py-4 lg:px-3.5 rounded-lg dark:shadow-lg dark:shadow-orange-800 max-w-md shadow-lg">
      <div className="flex gap-2 ml-0.5">
        <div className="rounded-full h-3 w-3 xl:h-3.5 xl:w-3.5 bg-red-500" />
        <div className="rounded-full h-3 w-3 xl:h-3.5 xl:w-3.5 bg-yellow-500" />
        <div className="rounded-full h-3 w-3 xl:h-3.5 xl:w-3.5 bg-green-500" />
      </div>

      <div className="">
        <img src={photo} alt="Projeto" className="object-cover rounded-md" />
      </div>

      <h4 className="text-xl font-bold dark:text-light-200">Nome do Projeto</h4>

      <p className="line-clamp-5 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, vero
        dolor veniam praesentium unde similique quos est magni consequatur
        ratione ipsam possimus nemo impedit iure recusandae maiores rem qui
        neque.
      </p>

      <div className="flex flex-wrap gap-x-3 gap-y-4 text-gray-600 dark:text-white mb-2">
        <Tooltip
          title="Javascript"
          interactive={true}
          arrow={true}
          animation="perspective"
        >
          <img src="/icons/javascript-icon.png" className="size-8"/>
        </Tooltip>
        <Tooltip
          title="Java"
          interactive={true}
          arrow={true}
          animation="perspective"
        >
          <img src="/icons/java-icon.png" className="size-8"/>
        </Tooltip>
        <Tooltip
          title="Typescript"
          interactive={true}
          arrow={true}
          animation="perspective"
        >
          <img src="/icons/typescript-icon.png" className="size-8"/>
        </Tooltip>
        <Tooltip
          title="Vite"
          interactive={true}
          arrow={true}
          animation="perspective"
        >
          <img src="/icons/vite-icon.png" className="size-8"/>
        </Tooltip>
      </div>

      <div className="flex justify-center sm:justify-start flex-wrap gap-4 md:gap-6 box-border mb-1.5">
        <button className="flex gap-2 items-center border-2 border-orange-700 rounded-2xl py-2 px-8 text-sm dark:text-light-200 hover:text-orange-700 hover:scale-105 duration-500 dark:hover:text-orange-700 tracking-wider">
          Site <RiExternalLinkFill className="text-lg"/>
        </button>
        <button className="flex gap-2 items-center border-2 border-orange-700 rounded-2xl py-2 px-8 text-sm dark:text-light-200 hover:text-orange-700 hover:scale-105 duration-500 dark:hover:text-orange-700 tracking-wider">
          Github <FaGithub className="text-lg"/>
        </button>
      </div>
    </div>
  );
}
