import React, { useState } from "react";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(""); // État pour le bouton actif
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName); // Définir le bouton actif
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="/Images/digital-room-logo.png"
                alt="Digital Room Logo"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Center Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-6">
            <a
              href="#home"
              onClick={() => handleButtonClick("Accueil")}
              className={`${
                activeButton === "Accueil" ? "bg-gray-200" : ""
              } text-logoBlack hover:text-logoYellow font-medium text-lg transition duration-300 px-3 py-2 rounded-md`}
            >
              Accueil
            </a>

            {/* Nos Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                onClick={() => handleButtonClick("Nos Services")}
                className={`${
                  activeButton === "Nos Services" ? "bg-gray-200" : ""
                } flex items-center text-logoBlack hover:text-logoYellow font-medium text-lg transition duration-300 focus:outline-none px-3 py-2 rounded-md`}
              >
                Nos Services
                <svg
                  className="ml-1 h-5 w-5 text-logoBlack group-hover:text-logoYellow"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md">
                  <a
                    href="#digital-marketing"
                    className="block px-4 py-2 text-logoBlack hover:text-logoYellow hover:bg-gray-100 transition duration-300"
                  >
                    Marketing Digital
                  </a>
                  <a
                    href="#photography"
                    className="block px-4 py-2 text-logoBlack hover:text-logoYellow hover:bg-gray-100 transition duration-300"
                  >
                    Photographie
                  </a>
                  <a
                    href="#printing"
                    className="block px-4 py-2 text-logoBlack hover:text-logoYellow hover:bg-gray-100 transition duration-300"
                  >
                    Impression
                  </a>
                </div>
              )}
            </div>

            <a
              href="#portfolio"
              onClick={() => handleButtonClick("Portfolio")}
              className={`${
                activeButton === "Portfolio" ? "bg-gray-200" : ""
              } text-logoBlack hover:text-logoYellow font-medium text-lg transition duration-300 px-3 py-2 rounded-md`}
            >
              Portfolio
            </a>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              onClick={() => handleButtonClick("Contactez-nous")}
              className={`${
                activeButton === "Contactez-nous" ? "bg-gray-200" : "bg-logoYellow"
              } text-white font-medium text-lg px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition duration-300`}
            >
              Contactez-nous
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-logoBlack hover:text-logoYellow focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md rounded-lg mt-2">
            <a
              href="#home"
              onClick={() => handleButtonClick("Accueil")}
              className={`${
                activeButton === "Accueil" ? "bg-gray-200" : ""
              } block text-logoBlack hover:text-logoYellow font-medium text-lg px-4 py-2 transition duration-300`}
            >
              Accueil
            </a>
            <a
              href="#services"
              onClick={() => handleButtonClick("Nos Services")}
              className={`${
                activeButton === "Nos Services" ? "bg-gray-200" : ""
              } block text-logoBlack hover:text-logoYellow font-medium text-lg px-4 py-2 transition duration-300`}
            >
              Nos Services
            </a>
            <a
              href="#portfolio"
              onClick={() => handleButtonClick("Portfolio")}
              className={`${
                activeButton === "Portfolio" ? "bg-gray-200" : ""
              } block text-logoBlack hover:text-logoYellow font-medium text-lg px-4 py-2 transition duration-300`}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={() => handleButtonClick("Contactez-nous")}
              className={`${
                activeButton === "Contactez-nous" ? "bg-gray-200" : "bg-logoYellow"
              } block text-white font-medium text-lg px-4 py-2 rounded-lg transition duration-300`}
            >
              Contactez-nous
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
