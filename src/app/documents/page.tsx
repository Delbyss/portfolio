import * as React from "react";
import { Button } from "@/components/ui/button"

export default function Stage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <section className="bg-white p-6 rounded-lg shadow-md">
                <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold text-left">Stage</h2>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <h3 className="text-lg font-medium text-left">Première année (LesPeps76)</h3>
                        <a href="/documents/HDE_AttestationDeStage_LesPEP76.pdf" className="w-full">
                            <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Attestation de stage 1
                            </Button>
                        </a>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-medium text-left">Deuxième année (IAD)</h3>
                        <a href="/documents/HDE_conventionDeStage_IAD.pdf" className="w-full">
                            <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Attestation de stage 2
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-left">Tableau de synthèse</h2>
                </div>
                <div className="border-b pb-4" />
                <div className="mt-4">
                    <a href="/documents/E4_Tableau_de_synthese.xlsx" className="w-full">
                        <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Tableau xlsx
                        </Button>
                    </a>
                </div>
                <div className="mt-6 border-b pb-4">
                    <h2 className="text-xl font-semibold text-left">Projet</h2>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <h3 className="text-lg font-medium text-left">Projet Symfony</h3>
                        <a href="/documents/HDE_FDRP_E5_SLAM_PHP.docx" className="w-full">
                            <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Fiche descriptive 1
                            </Button>
                        </a>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-medium text-left">Projet C#</h3>
                        <a href="/documents/HDE_FDRP_E5_SLAM_Ccharp.docx" className="w-full">
                            <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Fiche descriptive 2
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
}
