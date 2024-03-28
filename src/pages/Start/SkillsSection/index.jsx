import { SectionTemplate } from "../../../components/SectionTemplate";
import { Card } from './Card';
import skills from '/src/data/skills.json';

export function SkillsSection() {
  return (
    <SectionTemplate title="Habilidades">
      <div className="flex justify-center px-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-y-10 justify-center border-2 border-gray-400 dark:border-[#3f3f3f] rounded-xl px-4 md:px-6 py-10 sm:py-10 box-border max-w-2xl lg:max-w-4xl xl:max-w-5xl">
          {skills.map((skill) => (
            <Card skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
    </SectionTemplate>
  );
}
