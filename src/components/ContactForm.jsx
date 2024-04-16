import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import { BsSendFill } from "react-icons/bs";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string({ required_error: "O nome é obrigatório." }).min(3, {message: "O nome deve ter no mínimo 3 caracteres"}),
  email: z.string({ required_error: "O email é obrigatório." }).email({message: "Digite um email válido"}),
  subject: z.string({ required_error: "O assunto é obrigatório." }).min(5, {message: "O assunto deve ter no mínimo 5 caracteres"}),
  message: z.string({ required_error: "A mensagem é obrigatória." }).min(10, {message: "A mensagem deve ter no mínimo 10 caracteres"}),
})

export function ContactForm() {
  const { handleSubmit, formState: { errors }, reset, control } = useForm({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    }
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
          <Controller 
            name="name"
            control={control}
            render={({ field }) => (
              <Input 
                {...field}
                label="Nome"
                variant="faded"
                isRequired
                isInvalid={errors.name && true}
                errorMessage={errors.name?.message}
              />
            )}
          />
        </div>

        <div>
          <Controller 
            name="email"
            control={control}
            render={({ field }) => (
              <Input 
                {...field}
                label="E-mail"
                variant="faded"
                isRequired
                isInvalid={errors.email && true}
                errorMessage={errors.email?.message}
              />
            )}
          />
        </div>

        <div>
          <Controller 
            name="subject"
            control={control}
            render={({ field }) => (
              <Input 
                {...field}
                label="Assunto"
                variant="faded"
                isRequired
                isInvalid={errors.subject && true}
                errorMessage={errors.subject?.message}
              />
            )}
          />
        </div>

        <div>
          <Controller 
            name="message"
            control={control}
            render={({ field }) => (
              <Textarea 
                {...field}
                label="Mensagem"
                variant="faded"
                placeholder="Digite sua mensagem..."
                isRequired
                disableAutosize
                isInvalid={errors.message && true}
                errorMessage={errors.message?.message}
                classNames={{input: "resize-y min-h-[70px]"}}
              />
            )}
          />
        </div>

        <Button
          type="submit"
          radius="sm"
          endContent={
            <BsSendFill />
          }
          className="bg-orange-700 text-white text-base font-semibold tracking-wide"
        >
          Enviar
        </Button>
      </form>
    </>
  )
}