import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import ReviewForm from './ReviewForm';
import SectionContainer from './templates/SectionContainer';
import { ReactComponent as QuotesIcon } from '../assets/icons/quote-icon.svg'; // Adjust the path as necessary\
import { useTranslation } from 'react-i18next';

type Testimonial = {
  id: string;
  name: string;
  website: string;
  content: string;
  email?: string;
  image?: string;
  createdAt?: any;
};

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'testimonials'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const updatedTestimonials: Testimonial[] = [];
      querySnapshot.forEach((doc) => {
        updatedTestimonials.push({ id: doc.id, ...doc.data() } as Testimonial);
      });
      setTestimonials(updatedTestimonials);
    });

    return () => unsubscribe();
  }, []);

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 2) % testimonials.length); // Change for showing two cards
  };

  const prevReview = () => {
    setIndex((prevIndex) => (prevIndex - 2 + testimonials.length) % testimonials.length); // Change for showing two cards
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="testimonials">
      <SectionContainer
        title={t('testimonials.title')}
        subtitle={t('testimonials.subtitle')}
        backgroundColor="bg-purple"
        textColor='text-white'
        subtitleColor='text-white'
      >
        <div className="flex flex-col items-center md:flex-row md:justify-center mx-auto max-w-6xl ">
            {testimonials.length > 0 ? (
              <>
                {[testimonials[index], testimonials[(index + 1) % testimonials.length]].map((testimonial, idx) => (
                  <div key={idx} className="m-2 bg-white rounded-2xl shadow-md overflow-hidden p-6 text-black mb-4 md:mb-0">
                    <div className="mb-4">
                      <QuotesIcon className="w-6 h-6 text-purple-700" />
                    </div>
                    <p className="text-xl font-bold text-gray-800">{testimonial.content}</p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-start">
                        {testimonial.image && <img src={testimonial.image} alt="Review" className="mr-4 w-12 h-12 rounded-full object-cover" />}
                        <div>
                          <div className="font-bold">{testimonial.name}</div>
                          <a href={testimonial.website} target="_blank" rel="noopener noreferrer" className="text-purple-700 underline text-sm">{testimonial.website}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
          {testimonials.length > 1 && ( // Only show arrows if there are more than one testimonial
            <div className="flex justify-center space-x-4 mt-10">
              <button onClick={prevReview} className="text-2xl bg-purple-700 hover:bg-purple-800 rounded-full p-2 mx-1">
                ←
              </button>
              <button onClick={openModal} className="hover:bg-purple-800 focus:outline-none focus:ring focus:ring-purple-300 font-bold border-2 border-white text-white rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
              {t('testimonials.add')}
            </button>
              <button onClick={nextReview} className="text-2xl bg-purple-700 hover:bg-purple-800 rounded-full p-2 mx-1">
                →
              </button>
            </div>
          )}
          <ReviewForm isOpen={isModalOpen} closeModal={closeModal} />
      </SectionContainer>
    </section>


  );
};

export default Testimonials;
