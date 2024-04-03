import { SectionTemplate } from "../../components/SectionTemplate";

export function AchievementsSection() {
  return (
    <SectionTemplate title="Conquistas" id="achievements">
      <div className="grid gap-y-6 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <div className="space-y-3 border-2 border-orange-700 dark:bg-transparent shadow-lg dark:shadow-orange-900 lg:hover:scale-105 duration-500 rounded-lg p-6 md:col-span-2">
          <h6 className="font-title font-semibold text-lg sm:text-xl tracking-widest dark:text-light-100">
            Graduação
          </h6>
          <p className="dark:text-light-100 text-lg sm:text-2xl font-bold line-clamp-2">
            Análise e Desenvolvimento de Sistemas
          </p>
          <p className="dark:text-light-100">
            Universidade Estácio de Sá
          </p>
          <p className="dark:text-light-100 text-lg sm:text-xl font-semibold">
            2021 - 2024
          </p>
        </div>

        <div className="space-y-3 border shadow-lg dark:shadow-gray-700 lg:hover:scale-105 duration-500 dark:border-zinc-500 rounded-lg p-6">
          <h6 className="font-title font-semibold text-lg sm:text-xl tracking-widest dark:text-light-100">
            Cursos
          </h6>
          <p className="dark:text-light-100 text-lg sm:text-2xl font-bold line-clamp-2">
            Java, JS, TS, React
          </p>
          <p className="dark:text-light-100">
            Alura
          </p>
          <p className="dark:text-light-100 text-lg sm:text-xl font-semibold">
            200h - 2023
          </p>
        </div>

        <div className="space-y-3 border shadow-lg dark:shadow-gray-700 lg:hover:scale-105 duration-500 dark:border-zinc-500 rounded-lg p-6">
          <h6 className="font-title font-semibold text-lg sm:text-xl tracking-widest dark:text-light-100">
            BootCamp
          </h6>
          <p className="dark:text-light-100 text-lg sm:text-2xl font-bold line-clamp-2">
            Java e Spring Boot
          </p>
          <p className="dark:text-light-100">
            DIO
          </p>
          <p className="dark:text-light-100 text-lg sm:text-xl font-semibold">
            88h - 2023
          </p>
        </div>

        <div className="space-y-3 border shadow-lg dark:shadow-gray-700 lg:hover:scale-105 duration-500 dark:border-zinc-500 rounded-lg p-6">
          <h6 className="font-title font-semibold text-lg sm:text-xl tracking-widest dark:text-light-100">
            Evento
          </h6>
          <p className="dark:text-light-100 text-lg sm:text-2xl font-bold line-clamp-2">
            React, JS, TS, Node, Java
          </p>
          <p className="dark:text-light-100">
            Rocketseat
          </p>
          <p className="dark:text-light-100 text-lg sm:text-xl font-semibold">
            40h - 2023
          </p>
        </div>
      </div>
    </SectionTemplate>
  );
}
