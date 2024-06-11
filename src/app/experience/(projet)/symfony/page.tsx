import Image from "next/image";

export default function Symfony() {
    return (
        <div className="bg-white text-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-6">Projet - Gestion Stage</h1>
                <div className="space-y-10">
                    <section className="bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Contexte</h2>
                        <p>
                            Le contexte du projet concerne la création d&apos;une application de gestion des entreprises pour le lycée La
                            Châtaigneraie, dans le cadre de la formation en BTS SIO (Services Informatiques aux Organisations). Chaque
                            année, les étudiants de première et deuxième année doivent effectuer des stages, et le lycée souhaite
                            faciliter la recherche de stages en référençant les entreprises susceptibles de les accueillir.
                        </p>
                    </section>
                    <section className="bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Objectifs</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <CircleIcon className="h-6 w-6 text-gray-600 mr-3" />
                                <div>
                                    <h3 className="font-semibold">Accès Simplifié aux Informations</h3>
                                    <p>
                                        Permettre aux enseignants et administrateurs d&apos;accéder facilement à une base de données des
                                        entreprises pouvant accueillir des stagiaires.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <SearchIcon className="h-6 w-6 text-gray-600 mr-3" />
                                <div>
                                    <h3 className="font-semibold">Recherche Multicritère</h3>
                                    <p>
                                        Offrir une fonctionnalité de recherche multicritère pour trouver des entreprises en fonction de
                                        divers critères tels que la localisation, le secteur d&apos;activité, les profils des tuteurs, etc.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <DatabaseIcon className="h-6 w-6 text-gray-600 mr-3" />
                                <div>
                                    <h3 className="font-semibold">Gestion des Données</h3>
                                    <p>
                                        Fournir des outils pour gérer et mettre à jour les informations des entreprises et des stages
                                        passés.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Organisation du projet</h2>
                        <div className="bg-gray-200 p-4 rounded-lg">
                            <div className="flex items-center mb-4">
                                <ViewIcon className="h-6 w-6 text-gray-600 mr-3" />
                                <h3 className="font-semibold">Trello</h3>
                            </div>
                            <p>Utilisation de Trello pour la gestion des tâches et des ressources du projet Symfony.</p>
                            <div className="mt-4">
                                <a href="https://trello.com/" className="flex items-center text-blue-600 hover:underline">
                                    <ExternalLinkIcon className="h-4 w-4 text-gray-600 mr-2" />
                                    Site officiel de Trello
                                </a>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-950 py-6 px-4 md:px-6 lg:px-8 mt-8">
                                <div className="max-w-6xl mx-auto flex items-center gap-6 w-1/4">
                                    <Image
                                        src="/img/experience/symfony/Trello.png"
                                        alt="Banner Image"
                                        width={300}
                                        height={300}
                                        className="flex-1 rounded-lg object-cover aspect-square"
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="bg-gray-200 p-4 rounded-lg pt-24">
                            <div className="flex items-center mb-4">
                                <ViewIcon className="h-6 w-6 text-gray-600 mr-3" />
                                <h3 className="font-semibold">Figma</h3>
                            </div>
                            <p>Utilisation de Figma pour la création des maquettes de l&apos;application Symfony. </p>
                            <div className="mt-4">
                                <a href="https://www.figma.com/" className="flex items-center text-blue-600 hover:underline">
                                    <ExternalLinkIcon className="h-4 w-4 text-gray-600 mr-2" />
                                    Site web
                                </a>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-950 py-6 px-4 md:px-6 lg:px-8 mt-8">
                                <div className="w-full bg-gray-100 dark:bg-gray-950 py-6 px-4 md:px-6 lg:px-8">
                                    <div className="max-w-6xl mx-auto flex items-center gap-6">
                                        <Image
                                            src="/img/experience/symfony/login.png"
                                            alt="Banner Image"
                                            width={300}
                                            height={300}
                                            className="flex-1 rounded-lg object-cover aspect-square"
                                        />
                                        <Image
                                            src="/img/experience/symfony/entreprise.png"
                                            alt="Banner Image"
                                            width={300}
                                            height={300}
                                            className="flex-1 rounded-lg object-cover aspect-square"
                                        />
                                        <Image
                                            src="/img/experience/symfony/liste_entreprise.png"
                                            alt="Banner Image"
                                            width={300}
                                            height={300}
                                            className="flex-1 rounded-lg object-cover aspect-square"
                                        />

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="bg-gray-200 p-4 rounded-lg pt-24">
                            <div className="flex items-center mb-4">
                                <ViewIcon className="h-6 w-6 text-gray-600 mr-3" />
                                <h3 className="font-semibold">Github</h3>
                            </div>
                            <p> Utilisation de Github pour le versionning du projet Symfony. </p>
                            <div className="mt-4">
                                <a href="https://www.github.com/" className="flex items-center text-blue-600 hover:underline">
                                    <ExternalLinkIcon className="h-4 w-4 text-gray-600 mr-2" />
                                    Site web
                                </a>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-950 py-6 px-4 md:px-6 lg:px-8 mt-8">
                                <div className="w-full bg-gray-100 dark:bg-gray-950 py-6 px-4 md:px-6 lg:px-8">
                                    <div className="max-w-6xl mx-auto flex items-center gap-6 w-1/2">
                                        <Image
                                            src="/img/experience/symfony/github.png"
                                            alt="Banner Image"
                                            width={300}
                                            height={300}
                                            className="flex-1 rounded-lg object-cover aspect-square w-full"
                                        />
                                        <Image
                                            src="/img/experience/symfony/github_act.png"
                                            alt="Banner Image"
                                            width={300}
                                            height={300}
                                            className="flex-1 rounded-lg object-cover aspect-square w-full"
                                        />


                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="bg-gray-200 p-4 rounded-lg pt-24">
                            <div className="flex items-center mb-4">
                                <ViewIcon className="h-6 w-6 text-gray-600 mr-3" />
                                <h3 className="font-semibold">Outil de rédaction google</h3>
                            </div>
                            <p> Utilisation de la suite google pour la rédaction de la documentation du projet Symfony.  </p>
                            <div className="mt-4">
                                <a href="https://drive.google.com/" className="flex items-center text-blue-600 hover:underline">
                                    <ExternalLinkIcon className="h-4 w-4 text-gray-600 mr-2" />
                                    Site web
                                </a>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-950 py-6 px-4 md:px-6 lg:px-8 mt-8">
                                <div className="w-full bg-gray-100 dark:bg-gray-950 py-6 px-4 md:px-6 lg:px-8">
                                    <div className="w-full bg-gray-100 dark:bg-gray-950 py-6 px-4 md:px-6 lg:px-8">
                                        <div className="max-w-6xl mx-auto flex items-center gap-6 w-1/4">
                                            <Image
                                                src="/img/experience/symfony/gdrive.png"
                                                alt="Banner Image"
                                                width={600}
                                                height={300}
                                                className="flex-1 rounded-lg object-cover w-[600px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Structure de l&apos;application</h2>
                        <div className="bg-gray-200 p-4 rounded-lg">
                            <div className="flex items-center mb-4">
                                <ViewIcon className="h-6 w-6 text-gray-600 mr-3" />
                                <h3 className="font-semibold">Usercase</h3>
                            </div>
                            <p>Usercase du projet Symfony, décrivant les différents acteurs et les fonctionnalités de l&apos;application. </p>

                            <div className="w-full bg-gray-100 dark:bg-gray-950 py-6 px-4 md:px-6 lg:px-8 mt-8">
                                <div className="max-w-6xl mx-auto flex items-center gap-6 w-1/4">
                                    <Image
                                        src="/img/experience/symfony/usecase.png"
                                        alt="Banner Image"
                                        width={300}
                                        height={300}
                                        className="flex-1 rounded-lg object-cover aspect-square"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-200 p-4 rounded-lg pt-24">
                            <div className="flex items-center mb-4">
                                <ViewIcon className="h-6 w-6 text-gray-600 mr-3" />
                                <h3 className="font-semibold">MCD (Modèle Conceptuel de Données)</h3>
                            </div>
                            <p> Modèle Conceptuel de Données du projet Symfony. </p>

                            <div className="w-full bg-gray-100 dark:bg-gray-950 py-6 px-4 md:px-6 lg:px-8 mt-8">
                                <div className="max-w-6xl mx-auto flex items-center gap-6 w-1/4">
                                    <Image
                                        src="/img/experience/symfony/MCD.png"
                                        alt="Banner Image"
                                        width={300}
                                        height={300}
                                        className="flex-1 rounded-lg object-cover aspect-square"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Réalisation</h2>
                        <div className="bg-gray-200 p-4 rounded-lg">
                            
                            <p className="pb-8">Le projet Symfony a été réalisé en utilisant les technologies suivantes : </p>
                            <div className="bg-white p-4 grid grid-cols-3 gap-4">
                                <a href="https://www.php.net/">
                                    <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg">
                                        <div className="text-xl font-semibold">PHP 7.4</div>
                                        <div className="text-sm text-gray-500">Site web</div>
                                    </div>
                                </a>
                                <a href="https://symfony.com/">
                                    <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg">
                                        <div className="text-xl font-semibold">Symfony 5</div>
                                        <div className="text-sm text-gray-500">Site web</div>
                                    </div>
                                </a>
                                <a href="https://www.mysql.com/">
                                    <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg">
                                        <div className="text-xl font-semibold">MySQL</div>
                                        <div className="text-sm text-gray-500">Site web</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}

function CircleIcon(props : { [key: string]: string }) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
        </svg>
    )
}


function DatabaseIcon(props : { [key: string]: string }) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
    )
}


function ExternalLinkIcon(props : { [key: string]: string }) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
    )
}


function SearchIcon(props : { [key: string]: string }) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}


function ViewIcon(props : { [key: string]: string }) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
            <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
            <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
        </svg>
    )
}