import Image from "next/image";
import { Button } from "@/components/ui/button"
import  Competence from "@/components/image-slide/competence"
import Connaissance from "@/components/Accueil/connaissance"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section className="w-full py-12 md:py-24 lg:py-32 p-24">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src="/img/moi.png"
              width={300}
              height={300}
              alt="Profile"
              className="rounded-full w-40 h-40 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Développeur</h2>
              <p className="text-gray-500 dark:text-gray-400">Étudiant en BTS SIO SLAM</p>
              <p className="text-gray-500 dark:text-gray-400">Campus La Chataigneraie</p>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Bienvenue sur mon Portfolio</h1>
            <p className="text-gray-500 dark:text-gray-400">
              je m'apelle <b className="text-cyan-600">DELAPLACE Hugo</b>,
              Je suis étudiant au sein du Campus La Chataigneraie situé au Mesnil-Esnard.
              Actuellement en BTS :
              Services informatiques aux organisations.
              Option Solutions Logicielles et Applications Métiers.
              <br />
              Mon portfolio à pour but de démontrer mes compétences acquises tout au long de mon cursus scolaire, ainsi que mes premiers pas dans la vie profesionnelle.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#1a1a1a] text-white px-56 py-10">
      <h2 className="text-2xl font-bold mb-4">Diplômes</h2>
      <div className="mb-6">
        <h3 className="font-semibold">Lycées Chataigneraie</h3>
        <p className="text-sm">2 Rue Charles Scherer, 76240 Le Mesnil-Esnard</p>
        <ul className="list-disc ml-4 mt-2">
          <li className="mt-1">2020 - BEP Systèmes numériques</li>
          <li>2021 - Baccalauréat Systèmes numériques</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mb-4">Formation Actuelle</h2>
      <div>
        <h3 className="font-semibold">Lycées Chataigneraie</h3>
        <p className="text-sm">2ème année 2023-24</p>
        <ul className="list-disc ml-4 mt-2">
          <li className="mt-1">Brevet de Technicien Supérieur Services Informatiques aux Organisations (SIO)</li>
          <li>Option Solutions Logicielles et Applications Métiers (SLAM)</li>
        </ul>
      </div>
    </section>
    <Competence></Competence>
    <Connaissance></Connaissance>
    
    </main>
  );
}
