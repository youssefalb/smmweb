// ReviewForm.tsx
import React, { useState } from 'react';
import { db, storage } from '../firebase-config'; // Adjust this path according to your Firebase config file
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

type ReviewFormProps = {
    isOpen: boolean;
    closeModal: () => void;
};

const ReviewForm: React.FC<ReviewFormProps> = ({ isOpen, closeModal }) => {
    const [name, setName] = useState('');
    const [website, setWebsite] = useState(''); // Changed from 'position' to 'website'
    const [content, setContent] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Basic validation
        if (!name || !website || !content) {
            alert('Please fill in all the required fields: Name, Website, and Content');
            return;
        }

        let imageUrl = '';
        if (image) {
            const imageRef = ref(storage, `reviews/${image.name}_${new Date().getTime()}`);
            const uploadTask = uploadBytesResumable(imageRef, image);

            await new Promise((resolve, reject) => {
                uploadTask.on('state_changed', 
                    (snapshot) => {
                        // Handle progress
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                    }, 
                    (error) => {
                        // Handle unsuccessful uploads
                        console.log(error);
                        reject(error);
                    }, 
                    () => {
                        // Handle successful uploads on complete
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            console.log('File available at', downloadURL);
                            imageUrl = downloadURL;
                            resolve(downloadURL);
                        });
                    }
                );
            });
        }

        // Add a new document with a generated id and current timestamp in Firebase
        await addDoc(collection(db, 'testimonials'), {
            name,
            website,
            content,
            email, // Optional, can be empty
            image: imageUrl, // Add image URL here
            createdAt: serverTimestamp()
        });

        // Clear form fields
        setName('');
        setWebsite('');
        setContent('');
        setEmail('');
        setImage(null);

        // Close modal
        closeModal();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="text-black fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="text-lg font-bold mb-4">Add a Review</h2>
                    <label className="block">Name*</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <label className="block">Website*</label>
                    <input
                        type="url"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <label className="block">Content*</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                    {/* <label className="block">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded"
                    /> */}
                    <label className="block">Image</label>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="w-full p-2 border rounded"
                    />
                    <div className="text-right">
                        <button type="submit" className="bg-purple text-white px-4 py-2 rounded hover:bg-blue-700">
                            Submit
                        </button>
                    </div>
                </form>
                <button onClick={closeModal} className="absolute top-0 right-0 mt-4 mr-4 text-2xl font-semibold">
                    &times;
                </button>
            </div>
        </div>
    );
};

export default ReviewForm;
