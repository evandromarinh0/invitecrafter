'use client'
import Image from "next/image";
import logo from '../assets/logo.svg';
import { ArrowRight, Radio } from "lucide-react";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido')
})

type subscritionProps = z.infer<typeof subscriptionSchema>

export default function Home() {
  const { handleSubmit, register, formState: { errors }  } = useForm<subscritionProps>({
    resolver: zodResolver(subscriptionSchema)
  });

  function onSubmit(data: any){
    console.log(onSubmit)
  }

  return (
    <div className="min-h-dvh flex flex-col justify-center gap-16">
      <div className="flex flex-col gap-8 items-center md:items-start">
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
          <span className="text-blue">CodeCraft</span>
          Summit 2025
        </h1>
      </div>

      <div className="flex gap-5 items-stretch flex-col md:flex-row">
        <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">Sobre o evento</h2>
            <span className="text-purple font-semibold text-xs flex items-center gap-2">
              <Radio className="size-5" />
              AO VIVO
            </span>
          </div>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          Um evento feito por e para pessoas desenvolvedoras apaixonadas por criar soluções inovadoras e compartilhar conhecimento. Vamos mergulhar nas tendências mais recentes em desenvolvimento de software, arquitetura de sistemas e tecnologias emergentes, com palestras, workshops e hackathons.<br /><br />
          Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito 
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]">
          <h2 className="font-heading font-semibold text-gray-200 text-xl">Inscrição</h2>

          <div className="space-y-3">
            <div className="space-y-2">
              <Input type="text" placeholder="Nome completo" {...register('name')} />
              {errors?.name && (
                <p className="text-danger text-xs font-semibold">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Input type="email" placeholder="E-mail" {...register('email')} />
              {errors?.email && (
                <p className="text-danger text-xs font-semibold">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="border-black border rounded-xl">
            <Button type="submit">
              Confirmar
              <ArrowRight />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
