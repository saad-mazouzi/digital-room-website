import React from 'react';
import Navbar from './Component/Navbar';
import CompanyDescription from './Component/CompanyDescription';
import Highlights from './Component/Highlights';
import AboutUs from './Component/AboutUs';
import Values from './Component/Values';
import Services from './Component/Services';
import TrustedBy from './Component/TrustedBy';
import ContactForm from './Component/ContactForm';

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
      <CompanyDescription />
      <Highlights />
      <AboutUs />
      <Values />
      <Services />
      <TrustedBy />
      <ContactForm />
      </main>
    </div>
  );
}

export default App;
