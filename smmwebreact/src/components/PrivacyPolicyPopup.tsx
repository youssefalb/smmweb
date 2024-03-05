import React, { useState } from 'react';

const PrivacyPolicyPopup = () => {
    const [isOpen, setIsOpen] = useState(true); // State to handle the visibility of the popup

    return (
        <>
            {isOpen && (
                <div className="fixed bottom-0 left-0 right-0 top-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg max-w-md mx-auto">
                        <h2 className="font-semibold text-lg mb-2">Privacy Policy</h2>
                        <div className="text-sm mb-4">
                            {/* Insert your privacy policy content here */}
                            <p>This is your Privacy Policy section. You should include the details of your policy here. Explain to your users what information you collect and how you intend to use it.</p>
                            <p>Be clear and concise to ensure users understand your policies.</p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PrivacyPolicyPopup;
