import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import IconDone from '@/components/ui/IconDone.tsx'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

function MyTabsComponent() {
  return (
    <Tabs defaultValue="kwanzas" className=" w-[480px] uppercase">
      <TabsList className="grid w-full grid-cols-3 rounded-full bg-[#191919] text-white ">
        <TabsTrigger value="kwanzas">KZ (KWANZAS)</TabsTrigger>
        <TabsTrigger value="reais">R$ (REAIS)</TabsTrigger>
        <TabsTrigger value="internacional">🌐 INTERNACIONAL</TabsTrigger>
      </TabsList>
      <TabsContent value="kwanzas" >
        <Card className="bg-[#E71D36] border-none rounded-[40px]">
          <CardHeader className="flex flex-col items-center gap-3 text-white">
            <CardTitle >
              <img src="/LOGO.png" alt="Exemplo" />
            </CardTitle>
            <CardDescription className="w-[398px] h-auto text-white text-lg font-bold text-center leading-7">
              O QUE VOCE RECEBE AO ADIQUIRIR AO MARKETING FACIL
            </CardDescription>
            <h1 class="text-4xl font bold ">20.000,00 Kz</h1>
          </CardHeader>
          <CardContent className="space-y-2 flex flex-col items-center">
            <section class="w-[410px]">
              <article class="flex flex-col gap-5 w-full text-left">
                <hr class="border-t-4 border-black my-4" />
                <ul class="flex flex-col gap-5  text-white">
                  <li class=" flex items-center gap-5">
                    <img src="/src/icons/ic--twotone-done-all.svg" alt="" />
                      Plataforma de Gestão de Redes Sociais Simplificada
                  </li>
                  <li class="flex gap-5">
                    <img src="/src/icons/ic--twotone-done-all.svg" alt="" />
                    <span>Ferramentas de Agendamento e Publicação de Conteúdo</span>
                  </li>
                  <li class="flex gap-5">
                    <img src="/src/icons/ic--twotone-done-all.svg" alt="" />
                    <span> Biblioteca de Recursos Visuais e Templates</span>
                  </li>
                  <li class="flex gap-5">
                    <img src="/src/icons/ic--twotone-done-all.svg" alt="" />
                    <span> Análises e Insights de Desempenho</span>
                  </li>
                  <li class="flex gap-5">
                    <img src="/src/icons/ic--twotone-done-all.svg" alt="" />
                    <span> Promptis para chat GPT</span>
                  </li>
                </ul>
                <hr class="border-t-4 border-black my-4" />
              </article>
            </section>
          </CardContent>
          <CardFooter className="flex flex-col items-center text-white gap-5">
            <img src="../../../public/Retângulo.png" alt="" />
            <Button
              className="
                    w-[242px] h-[60px]
                  bg-white text-black text-lg
                    rounded-full font-semibold"
            >
              Adquira Agora
            </Button>
            <p class="text-xs">100% Online | Acesso Imediato | Compra Segura</p>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="reais">
        <Card className="bg-[#E71D36] border-none rounded-[40px]">
          <CardHeader className="flex flex-col items-center gap-3 text-white">
            <CardTitle className="">
              <img src="/LOGO.png" alt="Exemplo" />
            </CardTitle>
            <CardDescription className="w-[398px] h-auto text-white text-lg font-bold text-center leading-7">
              O QUE VOCE RECEBE AO ADIQUIRIR AO MARKETING FACIL
            </CardDescription>
            <h1 class="text-4xl font bold ">R$ 489,99</h1>
          </CardHeader>
          <CardContent className="space-y-2 flex flex-col items-center">
            <section class="w-[410px]">
              <article class="flex flex-col gap-5 w-full text-left">
                <hr class="border-t-4 border-black my-4" />
                <ul class="flex flex-col gap-5  text-white">
                  <li class=" flex items-center gap-5">
                    <img src="/src/icons/ic--twotone-done-all.svg" alt="" />
                      Plataforma de Gestão de Redes Sociais Simplificada
                  </li>
                  <li class="flex gap-5">
                    <img src="/src/icons/ic--twotone-done-all.svg" alt="" />
                    <span>Ferramentas de Agendamento e Publicação de Conteúdo</span>
                  </li>
                  <li class="flex gap-5">
                    <img src="/src/icons/ic--twotone-done-all.svg" alt="" />
                    <span> Biblioteca de Recursos Visuais e Templates</span>
                  </li>
                  <li class="flex gap-5">
                    <img src="/src/icons/ic--twotone-done-all.svg" alt="" />
                    <span> Análises e Insights de Desempenho</span>
                  </li>
                  <li class="flex gap-5">
                    <img src="/src/icons/ic--twotone-done-all.svg" alt="" />
                    <span> Promptis para chat GPT</span>
                  </li>
                </ul>
                <hr class="border-t-4 border-black my-4" />
              </article>
            </section>
          </CardContent>
          <CardFooter className="flex flex-col items-center text-white gap-5">
            <img src="../../../public/Retângulo.png" alt="" />
            <Button
              className="
                    w-[242px] h-[60px]
                  bg-white text-black text-lg
                    rounded-full font-semibold"
            >
              Adquira Agora
            </Button>
            <p class="text-xs">100% Online | Acesso Imediato | Compra Segura</p>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="internacional">
        <Card className="bg-[#E71D36] border-none rounded-[40px]">
          <CardHeader className="flex flex-col items-center gap-3 text-white">
            <CardTitle className="">
              <img src="/LOGO.png" alt="Exemplo" />
            </CardTitle>
            <CardDescription className="w-[398px] h-auto text-white text-lg font-bold text-center leading-7">
              O QUE VOCE RECEBE AO ADIQUIRIR AO MARKETING FACIL
            </CardDescription>
            <h1 class="text-4xl font bold ">$ 57</h1>
          </CardHeader>
          <CardContent className="space-y-2 flex flex-col items-center">
            <section class="w-[410px]">
              <article class="flex flex-col gap-5 w-full text-left">
                <hr class="border-t-4 border-black my-4" />
                <ul class="flex flex-col gap-5  text-white">
                  <li class=" flex items-center gap-5">
                    <img src="/src/icons/ic--twotone-done-all.svg" alt="" />
                      Plataforma de Gestão de Redes Sociais Simplificada
                  </li>
                  <li class="flex gap-5">
                    <img src="/src/icons/ic--twotone-done-all.svg" alt="" />
                    <span>Ferramentas de Agendamento e Publicação de Conteúdo</span>
                  </li>
                  <li class="flex gap-5">
                    <img src="/src/icons/ic--twotone-done-all.svg" alt="" />
                    <span> Biblioteca de Recursos Visuais e Templates</span>
                  </li>
                  <li class="flex gap-5">
                    <img src="/src/icons/ic--twotone-done-all.svg" alt="" />
                    <span> Análises e Insights de Desempenho</span>
                  </li>
                  <li class="flex gap-5">
                    <img src="/src/icons/ic--twotone-done-all.svg" alt="" />
                    <span> Promptis para chat GPT</span>
                  </li>
                </ul>
                <hr class="border-t-4 border-black my-4" />
              </article>
            </section>
          </CardContent>
          <CardFooter className="flex flex-col items-center text-white gap-5">
            <img src="../../../public/Retângulo.png" alt="" />
            <Button
              className="
                    w-[242px] h-[60px]
                  bg-white text-black text-lg
                    rounded-full font-semibold"
            >
              Adquira Agora
            </Button>
            <p class="text-xs">100% Online | Acesso Imediato | Compra Segura</p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default MyTabsComponent
