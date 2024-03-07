import React, { useState, useEffect } from 'react';

const PrivacyPolicyPopup = () => {
    const [isOpen, setIsOpen] = useState(true); // State to handle the visibility of the popup
    const [policyText, setPolicyText] = useState('Loading...'); // Initial text while loading

    useEffect(() => {
        // Fetch the privacy policy text from the public folder
        fetch('/policy.txt')
            .then(response => response.text())
            .then(text => setPolicyText(text))
            .catch(err => setPolicyText('Failed to load the privacy policy.'));
    }, []);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg max-w-md mx-auto overflow-y-auto" style={{ maxHeight: '80vh' }}>
                        <h2 className="font-semibold text-lg mb-2">Privacy Policy</h2>
                        <div className="text-sm mb-4 whitespace-pre-wrap">
                            {}
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
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
