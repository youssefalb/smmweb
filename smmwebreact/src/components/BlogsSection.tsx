import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, query, getDocs, orderBy, limit, deleteDoc, doc } from 'firebase/firestore';
import BlogCard from './BlogCard';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { isAdminUser } from '../utils/AuthUtils';
import { useTranslation } from 'react-i18next';
import SectionContainer from './templates/SectionContainer';

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
        const blogsQuery = query(collection(db, "blogPosts"), orderBy('publishDate', 'desc'), limit(3));
        const querySnapshot = await getDocs(blogsQuery);
        const posts: BlogPost[] = querySnapshot.docs.map(doc => ({
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
            <SectionContainer
                title={t('blogs.title')}
                subtitle={t('blogs.subtitle')}
            >
                <div className="max-w-6xl mx-auto"> {/* Original container padding */}
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 w-full">
                        {blogPosts.map(post => (
                            // 'w-full' makes each card take the full width of the screen on mobile devices
                            // 'sm:w-1/2' makes each card take half the width of the container on small devices
                            // 'lg:w-1/4' makes each card take a quarter of the width on large devices
                            <div className="w-full sm:w-1/2 lg:w-1/4 px-2">
                                <BlogCard key={post.id} {...post} onDelete={() => handleDeleteItem(post.id)} />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => navigate('/blogs')}
                        >
                            {t('blogs.seeAllPosts')}
                        </button>
                        {isAdminUser(currentUser) && (
                            <button
                                className="bg-purple hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => navigate('/add-blog-post')}
                            >
                                {t('blogs.addBlogPost')}
                            </button>
                        )}
                    </div>
                </div>
            </SectionContainer>
        </section>
    );

}

export default BlogsSection;
