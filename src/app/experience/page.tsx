/**
 * v0 by Vercel.
 * @see https://v0.dev/t/S7PlTPvQciK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import TableauRealisation from "@/components/realisation/tableau-realisation"
import { Button } from "@/components/ui/button"
import Link from 'next/link';

export default function Experience() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center gap-8 px-4 md:px-6 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Expérience</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Découvrez mes domaines d'expérience.
          </p>
        </div>
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full bg-red-200 dark:bg-red-900 mb-8">
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-red-300 dark:bg-red-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold px-4">Tableau de réalisation</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-red-200 dark:bg-red-900 px-4 py-6">
                <TableauRealisation />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full bg-blue-200 dark:bg-blue-900 mb-8">
            <AccordionItem value="item-2">
              <AccordionTrigger className="bg-blue-300 dark:bg-blue-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold px-4">Stage</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-blue-200 dark:bg-blue-900 px-4 py-6">
                <p>test</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full bg-green-200 dark:bg-green-900">
            <AccordionItem value="item-3">
              <AccordionTrigger className="bg-green-300 dark:bg-green-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold px-4">Projet</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-green-200 dark:bg-green-900 px-4 py-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                    <h3 className="text-xl font-bold">Projet Symfony</h3>
                    <p>Une application pour afficher des informations relatives au stage, telles que les détails de l'entreprise et les personnes à contacter.</p>
                    <div className="mt-4">
                      <Link href="/experience/symfony"><Button variant="dark">Voir</Button></Link>
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                    <h3 className="text-xl font-bold">Projet C#</h3>
                    <p>Une application de pointage pour suivre les heures d'arrivée et de départ des employés de l'entreprise. </p>
                    <div className="mt-4">
                      <Link href="/experience/csharp"><Button variant="dark">Voir</Button></Link>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </div>
      </div>
    </section>
  )
}