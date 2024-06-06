'use client'

import React, { useState } from 'react';
import Image from "next/image";


export default function Competence() {

    const [imageUrl, setImageUrl] = useState('/Logo-iad.png')

    const handleMouseEnter = (value) => {
        return () => {
            setImageUrl(value)
            // Vous pouvez faire d'autres opérations ici en fonction de la valeur
        };
    };

    return (
        <section className="bg-[#bcadf0] min-h-screen flex flex-col w-full px-52 py-6">
            <h2 className="text-2xl font-bold uppercase text-center py-6">Expériences Professionnelles</h2>
            <div className="flex flex-1" >
                <div className="flex flex-col w-2/3 p-4 space-y-4">
                    <div onMouseEnter={handleMouseEnter("Logo-iad.png")} className="bg-white p-3 shadow-md">
                        <p className="font-bold text-blue-600">IAD Informatique à Acquigny (27)</p>
                        <p className="text-blue-600">Programmation Windev (stage)</p>
                        <p className="text-gray-500">2021 - 2 mois</p>
                    </div>
                    <div onMouseEnter={handleMouseEnter("Logo-LesPep76.webp")} className="bg-white p-3 shadow-md">
                        <p className="font-bold text-blue-600">Les Peps76 à Barentin (76)</p>
                        <p className="text-blue-600">Refonte du site web PRH76 (stage)</p>
                        <p className="text-gray-500">2020 - 3 mois</p>
                    </div>
                    <div onMouseEnter={handleMouseEnter("Batiment-CS.png")} className="bg-white p-3 shadow-md">
                        <p className="font-bold text-blue-600">Couvertines & Services à Yèbles (77)</p>
                        <p className="text-blue-600">Réalisation d'un site web (job été)</p>
                        <p className="text-gray-500">2019 - 2 mois</p>
                    </div>
                    <div onMouseEnter={handleMouseEnter("Logo-BE.jpg")} className="bg-white p-3 shadow-md">
                        <p className="font-bold text-blue-600">Bureau Electricité à Louviers (27)</p>
                        <p className="text-blue-600">Electricien bureau d'étude (stage)</p>
                        <p className="text-gray-500">2018 - 4 mois</p>
                    </div>
                    <div onMouseEnter={handleMouseEnter("Logo-EV.png")} className="bg-white p-3 shadow-md">
                        <p className="font-bold text-blue-600">EV Charpente à Criquiers-sur-Seine (76)</p>
                        <p className="text-blue-600">Centre d'usinage 5 axes (stage)</p>
                        <p className="text-gray-500">2017 - 2 mois</p>
                    </div>
                    <div onMouseEnter={handleMouseEnter("Logo-AB.jpg")} className="bg-white p-3 shadow-md">
                        <p className="font-bold text-blue-600">AB Electricité à Criquiers-sur-Seine (76)</p>
                        <p className="text-blue-600">Electricien d'épannage (stage)</p>
                        <p className="text-gray-500">2016 - 3 mois</p>
                    </div>
                    <div onMouseEnter={handleMouseEnter("Logo-AY.jpg")} className="bg-white p-3 shadow-md">
                        <p className="font-bold text-blue-600">Ateliers YEBLES à Yèbles (77)</p>
                        <p className="text-blue-600">Fabrique de barrières de chantier (job été)</p>
                        <p className="text-gray-500">2015 - 2 mois</p>
                    </div>
                </div>
                <div className="w-1/3 flex items-center">
                    <img
                        src={`img/experience/${imageUrl}`}
                        alt="Professional experience related image"
                        className="w-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}