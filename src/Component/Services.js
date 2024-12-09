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
            Nos solutions personnalisées sont conçues pour capturer l'essence de
            votre marque et garantir votre{" "}
            <span className="font-semibold text-gray-800">succès en ligne</span>.
          </p>
          <a
            href="#details"
            className="flex items-center justify-center bg-yellow-500 text-white font-medium text-lg py-3 px-3 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Voir plus
            <svg
              className="ml-2 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"> {/* Réduction de mb-24 à mb-16 */}
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
            href="#details"
            className="flex items-center justify-center bg-yellow-500 text-white font-medium text-lg py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Voir plus
            <svg
              className="ml-2 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Service de Digitalisation de l’Immobilier */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"> {/* Vous pouvez également réduire ici si nécessaire */}
      {/* Section Texte */}
        <div className="animate-fadeInLeft">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
            La Digitalisation de l’Immobilier
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Notre agence est ravie de vous proposer un pack complet pour dynamiser
            votre agence immobilière. Nous mettons à votre disposition une expertise
            de pointe en photographie, avec la création d'un site web exceptionnel,
            alimenté par des photos réelles et de haute qualité. De plus, nous incluons
            des vidéos 360 captivantes prises avec des drones de dernière génération.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Ce pack permet à votre agence de se démarquer, de séduire vos clients plus
            facilement et, en fin de compte, d'augmenter significativement votre
            chiffre d'affaires. Offrez à vos clients une expérience visuelle
            exceptionnelle et renforcez votre présence sur le marché immobilier.
          </p>
          <a
            href="#details"
            className="flex items-center justify-center bg-yellow-500 text-white font-medium text-lg py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Voir plus
            <svg
              className="ml-2 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Section Image */}
        <div className="relative animate-fadeInRight">
          <div className="absolute -top-12 -right-12 w-72 h-72 bg-gray-300 rounded-full opacity-50 animate-pulse"></div>
          <img
            src="/Images/mockup7.jpg"
            alt="Digitalisation de l'immobilier"
            className="relative w-full max-w-md mx-auto shadow-lg"
          />
        </div>
      </div>

      {/* Service de Automotive Photography */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        {/* Section Images Mockups */}
        <div className="relative animate-fadeInLeft">
          <div className="absolute -top-12 -left-12 w-72 h-72 bg-gray-300 rounded-full opacity-50 animate-pulse"></div>
          <div className="relative z-10">
            {/* Mockup 1 */}
            <img
              src="/Images/automotive2.webp"
              alt="Automotive Mockup 1"
              className="absolute top-0 left-10 w-56 h-auto transform rotate-[10deg] shadow-lg"
            />
            {/* Mockup 2 */}
            <img
              src="/Images/automotive2.webp"
              alt="Automotive Mockup 2"
              className="absolute top-20 left-32 w-72 h-auto transform rotate-[-5deg] shadow-lg"
            />
            {/* Mockup 3 */}
            <img
              src="/Images/automotive.jpg"
              alt="Automotive Mockup 3"
              className="relative w-96 h-auto mx-auto shadow-2xl"
            />
          </div>
        </div>

        {/* Section Texte */}
        <div className="animate-fadeInRight">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
            Automotive Photography
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Notre agence est fière de vous présenter un pack exclusif de photographie
            et de vidéographie spécialement conçu pour mettre en valeur votre garage
            de voitures de luxe. Nous comprenons l'importance de présenter ces véhicules
            d'exception de manière aussi captivante que leur performance.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Ce pack permet à votre agence de se démarquer, de séduire vos clients plus
            facilement et, en fin de compte, d'augmenter significativement votre chiffre
            d'affaires.
          </p>
          <a
            href="#details"
            className="flex items-center justify-center bg-yellow-500 text-white font-medium text-lg py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Voir plus
            <svg
              className="ml-2 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
        {/* Section Texte */}
        <div className="animate-fadeInLeft">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
            Service d'Impression Personnalisée
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Digital Room offre une gamme complète de solutions d'impression modernes et professionnelles, adaptées à tous vos besoins de communication visuelle. 
          </p>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-5">
            <li>Supports marketing : bannières, roll-ups, bâches publicitaires.</li>
            <li>Documents d'entreprise : cartes de visite, brochures, catalogues.</li>
            <li>Objets publicitaires : cartes PVC, stylos, clés USB.</li>
          </ul>
          <a
            href="#details"
            className="flex items-center justify-center bg-yellow-500 text-white font-medium text-lg py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Voir plus
            <svg
              className="ml-2 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Section Images */}
        <div className="relative animate-fadeInRight">
          <div className="absolute -top-12 -left-12 w-72 h-72 bg-gray-300 rounded-full opacity-50 animate-pulse"></div>
          <div className="relative z-10">
            <img
              src="/Images/impression-uv.jpg"
              alt="Mockup Impression 1"
              className="absolute top-0 left-10 w-56 h-auto transform rotate-[10deg] shadow-lg"
            />
            <img
              src="/Images/impression-offset.avif"
              alt="Mockup Impression 2"
              className="absolute top-20 left-32 w-72 h-auto transform rotate-[-5deg] shadow-lg"
            />
            <img
              src="/Images/impression1.jpg"
              alt="Mockup Impression 3"
              className="relative w-96 h-auto mx-auto shadow-2xl"
            />
          </div>
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
