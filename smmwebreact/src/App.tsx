import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/Navbar';
import Hero from './components/Hero'
import CooperationPlan from './components/CooperationPlan'
import FaqSection from './components/FaqSection'
import Services from './components/Services';
import ConsultationSection from './components/ConsultationSection';
import ContactForm from './components/ContactForm';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import Motto from './components/Motto'
import FeaturesSection from './components/FeaturesSection';
import BestWorkSection from './components/BestWorkSection';
import Testimonials from './components/Testimonials';
import { AuthProvider } from './AuthContext';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <CooperationPlan />
                <FeaturesSection />
                <FaqSection />
                <ConsultationSection />
                <Testimonials />
                <BestWorkSection />
                <TeamSection />
                <Motto />
                <ContactForm />
              </>
            } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
