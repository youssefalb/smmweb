import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero'
import CooperationPlan from './components/CooperationPlan'
import ConsultationSection from './components/ConsultationSection';
import ContactForm from './components/ContactForm';
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <CooperationPlan />
      {/* For testing*/}
      {/* <ConsultationSection /> */}
      <ContactForm />

    </div>
  );
}

export default App;
