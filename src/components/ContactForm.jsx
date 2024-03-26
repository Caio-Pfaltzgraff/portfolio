import { BsSendFill } from "react-icons/bs";

export function ContactForm() {
  return (
    <form className="flex flex-col gap-y-6 md:max-w-lg">
      <input 
        id="name"
        type="text"
        className="outline-none border leading-8 px-4 py-2 rounded-lg text-lg focus:border-azul-escuro dark:focus:border-orange-700 focus:border-2" 
        placeholder="Nome"
      />
      <input 
        type="text"
        className="outline-none border leading-8 px-4 py-2 rounded-lg text-lg focus:border-azul-escuro dark:focus:border-orange-700 focus:border-2"
        placeholder="Email" 
      />
      <input 
        type="text"
        className="outline-none border leading-8 px-4 py-2 rounded-lg text-lg focus:border-azul-escuro dark:focus:border-orange-700 focus:border-2"
        placeholder="Assunto" 
      />
      <textarea 
        type="text"
        className="outline-none border leading-8 px-4 py-2 rounded-lg text-lg focus:border-azul-escuro dark:focus:border-orange-700 focus:border-2 resize-y"
        placeholder="Mensagem"
      />
      <button className="flex justify-center items-center gap-2 px-5 py-2 bg-orange-700 hover:bg-orange-600 text-light-200 font-semibold text-lg rounded-lg">
        Enviar <BsSendFill />
      </button>
    </form>
  )
}