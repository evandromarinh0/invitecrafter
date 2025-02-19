import Image from "next/image";
import { Input } from "@/components/input";
import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";

import logo from "../../assets/logo.svg";
import goldMedal from "../../assets/gold-medal.svg";
import silverMedal from "../../assets/silver-medal.svg";
import bronzeMedal from "../../assets/bronze-medal.svg";

export default function InvitePage(){
  const inviteLink = 'http://devstage.com.br/44557a9ss7ad';

  return(
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">Inscrição confirmada!</h1>
          <p className="text-gray-300">Para entrar no evento, acesse o link enviado para seu e-mail.</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">Indique e ganhe</h2>
            <p className="text-gray-300">Convide mais pessoas para o evento e concorra a prêmios exclusivos! É só compartilhar o link abaixo e acompanhar as inscrições:</p>
          </div>

          <Input defaultValue="https://devstage.com.br/1224457caasv4" name="link" button="true" read="readOnly" link={inviteLink} />

          <div className="grid gap-3 md:grid-cols-3">
            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">1042</span>
              <span className="text-sm text-gray-300 leading-none text-center">Acessos ao link</span>
              <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
            </div>

            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">232</span>
              <span className="text-sm text-gray-300 leading-none text-center">Inscrições feitas</span>
              <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
            </div>

            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">3°</span>
              <span className="text-sm text-gray-300 leading-none text-center">Posição no ranking</span>
              <Medal className="size-5 text-purple absolute top-3 left-3" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full  max-w-[440px] space-y-5">
        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">Ranking de indicações</h2>

        <div className="space-y-4">
          <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
            <span className="text-gray-300 leading-none text-sm">
              <span className="font-heading font-bold">1° | </span>
              Diego Fernandes
            </span>

            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">1024</span>

            <Image src={goldMedal} alt="Gold" className="absolute top-0 right-8" />
          </div>

          <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
            <span className="text-gray-300 leading-none text-sm">
              <span className="font-heading font-bold">2° | </span>
              Bruno Carvalho
            </span>

            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">512</span>

            <Image src={silverMedal} alt="Silver" className="absolute top-0 right-8" />
          </div>

          <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
            <span className="text-gray-300 leading-none text-sm">
              <span className="font-bold font-heading">3° | </span>
              Pedro Silva
            </span>

            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">256</span>

            <Image src={bronzeMedal} alt="Bronze" className="absolute top-0 right-8" />
          </div>
        </div>
      </div>
    </div>
  )
}