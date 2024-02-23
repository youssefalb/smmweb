import React from 'react';
import './App.css';

import NavBar from './components/Navbar';
import Hero from './components/Hero'
import CooperationPlan from './components/CooperationPlan'
import FaqSection from './components/FaqSection'
import Services from './components/Services';
import ConsultationSection from './components/ConsultationSection';
import ContactForm from './components/ContactForm';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import Pricing from './components/Pricing'
import Motto from './components/Motto'
import FeaturesSection  from './components/FeaturesSection';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Services />
      <CooperationPlan />
      <FeaturesSection/>
      <FaqSection />
      <ConsultationSection />
      <Pricing/>
      <TeamSection />
      <Motto/>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
