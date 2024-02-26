import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
            )
                .then((result) => {
                    console.log(result.text);
                    alert('Message sent successfully!');
                }, (error) => {
                    console.log(error.text);
                    alert('Failed to send the message, please try again.');
                });

            form.current.reset();
        }
    };

    return (
        <section id="contact">
            <div className="flex items-center justify-center min-h-screen bg-white-100">
                <div className="bg-gray-100 p-8 rounded-2xl shadow-lg w-full max-w-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                    <p className="text-gray-600 mb-8">Get free consultation for you.</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Full Name"
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                name="from_email"
                                placeholder="Email Address"
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                                rows={5}
                                required
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center text-gray-600">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2">I agree to the Privacy Policy</span>
                            </label>
                            <button
                                type="submit"
                                className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
