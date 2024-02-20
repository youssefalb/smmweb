import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-black p-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Company Description */}
                <div>
                    <h2 className="font-bold text-lg mb-4">DigiCraft</h2>
                    <p>DigiCraft is a digital marketing agency based on planet earth established © 2023.</p>

                    {/* Newsletter Subscription */}
                    <div className=" mt-28">
                        <h3 className="font-bold text-lg mb-2">Subscribe to Newsletter</h3>
                        <p className="mb-4">Stay updated on the latest in digital trends and insights.</p>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Enter your email address"
                                className="w-full px-4 py-2 border rounded-l-lg text-gray-700 focus:outline-none focus:border-blue-500"
                            />
                            <button className="bg-gray-400 p-2 rounded-r">→</button>
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Contact</h3>
                    <ul>
                        <li>Phone</li>
                        <li>Email</li>
                        <li>Location</li>
                        <li>Social Media</li>
                        <li>Message Form</li>
                        <li>Customer Center</li>
                    </ul>
                </div>

                {/* About Us */}
                <div>
                    <h3 className="font-bold text-lg mb-2">About Us</h3>
                    <ul>
                        <li>Who We Are</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Case Studies</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Services</h3>
                    <ul>
                        <li>Graphic Design</li>
                        <li>Digital Marketing</li>
                        <li>Content Creation</li>
                        <li>SEO Optimization</li>
                        <li>Social Media Management</li>
                        <li>Web Design & Development</li>
                    </ul>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center lg:justify-start mt-8 lg:mt-0">
                    <a href="#" className="mr-4">wa</a>
                    <a href="#" className="mr-4">fb</a>
                    <a href="#" className="mr-4">tw</a>
                    <a href="#" className="mr-4">ig</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

