import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types";


const Blogs = ({ handleAddToBookmark, handleReadTime }) => {
    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])



    return (
        <div className="w-2/3">
            <h2>Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => {
                    return <Blog
                        key={blog.id}
                        blog={blog}
                        addToBookMark={handleAddToBookmark}
                        handleReadTime={handleReadTime}
                    ></Blog>
                })
            }
        </div>
    );
};

Blogs.propType = {
    handleAddToBookmark: PropTypes.function
}

export default Blogs;