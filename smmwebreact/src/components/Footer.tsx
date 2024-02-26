import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-black p-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Company Description */}


                {/* Contact */}
                {/* <div>
                    <h3 className="font-bold text-lg mb-2">Contact</h3>
                    <ul>
                        <li>Phone</li>
                        <li>Email</li>
                        <li>Location</li>
                        <li>Social Media</li>
                        <li>Message Form</li>
                        <li>Customer Center</li>
                    </ul>
                </div> */}

                {/* About Us */}
                {/* <div>
                    <h3 className="font-bold text-lg mb-2">About Us</h3>
                    <ul>
                        <li>Who We Are</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Case Studies</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div> */}
                <div className="">
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
                <div className='ml-24'>
                    <h2 className="font-bold text-lg mb-4">WeboKraft</h2>
                    <p>WeboKraft is a digital marketing agency based on planet earth established © 2023.</p>

                    {/* Newsletter Subscription */}

                </div>
                {/* Services */}
                <div className='ml-24'>
                    <h3 className="font-bold text-lg mb-2">Sections</h3>
                    <ul>
                        <ul>
                            <li><a href="#services" className="text-gray-600 hover:text-gray-900">Services</a></li>
                            <li><a href="#process" className="text-gray-600 hover:text-gray-900">Process</a></li>
                            <li><a href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a></li>
                            <li><a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
                            <li><a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
                            <li><a href="#aboutus" className="text-gray-600 hover:text-gray-900">About us</a></li>
                        </ul>
                    </ul>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center lg:justify-start mt-8 lg:mt-0 ml-24">
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

