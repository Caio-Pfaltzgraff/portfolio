import { Footer } from '../components/Footer';
import { Menu } from "../components/Menu";
import { AboutMeSection } from "./AboutMeSection";
import { AchievementsSection } from "./AchievementsSection";
import { ContactSection } from "./ContactSection";
import { PresentationSection } from "./PresentationSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";

export default function Page() {
  return (
    <>
      <header className="h-16 w-full">
        <Menu />
      </header>
      <main>
        <article className="w-full">
          <PresentationSection />

          <AboutMeSection />

          <SkillsSection />

          <ProjectsSection />

          <AchievementsSection />

          <ContactSection />
        </article>
      </main>
      <Footer />
    </>
  );
}
