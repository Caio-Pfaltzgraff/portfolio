import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { LinkIcon } from "/src/components/LinkIcon.jsx";

export function PresentationSection() {
  function myAgeCalculator() {
    const today = new Date();
    const birthday = new Date("2002-04-04");
    let age = today.getFullYear() - birthday.getFullYear();
    const currentMonth = today.getMonth();
    const birthdayMonth = birthday.getMonth();

    if (
      currentMonth < birthdayMonth ||
      (currentMonth === birthdayMonth && today.getDay() < birthday.getDay())
    ) {
      age--;
    }

    return age;
  }

  return (
    <section>
      <div className="flex items-center max-w-screen-xl mx-auto h-screen padding-page">
        <div className="grid gap-y-6 md:gap-y-8">
          
          <div className="flex justify-center">
            <h1 className="font-extrabold text-[12vw] sm:text-[5.5rem] xl:text-8xl leading-tight text-center text-slate-800 dark:text-light-100 z-10">
              {"Seu próximo desenvolvedor "}{" "}
              <span className="bg-gradient-to-r from-blue-700 via-pink-700 to-orange-700 inline-block text-transparent bg-clip-text">
                Fullstack
              </span>
            </h1>
          </div>

          <div className="flex justify-center">
            <p className="max-w-2xl md:text-lg leading-relaxed dark:text-light-100 text-center">
              Olá, me chamo Caio Pfaltzgraff, {myAgeCalculator()} anos,
              desenvolvedor fullstack,{" "}
              <span className="font-bold dark:text-orange-700">Java</span> e{" "}
              <span className="font-bold dark:text-orange-700">React</span>,{" "}
              <span className="font-bold dark:text-orange-700">JS</span>,{" "}
              <span className="font-bold dark:text-orange-700">TS</span>.
            </p>
          </div>

          <div className="flex justify-center gap-4 dark:text-light-100">
            <LinkIcon
              path="https://www.linkedin.com/in/caio-pfaltzgraff/"
              animation={true}
            >
              <FaLinkedin className="h-9 w-auto hover:text-linkedin" />
            </LinkIcon>
            <LinkIcon
              path="https://github.com/Caio-Pfaltzgraff"
              animation={true}
            >
              <FaGithub className="h-9 w-auto hover:text-github" />
            </LinkIcon>
            <LinkIcon path="mailto:caio.rllcr@gmail.com" animation={true}>
              <BiLogoGmail className="h-9 w-auto hover:text-gmail" />
            </LinkIcon>
            <LinkIcon path="https://wa.me/5521980891793" animation={true}>
              <FaWhatsapp className="h-9 w-auto hover:text-whatsapp" />
            </LinkIcon>
          </div>

          <div className="flex justify-center">
            <a
              href="https://drive.google.com/file/d/1bWyYBRH8pBoa2A726nDRuz2MuPOWmrvP/view?usp=sharing"
              target="_blank"
              className="bg-orange-700 hover:bg-orange-600 text-lg p-3 lg:px-10 lg:py-4 rounded-lg text-light-100 font-bold flex items-center transition-colors duration-700 border-none outline-none"
            >
              Download CV{" "}
              <HiDocumentArrowDown className="h-6 w-6 ml-2 animate-bounce" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
