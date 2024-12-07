import React, { useEffect, useRef, useState } from "react";

const Values = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Observer pour déclencher l'animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Se déclenche quand 30% est visible
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
      className={`py-16 px-6 md:px-12 lg:px-24 bg-white transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-center text-5xl font-extrabold mb-12 tracking-wider uppercase font-serif text-gray-800 animate-fadeInTitle">
        Nos Valeurs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Valeur 1 */}
        <div
          className={`group bg-gray-100 rounded-lg shadow-lg p-8 relative transition-all duration-500 transform hover:scale-105 hover:rotate-2 ${
            isVisible ? "animate-cardZoom" : ""
          }`}
        >
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
          <h3 className="text-2xl font-bold text-center text-yellow-500 mb-4">
            La Qualité
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            Nous ne sommes pas simplement une agence, mais un partenaire dans
            votre succès. Nous vous accompagnons à chaque étape du processus,
            offrant un soutien continu pour garantir le succès de vos campagnes.
          </p>
        </div>

        {/* Valeur 2 */}
        <div
          className={`group bg-gray-100 rounded-lg shadow-lg p-8 relative transition-all duration-500 transform hover:scale-105 hover:rotate-2 ${
            isVisible ? "animate-cardZoom" : ""
          }`}
        >
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
          <h3 className="text-2xl font-bold text-center text-yellow-500 mb-4">
            L’Innovation
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            Nous sommes constamment à la recherche de nouvelles idées et de
            solutions innovantes pour rester en tête dans un environnement
            numérique en évolution constante.
          </p>
        </div>

        {/* Valeur 3 */}
        <div
          className={`group bg-gray-100 rounded-lg shadow-lg p-8 relative transition-all duration-500 transform hover:scale-105 hover:rotate-2 ${
            isVisible ? "animate-cardZoom" : ""
          }`}
        >
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
          <h3 className="text-2xl font-bold text-center text-yellow-500 mb-4">
            La Réactivité
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            Nous comprenons que chaque entreprise est unique. Notre équipe est
            flexible et capable de s’adapter pour répondre aux besoins
            spécifiques de chaque client.
          </p>
        </div>
      </div>
      <style>
        {`
          @keyframes cardZoom {
            0% {
              opacity: 0;
              transform: scale(0.8) translateY(20px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          .animate-cardZoom {
            animation: cardZoom 1s ease-in-out;
          }

          @keyframes fadeInTitle {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInTitle {
            animation: fadeInTitle 1.5s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Values;
