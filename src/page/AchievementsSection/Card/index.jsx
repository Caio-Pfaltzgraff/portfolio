import { LuExternalLink } from "react-icons/lu";

export function Card({type, title, plataform, link = '', duration}) {
  return (
    <div className="space-y-3 border shadow-lg dark:shadow-gray-700 lg:hover:scale-105 duration-500 dark:border-zinc-500 rounded-lg p-6">
      <h6 className="font-title font-semibold text-lg sm:text-xl tracking-widest dark:text-light-100">
        {type}
      </h6>
      <p className="dark:text-light-100 text-lg sm:text-xl font-bold line-clamp-2">
        {title}
      </p>
      {link === '' 
        ? (<p className="dark:text-zinc-400">{plataform}</p>)
        : (<p className="dark:text-light-100"><a href={link} target="_blank" className="flex items-center gap-2 text-orange-500 dark:text-orange-600 font-semibold">{plataform} <LuExternalLink /></a></p>)
      }
      <p className="dark:text-light-100 text-lg  font-semibold">
        {duration}
      </p>
    </div>
  )
}