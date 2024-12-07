import React, { useState, useEffect, useRef } from "react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // 30% de la section doit être visible pour déclencher l'animation
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`bg-white py-16 px-6 md:px-12 lg:px-24 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Colonne Gauche : Qui sommes-nous ? */}
        <div className="bg-gray-200 text-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-serif italic font-bold mb-6">
            Qui sommes-nous ?
          </h2>
          <p className="text-md leading-relaxed mb-4">
            Fondée en 2018, <span className="font-bold">RHILLANE Marketing Digital</span> est une{" "}
            <span className="font-bold">
              agence de communication digitale leader située à Tanger, au Maroc.
            </span>
          </p>
          <p className="text-md leading-relaxed mb-4">
            Les missions d’une <span className="font-bold">agence de communication Maroc</span>{" "}
            normale sont de concevoir, planifier et mettre en œuvre des stratégies de
            communication efficaces.
          </p>
          <p className="text-md leading-relaxed mb-4">
            Notre mission à nous, par contre, est de créer des solutions
            personnalisées et innovantes pour nos clients.
          </p>
          <p className="text-md leading-relaxed">
            Aujourd’hui, plus de 150 entreprises sur 4 continents font confiance à
            notre agence de communication pour utiliser nos services et notre
            assistance. Elles transforment ainsi la manière dont elles attirent les
            clients grâce à une stratégie de communication puissante.
          </p>
          <div className="mt-6 text-center">
            {/* Logo */}
            <img
              src="/Images/digital-room-logo.png" // Remplacez par le chemin réel de votre logo
              alt="Digital Room Logo"
              className="h-12 w-auto mx-auto"
            />
          </div>
        </div>

        {/* Colonne Droite : Vision et Mission */}
        <div className="flex flex-col justify-center">
          {/* Vision */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif italic font-bold mb-4">Vision</h3>
            <p className="text-md leading-relaxed">
              Mettre la puissance de la technologie au service des entreprises et les
              aider à accéder à des opportunités plus riches grâce au{" "}
              <span className="font-bold">Marketing Digital</span>.
            </p>
          </div>

          {/* Ligne de séparation */}
          <hr className="border-gray-300 my-8" />

          {/* Mission */}
          <div>
            <h3 className="text-2xl font-serif italic font-bold mb-4">Mission</h3>
            <p className="text-md leading-relaxed">
              Notre <span className="font-bold">agence de communication Maroc</span> se concentre
              sur les éléments clés de l’activité des entreprises et fournissons les
              bonnes solutions avec la bonne qualité et en temps voulu. Malgré les
              imprévus mondiaux qui peuvent surgir,{" "}
              <span className="font-bold">nous nous montrons à la hauteur</span> et ne nous
              contentons jamais de rien.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
