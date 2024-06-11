import News from "@/components/veille/news"

export default function Veille() {
    return (
        <main className="px-52 py-24">
            <h2 className="text-3xl font-bold pb-8 ">
                Veille technologique
            </h2>
            <div className="space-y-4">
                <div className="border p-4">
                    <h3 className="text-xl font-semibold">Thème</h3>
                    <p className="mt-2 text-gray-600">
                        Cyber Vulnérabilité, les failles de sécuriser dans l’informatique La cyber vulnérabilité désigne la
                        vulnérabilité des systèmes informatiques aux attaques malveillantes. Il s&apos;agit des faiblesses ou des failles
                        de sécurité dans les systèmes informatiques, qui peuvent être exploitées par des pirates informatiques pour
                        accéder à des informations sensibles ou perturber le fonctionnement des systèmes.
                    </p>
                </div>
                <div className="border p-4">
                    <h3 className="text-xl font-semibold">Bornage</h3>
                    <ul className="mt-2 list-disc pl-5 text-gray-600">
                        <li>Faille de sécurité</li>
                        <li>Cyber Attaque</li>
                    </ul>
                </div>
            </div>
            <News />
            <section className="bg-gray-100 p-8 mt-28">
                <h1 className="text-3xl font-bold text-center mb-8">Outils de veille</h1>
                <div className="max-w-4xl mx-auto grid grid-cols-2 gap-8">
                    <div className="flex flex-col items-center space-y-4 bg-white rounded-lg p-4">
                        <h2 className="text-xl font-semibold">Google Alerts</h2>
                        <img src="/img/outil-veille/logo-google-alerts.png" alt="Google Alerts Logo" className="h-32 w-32" />
                        <div className="bg-gray-200 w-full h-[1px] my-4" />
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-green-600">Avantages</h3>
                            <ul className="list-disc list-inside">
                                <li>Facile à utiliser</li>
                                <li>Rapide a paramettre</li>
                            </ul>
                            <h3 className="text-lg font-semibold text-red-800">Inconvénient</h3>
                            <li>filtrage très limiter</li>
                            <li>peut avoir peu de pertinence</li>
                            <li>interface non dédié (gmail) / spam la boite mail </li>
                            
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-4 bg-white rounded-lg p-4">
                        <h2 className="text-xl font-semibold">Feedly</h2>
                        <img src="/img/outil-veille/Feedly_Logo.png" alt="Feedly Logo" className="h-32 w-32" />
                        <div className="bg-gray-200 w-full h-[1px] my-4" />
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-green-600">Avantages</h3>
                            <ul className="list-disc list-inside">
                                <li>Interface intuitive</li>
                                <li>Recherche par filtre et flux rss</li>
                                <li>Centralisation des sources</li>
                            </ul>
                            <h3 className="text-lg font-semibold text-red-800">Inconvénient</h3>
                            <ul className="list-disc list-inside">
                                <li>Partie gratuite limité</li>
                                <li>Dépendance à la qualité des flux RSS</li>
                                <li>Pas de mise à jour en temps réel</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-4 bg-white rounded-lg p-4">
                        <h2 className="text-xl font-semibold">X (Twitter)</h2>
                        <img src="/img/outil-veille/X.png" alt="Twitter Logo" className="h-32 w-32" />
                        <div className="bg-gray-200 w-full h-[1px] my-4" />
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-green-600">Avantages</h3>
                            <ul className="list-disc list-inside">
                                <li>Ergonomique</li>
                                <li>Permet de suivre l&apos;actualité des grosses platformes</li>
                            </ul>
                            <h3 className="text-lg font-semibold text-red-800">Inconvénient</h3>
                            <li> Bruit (Beaucoup d&apos;informations non pertinentes) </li>
                            <li> Faux informations</li>
                            <li> Demande de la recherche </li>
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-4 bg-white rounded-lg p-4">
                        <h2 className="text-xl font-semibold">Netvibes</h2>
                        <img src="/img/outil-veille/netvibes.png" alt="Netvibes Logo" className="h-32 w-32" />
                        <div className="bg-gray-200 w-full h-[1px] my-4" />
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-green-600">Avantages</h3>
                            <li>Interface intuitive</li>
                            <li>Personalisation</li>
                            <h3 className="text-lg font-semibold text-red-800">Inconvénient</h3>
                            <li>Certaines fonctionnalités payant</li>
                            <li>Les flux RSS basés sur une URL, parfois peu concluants.</li>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}