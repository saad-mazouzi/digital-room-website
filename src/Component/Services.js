import React from "react";

const Services = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-12 lg:px-24">
      {/* Titre principal */}
      <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-16">
        Nos Services
      </h2>

      {/* Service de Création Web */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        {/* Section Texte */}
        <div className="animate-fadeInLeft">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
            L'art de la Création Web au Maroc
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            En tant que leader marocain de la création de sites web, Digital
            Room s'engage à transformer vos idées en{" "}
            <span className="font-semibold text-gray-800">réalité digitale</span>.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Nos solutions personnalisées sont conçues pour capturer l'essence
            de votre marque et garantir votre{" "}
            <span className="font-semibold text-gray-800">succès en ligne</span>.
          </p>
          <a
            href="#contact"
            className="bg-yellow-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Demandez votre Devis
          </a>
        </div>

        {/* Section Mockups */}
        <div className="relative animate-fadeInRight">
          <div className="absolute -top-12 -left-12 w-72 h-72 bg-gray-300 rounded-full opacity-50 animate-pulse"></div>
          <div className="relative z-10">
            <img
              src="/Images/mockup1.png"
              alt="Mockup Site 1"
              className="absolute top-0 left-10 w-56 h-auto transform rotate-[-10deg] shadow-lg"
            />
            <img
              src="/Images/mockup2.jpg"
              alt="Mockup Site 2"
              className="absolute top-20 left-32 w-72 h-auto transform rotate-[5deg] shadow-lg"
            />
            <img
              src="/Images/mockup3.webp"
              alt="iMac Mockup"
              className="relative w-96 h-auto mx-auto shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Service de Photographie */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Section Mockups */}
        <div className="relative animate-fadeInLeft">
          <div className="absolute -top-12 -right-12 w-72 h-72 bg-gray-300 rounded-full opacity-50 animate-pulse"></div>
          <div className="relative z-10">
            <img
              src="/Images/mockup4.jpg"
              alt="Mockup Photo 1"
              className="absolute top-0 right-10 w-56 h-auto transform rotate-[10deg] shadow-lg"
            />
            <img
              src="/Images/mockup5.jpg"
              alt="Mockup Photo 2"
              className="absolute top-20 right-32 w-72 h-auto transform rotate-[-5deg] shadow-lg"
            />
            <img
              src="/Images/mockup6.avif"
              alt="Mockup Camera"
              className="relative w-96 h-auto mx-auto shadow-2xl"
            />
          </div>
        </div>

        {/* Section Texte */}
        <div className="animate-fadeInRight">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
            Immortalisez Vos Moments
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Digital Room propose un service de photographie professionnelle pour
            capturer vos moments précieux avec{" "}
            <span className="font-semibold text-gray-800">élégance et style</span>.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Que ce soit pour des événements, des produits ou des portraits, nos
            photographes experts veillent à sublimer chaque image.
          </p>
          <a
            href="#contact"
            className="bg-yellow-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Demandez votre Devis
          </a>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-fadeInLeft {
            animation: fadeInLeft 1s ease-in-out;
          }

          .animate-fadeInRight {
            animation: fadeInRight 1s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Services;
