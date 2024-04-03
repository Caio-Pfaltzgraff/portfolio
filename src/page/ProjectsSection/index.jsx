import { SectionTemplate } from "../../components/SectionTemplate";
import { Card } from './Card';

export function ProjectsSection() {
  return (
    <SectionTemplate title="Projetos" id="projects">
      <div className="grid gap-y-10 gap-x-6 xl:gap-x-8 justify-center md:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
    </SectionTemplate>
  );
}
