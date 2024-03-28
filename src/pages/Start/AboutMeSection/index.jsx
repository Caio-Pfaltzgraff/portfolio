import { SectionTemplate } from "../../../components/SectionTemplate.jsx";
import photo2 from "/my-photo2.png";
import aboutme from '/src/data/aboutme.json';

export function AboutMeSection() {
  return (
    <SectionTemplate title="Sobre mim">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
        <div className="m-4 md:m-2 flex justify-center md:justify-start md:pb-24 lg:pb-0">
          <div className="border shadow-lg -rotate-6 rounded-sm max-w-80 md:max-w-[400px] lg:max-w-[460px] md:min-h-80 bg-light-200 dark:border-none dark:shadow-gray-800">
            <div className="p-3 lg:p-4">
              <img src={photo2} alt="Caio turistando" />
            </div>
            <div className="flex justify-center items-center pb-3 lg:pb-4">
              <p className="md:text-lg">Turistando</p>
            </div>
          </div>
        </div>

        <div className="space-y-8 md:space-y-10">
          <div className="space-y-4 font-medium lg:text-lg 2xl:text-xl dark:text-light-100">
            {aboutme.map((text) => (
              <p key={text.id}>{text.content}</p>
            ))}
          </div>
        </div>
      </div>
    </SectionTemplate>
  );
}
