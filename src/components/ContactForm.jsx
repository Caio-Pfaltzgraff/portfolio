import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BsSendFill } from "react-icons/bs";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, {message: "O nome deve ter no mínimo 3 caracteres"}),
  email: z.string().min(1, {message: "O email é obrigatório"}).email({message: "Digite um email válido"}),
  subject: z.string().min(5, {message: "O assunto deve ter no mínimo 5 caracteres"}),
  message: z.string().min(10, {message: "A mensagem deve ter no mínimo 10 caracteres"}),
})

export function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema)
  });

  function handleSendEmail(data) {
    const templateParams = {
      name: data.name,
      subject: data.subject,
      email: data.email,
      message: data.message
    }

    emailjs.send("service_yo86wbq", "template_atrolpb", templateParams, "lZQbTlRuGpvrjHckT")
      .then((response) => {
        console.log(response.status, response.text)
        toast.success('Email enviado 😉');
      }, (error) => {
        console.log(error)
        toast.error('Email não foi enviado 😫');
      })
    reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleSendEmail)} className="flex flex-col gap-y-6">
        <div>
          <input 
            {...register('name')}
            className={`input-form ${errors.name && 'input-form-invalid'}`}
            placeholder="Nome"
          />
          {errors.name && <small className="text-red-600 font-medium">{errors.name.message}</small>}
        </div>

        <div>
          <input 
            {...register('email')}
            className={`input-form ${errors.email && 'input-form-invalid'}`}
            placeholder="Email" 
          />
          {errors.email && <small className="text-red-600 font-medium">{errors.email.message}</small>}
        </div>

        <div>
          <input 
            {...register('subject')}
            className={`input-form ${errors.subject && 'input-form-invalid'}`}
            placeholder="Assunto" 
          />
          {errors.subject && <small className="text-red-600 font-medium">{errors.subject.message}</small>}
        </div>

        <div>
          <textarea 
            {...register('message')}
            className={`input-form h-36 md:h-28 resize-y ${errors.message && 'input-form-invalid'}`}
            placeholder="Mensagem"
          />
          {errors.message && <small className="text-red-600 font-medium">{errors.message.message}</small>}
        </div>

        <button 
          type="submit"
          className="flex justify-center items-center gap-2 px-5 py-2 bg-orange-700 hover:bg-orange-600 text-light-200 font-semibold text-lg rounded-lg"
        >
          Enviar <BsSendFill />
        </button>
      </form>
    </>
  )
}