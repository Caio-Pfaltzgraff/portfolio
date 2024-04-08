import { SectionTemplate } from "../../components/SectionTemplate";
import { Card } from "./Card";

export function AchievementsSection() {
  return (
    <SectionTemplate title="Conquistas" id="achievements">
      <div className="grid gap-y-6 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <div className="space-y-3 border-2 border-orange-700 dark:bg-transparent shadow-lg dark:shadow-orange-900 lg:hover:scale-105 duration-500 rounded-lg p-6 md:col-span-2">
          <h6 className="font-title font-semibold text-lg sm:text-xl tracking-widest dark:text-light-100">
            Graduação
          </h6>
          <p className="dark:text-light-100 text-lg sm:text-xl font-bold line-clamp-2">
            Análise e Desenvolvimento de Sistemas
          </p>
          <p className="dark:text-zinc-400">
            Universidade Estácio de Sá
          </p>
          <p className="dark:text-light-100 text-lg font-semibold">
            2021 - 2024
          </p>
        </div>

        <Card 
          type="Cursos" 
          title="Java, React, JS, TS e demais cursos" 
          duration="980h - 2024" 
          plataform="Alura"
          link="https://cursos.alura.com.br/user/caiopfaltzgraff/fullCertificate/8f6cd0eb3ccf6e88405b9075cf8749d7"
        />
        <Card 
          type="BootCamp Santander" 
          title="Java e Spring Boot" 
          duration="88h - 2023" 
          plataform="DIO"
          link="https://www.dio.me/certificate/3BFD81D4"
        />
        <Card 
          type="Eventos" 
          title="React, JS, TS, Node e Java" 
          duration="40h - 2023" 
          plataform="Rocketseat"
        />
      </div>
    </SectionTemplate>
  );
}
