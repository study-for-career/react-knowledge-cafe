import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";


const Blogs = () => {
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
                    return <Blog key={blog.id} blog={blog}></Blog>
                })
            }
        </div>
    );
};

export default Blogs;