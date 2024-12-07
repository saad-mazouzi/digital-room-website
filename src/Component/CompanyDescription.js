import React from "react";

const CompanyDescription = () => {
  return (
    <div className="relative bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Logo en Arrière-Plan */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src="/Images/digital-room-logo.png" // Remplacez par le chemin de votre logo
          alt="Digital Room Logo"
          className="opacity-10 blur-sm w-1/2"
        />
      </div>

      {/* Contenu Texte */}
      <div
        className="relative text-center animate-fadeIn"
        style={{ animation: "fadeIn 2s ease-in-out" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Agence de Communication Maroc
        </h1>
        <h2 className="text-2xl md:text-3xl font-serif italic mb-6 text-yellow-500">
          Digital Room 
        </h2>
        <p className="text-lg md:text-xl leading-relaxed font-light mb-6">
          Bienvenue chez <span className="font-bold text-yellow-500">Digital Room</span>, votre passerelle vers l'avenir du marketing digital.
          Nous sommes bien plus qu'une simple agence ; nous sommes les
          architectes de votre succès en ligne, redéfinissant l'espace digital pour
          propulser votre marque vers de nouveaux sommets.
        </p>
        <p className="text-lg md:text-xl leading-relaxed font-light">
          <span className="font-bold text-yellow-500">Digital Room</span> incarne l'innovation, la créativité et l'expertise en marketing
          digital. Notre équipe dynamique est composée de stratèges numériques,
          de créatifs visionnaires et d'experts en technologie, unis par une
          passion commune : transformer les défis en opportunités, les idées en
          résultats tangibles.
        </p>
      </div>

      {/* Animation Fade-In */}
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 2s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default CompanyDescription;
