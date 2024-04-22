import React, { useEffect, useRef } from 'react';
import heroImage from '../assets/images/hero.svg';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import {db} from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

export default function HeroSection() {
    const { t } = useTranslation();

    // References to DOM elements you want to animate
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        // GSAP animations
        gsap.fromTo(textRef.current,
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );
        gsap.fromTo(imageRef.current,
            { x: 200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );
    }, []);

    addDummyBlogPosts();

    return (
        <section id="hero" className="bg-gray-100 pt-20 pb-7 px-7 sm:px-6 lg:px-8 overflow-x-hidden">
            <div className="max-w-6xl h-[90vh] mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="lg:flex-1" ref={textRef}>
                    <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">{t('hero.titlePartOne')} <span className="text-purple">{t('hero.titlePartTwo')}</span></h1>
                    <p className="text-lg text-black mb-4">
                        {t('hero.description')}
                    </p>
                    <div className="flex justify-start space-x-4 mt-7">
                        <a href="#contact" className="rounded-lg bg-black text-white text-md font-medium px-5 py-2 transition duration-300 ease-in-out hover:bg-gray-700">{t('hero.contactButton')}</a>
                        <a href="#services" className="rounded-lg text-md font-medium px-5 py-2 underline decoration-black decoration-2 underline-offset-4 hover:text-gray-600">{t('hero.servicesButton')}</a>
                    </div>
                    <PricingSection />
                </div>
                <div className="lg:flex-1 hidden lg:block" ref={imageRef}>
                    <img src={heroImage} alt="Digital Solutions" className="max-w-lg mx-auto" />
                </div>
            </div>
        </section>
    );
}

const addDummyBlogPosts = async () => {
    const blogPosts = [
        {
            title: "How to fail at almost everything but be good at blowjob",
            content: "This is the blog post content for Post 1.",
            image: "https://firebasestorage.googleapis.com/v0/b/webokraft.appspot.com/o/blogImages%2Fc093f2ef-7c36-48be-9e9d-cf764c7055f0.webp?alt=media&token=b880f8f9-dd04-4c24-9364-bfdae2814300",
            publishDate: new Date().toISOString(),
            author: "Sexy Andy",
            tag: "Technology"
        },
        {
            title: "How to fail at almost everything but be good at blowjob",
            content: "This is the blog post content for Post 1.",
            image: "https://firebasestorage.googleapis.com/v0/b/webokraft.appspot.com/o/blogImages%2Fc093f2ef-7c36-48be-9e9d-cf764c7055f0.webp?alt=media&token=b880f8f9-dd04-4c24-9364-bfdae2814300",
            publishDate: new Date().toISOString(),
            author: "Sexy Andy",
            tag: "Technology"
        },
        {
            title: "How to fail at almost everything but be good at blowjob",
            content: "This is the blog post content for Post 1.",
            image: "https://firebasestorage.googleapis.com/v0/b/webokraft.appspot.com/o/blogImages%2Fc093f2ef-7c36-48be-9e9d-cf764c7055f0.webp?alt=media&token=b880f8f9-dd04-4c24-9364-bfdae2814300",
            publishDate: new Date().toISOString(),
            author: "Sexy Andy",
            tag: "Technology"
        },
        {
            title: "How to fail at almost everything but be good at blowjob",
            content: "This is the blog post content for Post 1.",
            image: "https://firebasestorage.googleapis.com/v0/b/webokraft.appspot.com/o/blogImages%2Fc093f2ef-7c36-48be-9e9d-cf764c7055f0.webp?alt=media&token=b880f8f9-dd04-4c24-9364-bfdae2814300",
            publishDate: new Date().toISOString(),
            author: "Sexy Andy",
            tag: "Technology"
        },
        {
            title: "How to fail at almost everything but be good at blowjob",
            content: "This is the blog post content for Post 1.",
            image: "https://firebasestorage.googleapis.com/v0/b/webokraft.appspot.com/o/blogImages%2Fc093f2ef-7c36-48be-9e9d-cf764c7055f0.webp?alt=media&token=b880f8f9-dd04-4c24-9364-bfdae2814300",
            publishDate: new Date().toISOString(),
            author: "Sexy Andy",
            tag: "Technology"
        },
        {
            title: "How to fail at almost everything but be good at blowjob",
            content: "This is the blog post content for Post 1.",
            image: "https://firebasestorage.googleapis.com/v0/b/webokraft.appspot.com/o/blogImages%2Fc093f2ef-7c36-48be-9e9d-cf764c7055f0.webp?alt=media&token=b880f8f9-dd04-4c24-9364-bfdae2814300",
            publishDate: new Date().toISOString(),
            author: "Sexy Andy",
            tag: "Technology"
        },
        {
            title: "How to fail at almost everything but be good at blowjob",
            content: "This is the blog post content for Post 1.",
            image: "https://firebasestorage.googleapis.com/v0/b/webokraft.appspot.com/o/blogImages%2Fc093f2ef-7c36-48be-9e9d-cf764c7055f0.webp?alt=media&token=b880f8f9-dd04-4c24-9364-bfdae2814300",
            publishDate: new Date().toISOString(),
            author: "Sexy Andy",
            tag: "Technology"
        },
        {
            title: "How to fail at almost everything but be good at blowjob",
            content: "This is the blog post content for Post 1.",
            image: "https://firebasestorage.googleapis.com/v0/b/webokraft.appspot.com/o/blogImages%2Fc093f2ef-7c36-48be-9e9d-cf764c7055f0.webp?alt=media&token=b880f8f9-dd04-4c24-9364-bfdae2814300",
            publishDate: new Date().toISOString(),
            author: "Sexy Andy",
            tag: "Technology"
        },
        {
            title: "How to fail at almost everything but be good at blowjob",
            content: "This is the blog post content for Post 1.",
            image: "https://firebasestorage.googleapis.com/v0/b/webokraft.appspot.com/o/blogImages%2Fc093f2ef-7c36-48be-9e9d-cf764c7055f0.webp?alt=media&token=b880f8f9-dd04-4c24-9364-bfdae2814300",
            publishDate: new Date().toISOString(),
            author: "Sexy Andy",
            tag: "Technology"
        },
        {
            title: "How to fail at almost everything but be good at blowjob",
            content: "This is the blog post content for Post 1.",
            image: "https://firebasestorage.googleapis.com/v0/b/webokraft.appspot.com/o/blogImages%2Fc093f2ef-7c36-48be-9e9d-cf764c7055f0.webp?alt=media&token=b880f8f9-dd04-4c24-9364-bfdae2814300",
            publishDate: new Date().toISOString(),
            author: "Sexy Andy",
            tag: "Technology"
        },
        {
            title: "How to fail at almost everything but be good at blowjob",
            content: "This is the blog post content for Post 1.",
            image: "https://firebasestorage.googleapis.com/v0/b/webokraft.appspot.com/o/blogImages%2Fc093f2ef-7c36-48be-9e9d-cf764c7055f0.webp?alt=media&token=b880f8f9-dd04-4c24-9364-bfdae2814300",
            publishDate: new Date().toISOString(),
            author: "Sexy Andy",
            tag: "Technology"
        },

        // Add more blog posts here following the same structure
    ];

    const promises = blogPosts.map(async (post) => {
        try {
            const docRef = await addDoc(collection(db, "blogPosts"), post);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    });

    await Promise.all(promises);
};

function PricingSection() {
    const { t } = useTranslation();

    return (
        <div className="pt-9 pb-9">
            <div className="max-w-6xl mx-auto">
                <p className="text-lg text-center md:text-left">{t('hero.websiteOffer')}</p>

                <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:space-x-10 mt-2">

                    <div className="text-center md:text-left">
                        <a href={`tel:${t('hero.price')}`} className="text-5xl font-bold hover:text-purple hover:underline">
                            <p>{t('hero.price')}</p>
                        </a>
                        <p className="text-base font-light">{t('hero.codeNote')}</p>
                    </div>

                    {/* <div className="text-center md:text-left mt-4 md:mt-0">
                        <p className="text-5xl font-bold">14+</p>
                        <p className="text-base font-light">{t('hero.helpNote')}</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
