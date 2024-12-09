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
          <img src="/Images/ambassade.png" alt="ambassade" className="h-12" />
          <img src="/Images/oncf.png" alt="oncf" className="h-12" />
          <img src="/Images/umt.png" alt="umt" className="h-12" />
          <img src="/Images/ministere-sante.png" alt="ministère santé" className="h-12" />
          <img src="/Images/lins.jpg" alt="lins" className="h-12" />
          <img src="/Images/initiative-national.png" alt="initiative national" className="h-12" />
          <img src="/Images/boukhris.jpg" alt="boukhris" className="h-12" />
          {/* Répétition des logos pour un défilement continu */}
          <img src="/Images/ambassade.png" alt="ambassade" className="h-12" />
          <img src="/Images/oncf.png" alt="oncf" className="h-12" />
          <img src="/Images/umt.png" alt="umt" className="h-12" />
          <img src="/Images/ministere-sante.png" alt="ministère santé" className="h-12" />
          <img src="/Images/lins.jpg" alt="lins" className="h-12" />
          <img src="/Images/initiative-national.png" alt="initiative national" className="h-12" />
          <img src="/Images/boukhris.jpg" alt="boukhris" className="h-12" /><img src="/Images/ambassade.png" alt="ambassade" className="h-12" />
          <img src="/Images/oncf.png" alt="oncf" className="h-12" />
          <img src="/Images/umt.png" alt="umt" className="h-12" />
          <img src="/Images/ministere-sante.png" alt="ministère santé" className="h-12" />
          <img src="/Images/lins.jpg" alt="lins" className="h-12" />
          <img src="/Images/initiative-national.png" alt="initiative national" className="h-12" />
          <img src="/Images/boukhris.jpg" alt="boukhris" className="h-12" /><img src="/Images/ambassade.png" alt="ambassade" className="h-12" />
          <img src="/Images/oncf.png" alt="oncf" className="h-12" />
          <img src="/Images/umt.png" alt="umt" className="h-12" />
          <img src="/Images/ministere-sante.png" alt="ministère santé" className="h-12" />
          <img src="/Images/lins.jpg" alt="lins" className="h-12" />
          <img src="/Images/initiative-national.png" alt="initiative national" className="h-12" />
          <img src="/Images/boukhris.jpg" alt="boukhris" className="h-12" /><img src="/Images/ambassade.png" alt="ambassade" className="h-12" />
          <img src="/Images/oncf.png" alt="oncf" className="h-12" />
          <img src="/Images/umt.png" alt="umt" className="h-12" />
          <img src="/Images/ministere-sante.png" alt="ministère santé" className="h-12" />
          <img src="/Images/lins.jpg" alt="lins" className="h-12" />
          <img src="/Images/initiative-national.png" alt="initiative national" className="h-12" />
          <img src="/Images/boukhris.jpg" alt="boukhris" className="h-12" /><img src="/Images/ambassade.png" alt="ambassade" className="h-12" />
          <img src="/Images/oncf.png" alt="oncf" className="h-12" />
          <img src="/Images/umt.png" alt="umt" className="h-12" />
          <img src="/Images/ministere-sante.png" alt="ministère santé" className="h-12" />
          <img src="/Images/lins.jpg" alt="lins" className="h-12" />
          <img src="/Images/initiative-national.png" alt="initiative national" className="h-12" />
          <img src="/Images/boukhris.jpg" alt="boukhris" className="h-12" />
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
