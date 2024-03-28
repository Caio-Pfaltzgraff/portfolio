import { SectionTemplate } from "../../../components/SectionTemplate";
import { Card } from './Card';
import skills from '/src/data/skills.json';

export function SkillsSection() {
  return (
    <SectionTemplate title="Habilidades">
      <div className="flex justify-center px-1 sm:px-0 py-3">
        <div className="flex w-full flex-wrap gap-x-[4vw] gap-y-6 justify-center ">
          {skills.map((skill) => (
            <Card skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
    </SectionTemplate>
  );
}
