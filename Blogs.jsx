import React, { useState } from 'react';

const Blogs = () => {
    const [blogs, updateBlog] = useState({
        name: "Asrith",
        date: "12/16/24",
        blog: "Dorm party!",
        id: 1
    });

    const deleteBlog = () => {
        updateBlog(null); // Set blogs to null to simulate deletion
    };

    return ( 
        <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-xl">
            <h1 className="text-3xl font-bold mb-6 text-white">Blog Details</h1>
            {blogs ? (
                <>
                    <p className="text-lg text-gray-300"><span className="font-semibold text-purple-400">Author:</span> {blogs.name}</p>
                    <p className="text-lg text-gray-300"><span className="font-semibold text-purple-400">Date:</span> {blogs.date}</p>
                    <p className="text-lg text-gray-300"><span className="font-semibold text-purple-400">Content:</span> {blogs.blog}</p>
                    <button onClick={deleteBlog} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300 ease-in-out">
                        Delete Blog
                    </button>
                </>
            ) : (
                <p className="text-lg text-gray-400">No blog available.</p>
            )}
        </div>
    );
};

export default Blogs;
