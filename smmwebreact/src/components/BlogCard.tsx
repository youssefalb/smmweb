import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Adjust the path as necessary
import { isAdminUser } from '../utils/AuthUtils'; // Adjust the path as necessary
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config'; // Adjust the path as necessary
import { useTranslation } from 'react-i18next';

interface BlogCardProps {
    id: string;
    image: string;
    title: string;
    description: string;
    datePublished: string;
    onDelete: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, image, title, description, datePublished, onDelete }) => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this auction item?')) {
            await deleteDoc(doc(db, "auctions", id));
            onDelete(); // Call the onDelete handler passed down from the parent
        }
    };

    const handleEdit = () => {
        navigate(`/edit-blog-post/${id}`); // Assuming you have this route set up for editing
    };


    const truncateString = (str: string, maxLength: number) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        }
        return str;
    };
    //        <div className="border border-gray-300 bg-white rounded-2xl flex flex-col items-center max-w-sm">

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-300 flex flex-col max-w-sm relative">
            <Link to={`/blog/${id}`} className="text-black hover:text-purple relative">
                <div className="relative">
                    <img src={image} alt="Blog Post" className="object-cover w-full rounded-t-lg" style={{ height: '200px' }} />
                    <span className="absolute bottom-[-0.625rem] ml-4 bg-purple text-white text-xs font-semibold px-4 py-1 rounded-md">
                        TEST
                    </span>
                </div>
                <div className="p-4">
                    <h4 className="text-lg font-bold mt-2 line-clamp-2 overflow-hidden" title={title}>
                        {title}
                    </h4>
                    <p className="text-xs font-medium text-gray-500">by Youssef</p>
                </div>
            </Link>

            <div className="absolute top-0 rounded-lg right-0 m-4 bg-white p-3 shadow-2xl">
                <div className="text-center">
                    <span className="block text-black text-xs font-bold">
                        AUG
                    </span>
                    <span className="block text-purple text-3xl font-semibold">
                        01
                    </span>
                </div>
            </div>
        </div>
    );
};


export default BlogCard;