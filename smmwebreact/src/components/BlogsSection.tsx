import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config.js'; // Your Firebase configuration file
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import BlogCard from './BlogCard'; // Your BlogCard component
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { isAdminUser } from '../utils/AuthUtils';
import { useTranslation } from 'react-i18next';
import CustomSlider from './CustomSlider';
// Define the structure of your blog post data
interface BlogPost {
    id: string;
    image: string;
    title: string;
    publishDate: string;
    author: string;
    content: string;
    tag: string;
}

const BlogsSection: React.FC = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const fetchBlogPosts = async () => {
        const querySnapshot = await getDocs(collection(db, "blogPosts"));
        const posts: BlogPost[] = querySnapshot.docs.map((doc) => ({
            ...doc.data() as BlogPost,
            id: doc.id,
        }));
        setBlogPosts(posts);
    };

    

    useEffect(() => {
        fetchBlogPosts();
    }, []);

    const handleDeleteItem = async (itemId: string) => {
        await deleteDoc(doc(db, "blogPosts", itemId));
        fetchBlogPosts();
    };

    return (
        <section id="news" className="p-6 bg-gray-100 pb-30 mx-auto">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center mb-6 p-10">
                <h2 className="text-3xl font-bold sm:mb-0 mb-4 text-center sm:text-center flex-1">{t('blogs.title')}</h2>
                {isAdminUser(currentUser) && (
                    <button
                        className="bg-purple hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => navigate('/add-blog-post')}
                    >
                        {t('blogs.addBlogPost')}
                    </button>
                )}
            </div>
            <div>

                {blogPosts.map((post) => (
                    <BlogCard key={post.id} {...post} onDelete={() => handleDeleteItem(post.id)} />
                ))}

            </div>
        </section>
    );
};

export default BlogsSection;