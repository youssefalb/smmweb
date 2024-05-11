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
    author: string;
    content: string;
    publishDate: string;
    tag: string;
    onDelete: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, image, title, content, publishDate, tag, author, onDelete }) => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this auction item?')) {
            await deleteDoc(doc(db, "auctions", id));
            onDelete(); // Call the onDelete handler passed down from the parent
        }
    };

    console.log("publishDate: ", publishDate);

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

    const formatDate = (timestamp: any) => {
        // Convert seconds to milliseconds by multiplying by 1000
        const date = new Date(timestamp.seconds * 1000);
        return {
            month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
            day: date.getDate().toString()
        };
    };

    const dateParts = formatDate(publishDate);
    console.log("dateParts: ", dateParts);
    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-300 flex flex-col max-w-sm relative">
            <Link to={`/blog/${id}`} className="text-black hover:text-purple relative">
                <div className="relative">
                    <img src={image} alt="Blog Post" className="object-cover w-full rounded-t-lg" style={{ height: '200px' }} />
                    <span className="absolute bottom-[-0.625rem] ml-4 bg-purple text-white text-xs font-semibold px-4 py-1 rounded-md">
                        {tag}
                    </span>
                </div>
                <div className="p-4">
                    <h4 className="text-lg font-bold mt-2 line-clamp-2 overflow-hidden" title={title}>
                        {truncateString(title, 50)}
                    </h4>
                    <p className="text-xs font-medium text-gray-500">by {author}</p>
                </div>
            </Link>

            <div className="absolute top-0 right-0 m-4 bg-white p-3 rounded-lg">
                <div className="text-center">
                    <span className="block text-black text-xs font-bold">
                        {dateParts.month}
                    </span>
                    <span className="block text-purple text-3xl font-semibold">
                        {dateParts.day}
                    </span>
                </div>
            </div>

            {isAdminUser(currentUser) && (
                <div className="absolute top-0 left-0 m-4 space-y-2 z-10">
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                        onClick={handleDelete}
                        title={t('blogCard.delete')}>
                        {t('blogCard.delete')}
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                        onClick={handleEdit}
                        title={t('blogCard.edit')}>
                        {t('blogCard.edit')}
                    </button>
                </div>
            )}
        </div>
    );
};

export default BlogCard;