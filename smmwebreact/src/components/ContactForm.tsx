import React from 'react';

const ContactForm = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-8">Get free consultation for you.</p>
                <form>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            placeholder="Your Message"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                            rows={5}
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <label className="flex items-center text-gray-600">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2">Privacy Policy</span>
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
    );
};

export default ContactForm;
