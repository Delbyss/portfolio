'use client'

import { useState } from "react"

export default function TableauRealisation() {
    const [activeSection, setActiveSection] = useState("skills")
    const toggleSection = (section : string) => {
        setActiveSection(section)
    }
    const data = {
        competences: [
            {
                id: 1,
                titre: "Gérer le patrimoine informatique",
                detail: [
                    "▸Recenser et identifier les ressources numériques",
                    "▸Exploiter des référentiels, normes et standards adoptés par le prestataire informatique",
                    "▸Mettre en place et vérifier les niveaux d’habilitation associés à un service",
                    "▸Vérifier les conditions de la continuité d’un service informatique",
                    "▸Gérer des sauvegardes",
                    "▸Vérifier le respect des règles d’utilisation des ressources numériques",
                ],
                realisations: [5, 7], // ID des réalisations liées à cette compétence
            },
            {
                id: 2,
                titre: "Répondre aux incidents et aux demandes d’assistance et d’évolution",
                detail: [
                    "▸Collecter, suivre et orienter des demandes",
                    "▸Traiter des demandes concernant les services réseau et système, applicatifs",
                    "▸Traiter des demandes concernant les applications",
                ],
                realisations: [4, 11], // ID des réalisations liées à cette compétence
            },
            {
                id: 3,
                titre: "Développer la présence en ligne de l’organisation",
                detail: [
                    "▸Participer à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques",
                    "▸Référencer les services en ligne de l’organisation et mesurer leur visibilité.",
                    "▸Participer à l’évolution d’un site Web exploitant les données de l’organisation.",
                ],
                realisations: [2, 8, 10], // ID des réalisations liées à cette compétence
            },
            {
                id: 4,
                titre: "Travailler en mode projet",
                detail: [
                    "▸Analyser les objectifs et les modalités d’organisation d’un projet",
                    "▸Planifier les activités",
                    "▸Évaluer les indicateurs de suivi d’un projet et analyser les écarts",
                ],
                realisations: [2, 6, 9, 10, 11], // ID des réalisations liées à cette compétence
            },
            {
                id: 5,
                titre: "Mettre à disposition des utilisateurs un service informatique",
                detail: [
                    "▸Réaliser les tests d’intégration et d’acceptation d’un service",
                    "▸Déployer un service",
                    "▸Accompagner les utilisateurs dans la mise en place d’un service",
                ],
                realisations: [], // ID des réalisations liées à cette compétence
            },
            {
                id: 6,
                titre: "Organiser son développement professionnel",
                detail: [
                    "▸Mettre en place son environnement d’apprentissage personnel",
                    "▸Mettre en œuvre des outils et stratégies de veille informationnelle",
                    "▸Gérer son identité professionnelle",
                    "▸Développer son projet professionnel",
                ],
                realisations: [1, 3, 10], // ID des réalisations liées à cette compétence
            },
        ],
        realisations: [
            {
                id: 1,
                titre: "Auto formation",
                competences: [6],
            },
            {
                id: 2,
                titre: "GSK",
                competences: [3, 4],
            },
            {
                id: 3,
                titre: "Veille informatique / technologique",
                competences: [6],
            },
            {
                id: 4,
                titre: "Ticket",
                competences: [2],
            },
            {
                id: 5,
                titre: "Sauvegarde",
                competences: [1],
            },
            {
                id: 6,
                titre: "Cycle en V",
                competences: [4],
            },
            {
                id: 7,
                titre: "Linux",
                competences: [1],
            },
            {
                id: 8,
                titre: "Refonte du site web",
                competences: [3],
            },
            {
                id: 9,
                titre: "Analyse et création d’un plan (méthode agile)",
                competences: [4],
            },
            {
                id: 10,
                titre: "STAGE lesPEPS 76",
                competences: [3, 4, 6],
            },
            {
                id: 11,
                titre: "STAGE IAD",
                competences: [2, 4],
            },
        ],
    };


    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div
                        className={`rounded-lg px-6 py-8 transition-colors ${activeSection === "skills" ? "bg-red-400 text-white" : "bg-gray-100 dark:bg-gray-800"
                            }`}
                        onClick={() => toggleSection("skills")}
                    >
                        <h2 className="text-2xl font-bold tracking-tight">Compétences</h2>
                        <p className="mt-4 ">
                            Découvrez les compétences que je maîtrise.
                        </p>

                    </div>
                    <div
                        className={`rounded-lg px-6 py-8 transition-colors ${activeSection === "achievements" ? "bg-red-400 text-white" : "bg-gray-100 dark:bg-gray-800"
                            }`}
                        onClick={() => toggleSection("achievements")}
                    >
                        <h2 className="text-2xl font-bold tracking-tight">Réalisations</h2>
                        <p className="mt-4 ">
                            Découvrez quelques-uns de mes projets.
                        </p>
                    </div>
                </div>
                {activeSection === "skills" &&
                    <div className="flex flex-col space-y-4">
                        {data.competences.map((competence, index) => (
                            <div key={index} className="flex justify-between items-center bg-[#f8d7da] p-4 border border-[#f5c6cb]">
                                <h2 className="text-lg font-semibold">{competence.titre}</h2>
                                <div className="flex flex-col space-y-2">
                                    {competence.realisations.map((realisationId, index) => (
                                        <div key={index} className="text-lg font-semibold">
                                            {data.realisations.find(realisation => realisation.id === realisationId).titre}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                }
                {activeSection === "achievements" &&
                    <div className="flex flex-col space-y-4">
                        {data.realisations.map((realisation, index) => (
                            <div key={index} className="flex justify-between items-center bg-[#f8d7da] p-4 border border-[#f5c6cb]">
                                <h2 className="text-lg font-semibold">{realisation.titre}</h2>
                                <div className="flex flex-col space-y-2">
                                    {realisation.competences.map((competenceId, index) => (
                                        <div key={index} className="text-lg font-semibold">
                                            {data.competences.find(competence => competence.id === competenceId).titre}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                }

            </div>
        </section>
    )
}
