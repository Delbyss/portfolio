
export default function Csharp() {
    return (
        <div className="bg-white text-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-6">Projet - Pointage</h1>
                <div className="space-y-10">
                    <section className="bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Contexte</h2>
                        <p>
                            Le projet concerne le développement d'une application de pointage pour la société PowerDev.
                            Cette application est destinée à permettre le pointage des entrées et sorties des salariés,
                            ainsi que la gestion des salariés par un administrateur.
                        </p>
                    </section>
                    <section className="bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Objectifs</h2>
                        <div className="space-y-6">
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <WrenchIcon className="mt-1 flex-shrink-0 w-6 h-6 text-gray-600" />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold">Gestion du Pointage</h3>
                                        <p>Permettre aux salariés de pointer leurs arrivées et départs dans l'entreprise.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <ShieldCheckIcon className="mt-1 flex-shrink-0 w-6 h-6 text-gray-600" />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold">Accès Sécurisé</h3>
                                        <p>Implémenter une connexion sécurisée pour accéder à l'application.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <ClockIcon className="mt-1 flex-shrink-0 w-6 h-6 text-gray-600" />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold">Historique des Pointages</h3>
                                        <p>Fournir un historique consultable des pointages effectués par les salariés.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <UsersIcon className="mt-1 flex-shrink-0 w-6 h-6 text-gray-600" />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold">Gestion des Salariés</h3>
                                        <p>
                                            Permettre à un administrateur de créer, modifier, supprimer et lister les informations des salariés, tout
                                            en étant lui-même soumis au pointage.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Organisation du projet</h2>
                        <div className="bg-gray-200 p-4 rounded-lg">
                            <div className="flex items-center mb-4">
                                <ViewIcon className="h-6 w-6 text-gray-600 mr-3" />
                                <h3 className="font-semibold">Trello</h3>
                            </div>
                            <p> Utilisation de Trello pour la gestion des tâches et des ressources du projet MAUI. </p>
                            <div className="mt-4">
                                <a href="https://trello.com/" className="flex items-center text-blue-600 hover:underline">
                                    <ExternalLinkIcon className="h-4 w-4 text-gray-600 mr-2" />
                                    Site officiel de Trello
                                </a>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-950 py-6 px-4 md:px-6 lg:px-8 mt-8">
                                <div className="max-w-6xl mx-auto flex items-center gap-6 w-1/4">
                                    <img
                                        src="/img/experience/csharp/Trello.png"
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
                            <p>Utilisation de Figma pour la création des maquettes de l'application MAUI. </p>
                            <div className="mt-4">
                                <a href="https://www.figma.com/" className="flex items-center text-blue-600 hover:underline">
                                    <ExternalLinkIcon className="h-4 w-4 text-gray-600 mr-2" />
                                    Site web
                                </a>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-950 py-6 px-4 md:px-6 lg:px-8 mt-8">
                                <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-6">
                                    <img
                                        src="/img/experience/csharp/login.png"
                                        alt="Banner Image"
                                        className="flex-1 rounded-lg object-cover max-w-full w-full h-auto"
                                    />
                                    <img
                                        src="/img/experience/csharp/historique.png"
                                        alt="Banner Image"
                                        className="flex-1 rounded-lg object-cover max-w-full w-full h-auto"
                                    />
                                    <img
                                        src="/img/experience/csharp/historique2.png"
                                        alt="Banner Image"
                                        className="flex-1 rounded-lg object-cover max-w-full w-full h-auto"
                                    />
                                    <img
                                        src="/img/experience/csharp/admin.png"
                                        alt="Banner Image"
                                        className="flex-1 rounded-lg object-cover max-w-full w-full h-auto"
                                    />
                                </div>
                            </div>


                        </div>

                        <div className="bg-gray-200 p-4 rounded-lg pt-24">
                            <div className="flex items-center mb-4">
                                <ViewIcon className="h-6 w-6 text-gray-600 mr-3" />
                                <h3 className="font-semibold">Github</h3>
                            </div>
                            <p> Utilisation de Github pour le versionning du projet MAUI. </p>
                            <div className="mt-4">
                                <a href="https://www.github.com/" className="flex items-center text-blue-600 hover:underline">
                                    <ExternalLinkIcon className="h-4 w-4 text-gray-600 mr-2" />
                                    Site web
                                </a>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-950 py-6 px-4 md:px-6 lg:px-8 mt-8">
                                <div className="w-full bg-gray-100 dark:bg-gray-950 py-6 px-4 md:px-6 lg:px-8">
                                    <div className="max-w-6xl mx-auto flex items-center gap-6 w-1/2">
                                        <img
                                            src="/img/experience/csharp/github.png"
                                            alt="Banner Image"
                                            width={300}
                                            height={300}
                                            className="flex-1 rounded-lg object-cover aspect-square w-full"
                                        />
                                        <img
                                            src="/img/experience/csharp/github_act.png"
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
                            <p> Utilisation de la suite google pour la rédaction de la documentation du projet MAUI.  </p>
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
                                            <img
                                                src="/img/experience/csharp/gdrive.png"
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
                        <h2 className="text-2xl font-semibold mb-4">Structure de l'application</h2>
                        <div className="bg-gray-200 p-4 rounded-lg">
                            <div className="flex items-center mb-4">
                                <ViewIcon className="h-6 w-6 text-gray-600 mr-3" />
                                <h3 className="font-semibold">Usercase</h3>
                            </div>
                            <p>Usercase du projet MAUI, décrivant les différents acteurs et les fonctionnalités de l'application. </p>

                            <div className="w-full bg-gray-100 dark:bg-gray-950 py-6 px-4 md:px-6 lg:px-8 mt-8">
                                <div className="max-w-6xl mx-auto flex items-center gap-6 w-1/4">
                                    <img
                                        src="/img/experience/csharp/usecase.png"
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
                            <p> Modèle Conceptuel de Données du projet MAUI. </p>

                            <div className="w-full bg-gray-100 dark:bg-gray-950 py-6 px-4 md:px-6 lg:px-8 mt-8">
                                <div className="max-w-6xl mx-auto flex items-center gap-6 w-1/4">
                                    <img
                                        src="/img/experience/csharp/MCD.png"
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

                            <p className="pb-8">Le projet MAUI a été réalisé en utilisant les technologies suivantes : </p>
                            <div className="bg-white p-4 grid grid-cols-2 gap-4">
                                <a href="https://dotnet.microsoft.com/en-us/apps/maui">
                                    <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg">
                                        <div className="text-xl font-semibold">MAUI</div>
                                        <div className="text-sm text-gray-500">Site web</div>
                                    </div>
                                </a>
                                <a href="https://www.microsoft.com/fr-fr/sql-server/">
                                    <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg">
                                        <div className="text-xl font-semibold">SQL Server 5</div>
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

function ClockIcon(props) {
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
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}


function ShieldCheckIcon(props) {
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
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}


function UsersIcon(props) {
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}


function WrenchIcon(props) {
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
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    )

}


function ViewIcon(props) {
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

function ExternalLinkIcon(props) {
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