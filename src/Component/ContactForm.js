import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const sheetDBUrl = "https://sheetdb.io/api/v1/dui7wf4d7icce";
  
    const dataToSend = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
    };
  
    try {
      const response = await fetch(sheetDBUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: [dataToSend] }),
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        alert("Merci ! Vos informations ont été envoyées avec succès.");
        setFormData({ firstName: "", lastName: "", email: "", phone: "" });
      } else {
        alert(`Erreur: ${responseData.message || "Une erreur est survenue"}`);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };
  
  return (
    <div className="bg-white py-10 px-6 md:px-12 lg:px-24">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Contactez-nous
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md border">
          <h3 className="text-xl font-bold mb-4">De quoi avez-vous besoin ?</h3>
          <p className="text-sm mb-6">
            Il existe des milliers d’agences de marketing dans le monde. Mais
            AUCUNE ne propose une offre complète à des prix que vous pouvez
            facilement comprendre.
          </p>
          <div className="mb-6 flex items-start">
            <FaMapMarkerAlt className="text-yellow-500 text-2xl mr-4" />
            <div>
              <h4 className="font-semibold text-lg mb-2">Visitez nos locaux</h4>
              <p className="text-sm">
                5ème étage, Nº27, Akram Offices, Av. Arabie Saoudite, Tangier
                90000
              </p>
            </div>
          </div>
          <div className="mb-6 flex items-start">
            <FaEnvelope className="text-yellow-500 text-2xl mr-4" />
            <div>
              <h4 className="font-semibold text-lg mb-2">
                Connectez-vous avec nous
              </h4>
              <p className="text-sm">contact@digitalroom.com</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaPhoneAlt className="text-yellow-500 text-2xl mr-4" />
            <div>
              <h4 className="font-semibold text-lg mb-2">Appelez-nous</h4>
              <p className="text-sm">+212 663-091166</p>
              <p className="text-sm">+212 664-738086</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-medium mb-2"
            >
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-medium mb-2"
            >
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2"
            >
              Numéro de Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-medium text-lg py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
