import { Button } from "@nextui-org/react";
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
      (currentMonth === birthdayMonth && today.getDay() >= birthday.getDay())
    ) {
      age--;
    }

    return age;
  }

  return (
    <section id="start">
      <div className="flex items-center sm:max-w-[90%] md:max-w-screen-xl mx-auto h-screen padding-page">
        <div className="grid gap-y-6 md:gap-y-8">
          
          <div className="flex justify-center">
            <h1 className="font-extrabold text-[12vw] sm:text-[2.5rem] md:text-[5.5rem] xl:text-8xl leading-tight text-center text-slate-800 dark:text-light-100 z-10">
              {"Seu próximo desenvolvedor "}{" "}
              <span className="bg-gradient-to-r from-blue-700 dark:from-blue-600 via-pink-700 dark:via-pink-600 to-orange-700 dark:to-orange-600 inline-block text-transparent bg-clip-text">
                Fullstack
              </span>
            </h1>
          </div>

          <div className="flex justify-center">
            <p className="max-w-2xl  leading-relaxed dark:text-light-100 text-center">
              Olá, me chamo Caio Pfaltzgraff, {myAgeCalculator()} anos,
              desenvolvedor fullstack,{" "}
              <span className="font-bold dark:text-orange-600">Java</span> ,{" "}
              <span className="font-bold dark:text-orange-600">React</span>,{" "}
              <span className="font-bold dark:text-orange-600">JS</span> e{" "}
              <span className="font-bold dark:text-orange-600">TS</span>.
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
            >
              <Button 
                size="lg"
                radius="sm"
                className="bg-orange-700 text-white font-semibold tracking-wide text-lg"
                endContent={
                  <HiDocumentArrowDown className="size-6 animate-bounce" />
                }
              >
                Dowload CV
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
