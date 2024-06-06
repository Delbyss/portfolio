'use client'
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function News() {


    const veilleTechnologique = [
        {
            actualites: [
                {
                    mois: "2023/01",
                    articles: [
                        {
                            titre: "Torrent une faille de sécurité repérée dans 3 célèbres sites de téléchargement illégal",
                            bornage: "Faille de sécurité",
                            description: "La faille vient du programme Torrent Auto Loader, dont la page d’administration n’est pas protégée par un mot de passe.",
                            url: "https://torrentfreak.com/major-private-torrent-sites-have-a-security-disaster-to-fix-right-now-230103/",

                        },
                        {
                            titre: "Bercy : attaque informatique qui paralyse le guichet unique",
                            bornage: "Cyber Attaque",
                            description: "Attaque par DDoS 120.000 connexions par seconde.",
                            url: "https://www.lefigaro.fr/conjoncture/bercy-une-attaque-informatique-paralyse-le-nouveau-guichet-unique-pour-les-entreprises-20230108 ",

                        },
                    ],
                },
                {
                    mois: "2023/02",
                    articles: [
                        {
                            titre: "Apple: une énorme faille de sécurité détectée sur iOS et macOS",
                            bornage: "Faille de sécurité",
                            description: "Elle permettait à un site web d’exécuter un code malveillant.",
                            url: "https://mcetv.ouest-france.fr/decouvertes/mon-mag-high-tech/apple-les-ipad-pro-oled-devraient-sortir-vers-la-fin-dannee-2024-06092023/",

                        },
                        {
                            titre: "Record du DDoS: un pic de 71 millions de requêtes par seconde",
                            bornage: "Cyber Attaque",
                            description: "La société de services d'hébergement Cloudflare a fait face à la plus importante attaque DDoS jamais enregistrée et a réussi à la bloquer. Les pirates ont visé plusieurs sites de crypto-monnaies, des sociétés de jeux vidéo ainsi que des fournisseurs cloud.",
                            url: "https://www.zataz.com/ddos-une-cyber-attaque-aux-71-millions-de-requetes-par-secondes/ ",

                        },
                    ],
                },
                {
                    mois: "2023/03",
                    articles: [
                        {
                            titre: "Windows 10 et 11, faille de sécurité dans l’outil Capture d’écran",
                            bornage: "Faille de sécurité",
                            description: "L'outil préinstallé de capture d'écran comporte une faille qui permet à quelqu’un de mal-intentionné de récupérer les informations préalablement rognées de la capture d’écran.",
                            url: "https://www.tomsguide.fr/windows-10-windows-11-mettez-vite-a-jour-loutil-capture-decran-pour-corriger-la-faille-de-securite/",

                        },
                        {
                            titre: "Cyberattaque DDoS contre l'Assemblée nationale",
                            bornage: "Cyber Attaque",
                            description: "Une attaque à des fins politiques, des hackers pro-russes ont rendu le site de l'Assemblée nationale inaccessible pendant toute la journée.",
                            url: "https://www.lepoint.fr/high-tech-internet/cyberattaque-contre-l-assemblee-un-coup-de-com-bon-marche-pour-les-russes-27-03-2023-2513783_47.php ",

                        },
                    ],
                },
                {
                    mois: "2023/04",
                    articles: [
                        {
                            titre: "Une faille de sécurité découverte sur Google Chrome",
                            bornage: "Faille de sécurité",
                            description: "La faille donne la possibilité à des pirates d'endommager ou de prendre le contrôle de certains systèmes informatiques, plus précisément en exploitant la faille dans le moteur JavaScript V8. Elle permettrait à des pirates de faire planter le navigateur, mais également d'exécuter du code arbitraire.",
                            url: "https://www.ouest-france.fr/high-tech/google/une-faille-de-securite-decouverte-sur-google-chrome-une-mise-a-jour-deployee-en-urgence-60bd8af8-dde6-11ed-8d9e-5db6de9e226d",

                        },
                        {
                            titre: "La mairie de Morcenx-la-Nouvelle touchée par une cyberattaque",
                            bornage: "Cyber Attaque",
                            description: "L'attaque contre les serveurs a rendu les lignes téléphoniques habituelles indisponibles, tout comme les adresses e-mail de la mairie. Ce serait un visuel sans plus de précisions.",
                            url: "https://www.usine-digitale.fr/article/la-mairie-de-morcenx-la-nouvelle-touchee-par-une-cyberattaque.N2122496",

                        },
                    ],
                },
                {
                    mois: "2023/05",
                    articles: [
                        {
                            titre: "Les smartphones Samsung touchés par une importante faille de sécurité",
                            bornage: "Faille de sécurité",
                            description: "Elle permet à des personnes mal intentionnées de contourner les protections ASLR, qui visent essentiellement à protéger les appareils des attaques par dépassement de tampon mémoire. Ces dernières sont conçues pour empêcher l’exécution de code malveillant.",
                            url: "https://www.01net.com/actualites/les-smartphones-samsung-touches-par-une-importante-faille-de-securite.html",

                        },
                        {
                            titre: "Le site du Sénat victime d’une cyberattaque",
                            bornage: "Cyber Attaque",
                            description: "Une attaque DoS a rendu le site du Sénat inaccessible par un collectif de hackers pro-russes.",
                            url: "https://www.usine-digitale.fr/article/le-site-internet-du-senat-a-nouveau-touche-par-une-cyberattaque.N2130036 ☺ https://www.publicsenat.fr/actualites/institutions/le-site-du-senat-victime-dune-cyberattaque-dune-certaine-ampleur",

                        },
                    ]
                },
                {
                    mois: "2023/06",
                    articles: [
                        {
                            titre: "Windows 11 améliore la sécurité avec l’isolation des applications Win32",
                            bornage: "Faille de sécurité",
                            description: "Microsoft teste une nouvelle fonctionnalité de sécurité pour isoler les applications Win32 et renforcer la protection de Windows 11.",
                            url: "https://www.ginjfo.com/actualites/logiciels/windows-11/windows-11-renforce-sa-securite-avec-lisolation-des-applications-win32-20230628"
                        },
                        {
                            titre: "Cyberattaque contre Xplain : la Suisse met en place un état-major de crise",
                            bornage: "Cyber Attaque",
                            description: "Après une cyberattaque majeure contre Xplain, le Conseil fédéral suisse forme un état-major de crise pour gérer l’incident et renforcer la sécurité.",
                            url: "https://www.letemps.ch/suisse/cyberattaque-contre-xplain-le-conseil-federal-met-sur-pied-un-etat-major-de-crise"
                        }
                    ]
                },
            ],
        },
    ];


    return (
        <section className="pt-10 border-b border-b-gray-600 border-t  border-t-gray-300">
            <div className="space-y-4">
                {veilleTechnologique.map((veille, index) => (
                    <div key={index} className="space-y-4">
                        <div className="space-y-4">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="news">
                                    <div className="sticky top-0 bg-white pt-20 ">
                                        <AccordionTrigger>
                                            <h3 className="text-xl font-semibold">Actualités</h3>
                                        </AccordionTrigger>
                                    </div>
                                    <AccordionContent className="space-y-4 py-4">
                                        {veille.actualites.map((actualite, index) => (
                                            <div key={index} className="space-y-4">
                                                <h4 className="text-lg font-semibold">{actualite.mois}</h4>
                                                <div className="space-y-4">
                                                    {actualite.articles.map((article, index) => (
                                                        <div key={index} className="border p-4 hover:shadow-lg transition-shadow">
                                                            <h5 className="font-semibold">{article.titre}</h5>
                                                            <p className="text-sm text-gray-600">Bornage : {article.bornage}</p>
                                                            <p className="text-sm text-gray-600">Description : {article.description}</p>

                                                            <Sheet>
                                                                <SheetTrigger asChild>
                                                                    <Button variant="outline" className="mt-2">Voir plus</Button>
                                                                </SheetTrigger>
                                                                <SheetContent side="left">
                                                                    <SheetHeader>
                                                                        <SheetTitle>{article.titre}</SheetTitle>
                                                                        <SheetDescription>Bornage : {article.bornage}</SheetDescription>
                                                                    </SheetHeader>
                                                                    <div className="py-4">
                                                                        <p>{article.description}</p>
                                                                    </div>
                                                                    <div>
                                                                        <em>url : </em>
                                                                        <a className="text-blue-900" href={article.url}>{article.url}</a>
                                                                    </div>
                                                                </SheetContent>
                                                            </Sheet>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                ))}
            </div>



        </section>
    );
}
