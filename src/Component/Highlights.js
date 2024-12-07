import React from "react";

const Highlights = () => {
  return (
    <div className="bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Colonne 1 */}
        <div className="group">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#FFC600" // Couleur jaune
              className="w-8 h-8 transform group-hover:-translate-y-2 transition duration-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l7-7 7 7M5 19l7-7 7 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Nous Sommes Différents</h3>
          <p className="text-sm leading-relaxed">
            Tout le monde dit ce qu'il veut.
            <br />
            Nous avons les résultats à l'appui.
          </p>
        </div>

        {/* Colonne 2 */}
        <div className="group">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#FFC600" // Couleur jaune
              className="w-8 h-8 transform group-hover:-translate-y-2 transition duration-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l7-7 7 7M5 19l7-7 7 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Notre Compétence Principale</h3>
          <p className="text-sm leading-relaxed">
            <span className="font-bold">Notre agence de communication Maroc</span> a travaillé
            avec des centaines d'entreprises dans le monde entier, nous savons
            comment donner vie à votre vision.
          </p>
        </div>

        {/* Colonne 3 */}
        <div className="group">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#FFC600" // Couleur jaune
              className="w-8 h-8 transform group-hover:-translate-y-2 transition duration-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l7-7 7 7M5 19l7-7 7 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Ce Qui Compte</h3>
          <p className="text-sm leading-relaxed">
            L'augmentation de votre Chiffre d'Affaires de manière durable et au plus bas coût.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
