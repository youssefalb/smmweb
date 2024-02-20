import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero'
import CooperationPlan from './components/CooperationPlan'
import ConsultationSection from './components/ConsultationSection';
import ContactForm from './components/ContactForm';
import TeamSection from './components/TeamSection';
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <CooperationPlan />
      {/* For testing*/}
      <ConsultationSection />
      <TeamSection />
      <ContactForm />

    </div>
  );
}

export default App;
