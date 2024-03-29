import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SectionTemplate } from "../../../components/SectionTemplate";
import { ContactForm } from "/src/components/ContactForm";

export function ContactSection() {
  return (
    <SectionTemplate title="Contato">
      <div className="flex justify-center items-center">

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
          <div className="space-y-4">

            <h5 className="text-2xl font-bold font-title text-orange-700">
              Se interessou?
            </h5>

            <p className="dark:text-light-200 leading-relaxed">
              Se você estiver em busca de alguém dedicado, com fome por
              aprendizado e que deseja crescer junto à sua empresa, ficaria
              honrado em ter essa oportunidade. Estou disponível também para
              novos projetos e colaborações. Sinta-se à vontade para entrar em
              contato e juntos transformarmos ideias em realidade. Entre em
              contato e marcamos uma conversa para discutir como podemos
              trabalhar juntos.
            </p>

            <div className="flex flex-col gap-2">

              <div className="flex gap-x-4">
                <div className="flex justify-center items-center h-11">
                  <FaUser className="text-orange-700 text-2xl" />
                </div>
                <div>
                  <p className="font-semibold dark:text-light-200">Nome</p>
                  <p className="dark:text-gray-400">Caio Pfaltzgraff</p>
                </div>
              </div>

              <div className="flex gap-x-4">
                <div className="flex justify-center items-center h-11">
                  <MdEmail className="text-orange-700 text-2xl" />
                </div>
                <div>
                  <p className="font-semibold dark:text-light-200">Email</p>
                  <p className="dark:text-gray-400">caio.rllcr@gmail.com</p>
                </div>
              </div>

            </div>
          </div>
          <div className="space-y-4">
            
            <h5 className="text-2xl font-bold font-title text-orange-700">
              Mande uma mensagem
            </h5>

            <ContactForm />
          </div>
        </div>
      </div>
    </SectionTemplate>
  );
}
