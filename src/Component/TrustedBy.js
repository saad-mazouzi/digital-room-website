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
          <img src="/Images/UMT.png" alt="UMT" className="h-12" />
          <img src="/Images/ministere-sante.png" alt="ministère santé" className="h-12" />
          <img src="/Images/lins.jpg" alt="lins" className="h-12" />
          <img src="/Images/initiative-national.png" alt="initiative national" className="h-12" />
          <img src="/Images/boukhris.jpg" alt="boukhris" className="h-12" />
          <img src="/Images/western.jpg" alt="western" className="h-12" />
          <img src="/Images/mega.jpg" alt="western" className="h-12" />
          <img src="/Images/loyal.jpg" alt="western" className="h-12" />
          <img src="/Images/grill.jpg" alt="western" className="h-12" />
          <img src="/Images/coffe.jpg" alt="western" className="h-12" />
          <img src="/Images/matina.jpg" alt="western" className="h-12" />
          <img src="/Images/eyewish.jpg" alt="western" className="h-12" />
          <img src="/Images/redman.jpg" alt="western" className="h-12" />
          <img src="/Images/skill.jpg" alt="western" className="h-12" />
          <img src="/Images/caffelou.jpg" alt="western" className="h-12" />
          <img src="/Images/opticdiali.jpg" alt="western" className="h-12" />
          <img src="/Images/asmaa.jpg" alt="western" className="h-12" />
          <img src="/Images/comptoire.jpg" alt="western" className="h-12" />
          <img src="/Images/yaakoubi.jpg" alt="western" className="h-12" />
          <img src="/Images/two.jpg" alt="western" className="h-12" />
          {/*Répitition */}
          <img src="/Images/ambassade.png" alt="ambassade" className="h-12" />
          <img src="/Images/oncf.png" alt="oncf" className="h-12" />
          <img src="/Images/UMT.png" alt="UMT" className="h-12" />
          <img src="/Images/ministere-sante.png" alt="ministère santé" className="h-12" />
          <img src="/Images/lins.jpg" alt="lins" className="h-12" />
          <img src="/Images/initiative-national.png" alt="initiative national" className="h-12" />
          <img src="/Images/boukhris.jpg" alt="boukhris" className="h-12" />
          <img src="/Images/western.jpg" alt="western" className="h-12" />
          <img src="/Images/mega.jpg" alt="western" className="h-12" />
          <img src="/Images/loyal.jpg" alt="western" className="h-12" />
          <img src="/Images/grill.jpg" alt="western" className="h-12" />
          <img src="/Images/coffe.jpg" alt="western" className="h-12" />
          <img src="/Images/matina.jpg" alt="western" className="h-12" />
          <img src="/Images/eyewish.jpg" alt="western" className="h-12" />
          <img src="/Images/redman.jpg" alt="western" className="h-12" />
          <img src="/Images/skill.jpg" alt="western" className="h-12" />
          <img src="/Images/caffelou.jpg" alt="western" className="h-12" />
          <img src="/Images/opticdiali.jpg" alt="western" className="h-12" />
          <img src="/Images/asmaa.jpg" alt="western" className="h-12" />
          <img src="/Images/comptoire.jpg" alt="western" className="h-12" />
          <img src="/Images/yaakoubi.jpg" alt="western" className="h-12" />
          <img src="/Images/two.jpg" alt="western" className="h-12" />
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
