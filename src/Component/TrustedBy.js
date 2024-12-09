import React from "react";

const TrustedBy = () => {
  return (
    <div className="bg-white py-10">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-6 custom-font">
        Ils nous font confiance
      </h2>
      <div className="overflow-hidden relative">
        {/* Conteneur principal */}
        <div className="flex animate-scroll space-x-10 w-max">
          {/* Logos à défiler */}
          <img src="/images/ambassade.png" alt="Jumia" className="h-12" />
          <img src="/images/oncf.png" alt="Adidas" className="h-12" />
          <img src="/images/umt.png" alt="L'Oréal" className="h-12" />
          <img src="/images/ministere-sante.png" alt="Bosch" className="h-12" />
          <img src="/images/lins.jpg" alt="Valeo" className="h-12" />
          <img src="/images/initiative-national.png" alt="Danone" className="h-12" />
          <img src="/images/boukhris.jpg" alt="Nivea" className="h-12" />
          {/* Répétition des logos pour un défilement continu */}
          <img src="/images/ambassade.png" alt="Jumia" className="h-12" />
          <img src="/images/oncf.png" alt="Adidas" className="h-12" />
          <img src="/images/umt.png" alt="L'Oréal" className="h-12" />
          <img src="/images/ministere-sante.png" alt="Bosch" className="h-12" />
          <img src="/images/lins.jpg" alt="Valeo" className="h-12" />
          <img src="/images/initiative-national.png" alt="Danone" className="h-12" />
          <img src="/images/boukhris.jpg" alt="Nivea" className="h-12" />
          <img src="/images/ambassade.png" alt="Jumia" className="h-12" />
          <img src="/images/oncf.png" alt="Adidas" className="h-12" />
          <img src="/images/umt.png" alt="L'Oréal" className="h-12" />
          <img src="/images/ministere-sante.png" alt="Bosch" className="h-12" />
          <img src="/images/lins.jpg" alt="Valeo" className="h-12" />
          <img src="/images/initiative-national.png" alt="Danone" className="h-12" />
          <img src="/images/boukhris.jpg" alt="Nivea" className="h-12" />
          <img src="/images/ambassade.png" alt="Jumia" className="h-12" />
          <img src="/images/oncf.png" alt="Adidas" className="h-12" />
          <img src="/images/umt.png" alt="L'Oréal" className="h-12" />
          <img src="/images/ministere-sante.png" alt="Bosch" className="h-12" />
          <img src="/images/lins.jpg" alt="Valeo" className="h-12" />
          <img src="/images/initiative-national.png" alt="Danone" className="h-12" />
          <img src="/images/boukhris.jpg" alt="Nivea" className="h-12" />
          <img src="/images/ambassade.png" alt="Jumia" className="h-12" />
          <img src="/images/oncf.png" alt="Adidas" className="h-12" />
          <img src="/images/umt.png" alt="L'Oréal" className="h-12" />
          <img src="/images/ministere-sante.png" alt="Bosch" className="h-12" />
          <img src="/images/lins.jpg" alt="Valeo" className="h-12" />
          <img src="/images/initiative-national.png" alt="Danone" className="h-12" />
          <img src="/images/boukhris.jpg" alt="Nivea" className="h-12" />
          <img src="/images/ambassade.png" alt="Jumia" className="h-12" />
          <img src="/images/oncf.png" alt="Adidas" className="h-12" />
          <img src="/images/umt.png" alt="L'Oréal" className="h-12" />
          <img src="/images/ministere-sante.png" alt="Bosch" className="h-12" />
          <img src="/images/lins.jpg" alt="Valeo" className="h-12" />
          <img src="/images/initiative-national.png" alt="Danone" className="h-12" />
          <img src="/images/boukhris.jpg" alt="Nivea" className="h-12" />
          <img src="/images/ambassade.png" alt="Jumia" className="h-12" />
          <img src="/images/oncf.png" alt="Adidas" className="h-12" />
          <img src="/images/umt.png" alt="L'Oréal" className="h-12" />
          <img src="/images/ministere-sante.png" alt="Bosch" className="h-12" />
          <img src="/images/lins.jpg" alt="Valeo" className="h-12" />
          <img src="/images/initiative-national.png" alt="Danone" className="h-12" />
          <img src="/images/boukhris.jpg" alt="Nivea" className="h-12" />
        </div>
      </div>
      <style>
        {`
            .animate-scroll {
            animation: scroll 90s linear infinite; /* Durée augmentée pour ralentir */
            }
            @keyframes scroll {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(-100%);
            }
            }
            .custom-font {
            font-family: 'Poppins', sans-serif;
            }
        `}
    </style>
    </div>
  );
};

export default TrustedBy;
