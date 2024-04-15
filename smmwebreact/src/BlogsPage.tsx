// BlogsPage.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './components/BlogCard';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase-config';
import backgroundImage from './assets/images/HeroBlogsBackground.svg';

interface BlogPost {
    id: string;
    image: string;
    title: string;
    publishDate: string;
    author: string;
    content: string;
    tag: string;
}



interface PaginationProps {
    currentPage: number;
    totalPages: number;
    paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, paginate }) => {



    let startPage: number, endPage: number;

    if (totalPages <= 5) {
        // Less than 5 total pages so show all
        startPage = 1;
        endPage = totalPages;
    } else {
        // More than 5 total pages so calculate start and end pages
        if (currentPage <= 3) {
            startPage = 1;
            endPage = 5;
        } else if (currentPage + 2 >= totalPages) {
            startPage = totalPages - 4;
            endPage = totalPages;
        } else {
            startPage = currentPage - 2;
            endPage = currentPage + 2;
        }
    }

    // Generate our range of page numbers
    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    return (
        <div className="flex justify-center items-center space-x-2 my-8">
            {/* Other buttons remain the same */}
            {startPage > 1 && (
                <>
                    <button onClick={() => paginate(1)}>&lt;&lt;</button>
                    <button onClick={() => paginate(currentPage - 1)}>&lt;</button>
                    <button onClick={() => paginate(startPage - 1)}>...</button>
                </>
            )}
            {pages.map(page => (
                <button
                    key={page}
                    className={`px-4 py-2 ${currentPage === page ? 'bg-purple text-white rounded-full' : 'bg-white text-purple-500'}`}
                    onClick={() => paginate(page)}
                >
                    {page}
                </button>
            ))}
            {endPage < totalPages && (
                <>
                    <button onClick={() => paginate(endPage + 1)}>...</button>
                    <button onClick={() => paginate(currentPage + 1)}>&gt;</button>
                    <button onClick={() => paginate(totalPages)}>&gt;&gt;</button>
                </>
            )}
        </div>
    );
};



const BlogsPage: React.FC = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);

    const [searchQuery, setSearchQuery] = useState('');


    const fetchBlogPosts = async () => {
        const querySnapshot = await getDocs(collection(db, "blogPosts"));
        let allPosts: BlogPost[] = querySnapshot.docs.map((doc) => ({
            ...doc.data() as BlogPost,
            id: doc.id,
        }));

        setLatestPosts(allPosts.slice(0, 2));


        // Filter by search query if it exists
        if (searchQuery) {
            const searchLower = searchQuery.toLowerCase();
            allPosts = allPosts.filter(post =>
                post.title?.toLowerCase().includes(searchLower) ||
                post.author?.toLowerCase().includes(searchLower)

            );
        }

        // Further filter by selected category if it exists
        if (selectedCategory) {
            allPosts = allPosts.filter(post => post.tag?.toLowerCase() === selectedCategory.toLowerCase());
        }

        setBlogPosts(allPosts);
    };






    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    useEffect(() => {
        fetchBlogPosts();
    }, [searchQuery, selectedCategory]);

    const handleDeleteItem = async (itemId: string) => {
        await deleteDoc(doc(db, "blogPosts", itemId));
        fetchBlogPosts();
    };


    const handleCategorySelect = (category: string | null) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to first page
    };
    const categories = ["Digital Marketing", "Web Design & Development", "SEO Optimization", "Graphic Design", "Content Creation", "Social Media Management", "Email Marketing Campaigns", "Mobile App Development", "E-Commerce"];

    return (
        <>
            {/* Header */}
            <div className="bg-no-repeat bg-cover text-white text-left p-12 mt-16 max-w-7xl mx-auto" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="container mx-auto max-w-6xl">
                    {/* Navigation Links */}
                    <div className="space-x-4">
                        <Link to="/" className="text-white hover:text-black text-sm">
                            HOME
                        </Link>
                        <span>|</span>
                        <Link to="/blogs" className="text-white hover:text-black text-sm">
                            BLOG
                        </Link>
                    </div>
                    <h1 className="text-3xl font-bold mb-3">Explore Our Latest Articles</h1>
                    <p className="font-light">Discover the world around you with our curated content</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12 flex flex-col lg:flex-row max-w-7xl">
                {/* Sidebar: Search, Categories, and Latest Posts */}
                <aside className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0 lg:pr-8">
                    {/* Search Bar */}
                    {/* Search Bar */}
                    <div className="bg-green p-4 rounded-lg shadow-xl mb-6">
                        <input
                            className="w-full p-2 rounded-md border border-gray-300"
                            placeholder="Enter your keywords..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            className="w-full bg-purple text-white p-2 rounded-md mt-2"
                            onClick={fetchBlogPosts}
                        >
                            Search
                        </button>
                    </div>


                    {/* Categories Filter */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow-xl mb-6 hidden lg:block">
                        <h2 className="font-bold mb-3">Categories</h2>
                        <ul>
                            <li
                                className={`text-gray-700 py-1 px-3 rounded-md cursor-pointer ${selectedCategory === null ? 'bg-purple text-white' : 'hover:bg-gray-200'}`}
                                onClick={() => handleCategorySelect(null)}
                            >
                                All Categories
                            </li>
                            {categories.map((category) => (
                                <li
                                    key={category}
                                    className={`text-gray-700 py-1 px-3 rounded-md cursor-pointer ${selectedCategory === category ? 'bg-purple text-white' : 'hover:bg-gray-200'}`}
                                    onClick={() => handleCategorySelect(category)}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Latest Posts */}
                    {/* Latest Posts */}
                    <div className="bg-white p-4 rounded-lg shadow-md mb-6 hidden lg:block gap-y-4 space-y-8">
                        <h2 className="font-bold mb-3">Latest Posts</h2>
                        {latestPosts.map(post => (
                            <BlogCard key={post.id} {...post} onDelete={() => handleDeleteItem(post.id)} />
                        ))}
                    </div>

                </aside>

                {/* Blog Posts Grid */}
                <main className="w-full lg:w-3/4 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-1">
                        {currentPosts.map((post) => (
                            <BlogCard key={post.id} {...post} onDelete={() => handleDeleteItem(post.id)} />
                        ))}
                    </div>
                    {/* Pagination */}
                    <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
                </main>
            </div>
        </>
    );
};

export default BlogsPage;
