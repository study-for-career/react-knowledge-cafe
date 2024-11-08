import PropTypes from "prop-types";
import { GoBookmark } from "react-icons/go";


const Blog = ({ blog, addToBookMark, handleReadTime }) => {
    const { title, cover_img, author_img, author_name, post_date, hashtags, readtime } = blog

    return (
        <div className="p-2 border-b-2 rounded-md my-2 space-y-3">
            <img className="rounded-lg w-full" src={cover_img} alt={`cover photo: ${title}`} />
            {/* /Author area */}
            <div className="flex justify-between 
                items-center">
                <div className="flex justify-center gap-2
                items-center">
                    <img className="w-16 rounded-lg" src={author_img} alt={`Author: ${author_name}`} />
                    <div>
                        <h2>{author_name}</h2>
                        <p>{post_date}</p>
                    </div>
                </div>
                {/* time to read */}
                <div className="flex gap-1 items-center">
                    <h3>{readtime} min read</h3>

                    <button
                        className="text-xl cursor-pointer"
                        onClick={() => addToBookMark(blog)}><GoBookmark ></GoBookmark>
                    </button>

                </div>
            </div>

            {/* post title */}
            <h1 className="text-3xl font-bold">{title}</h1>

            <p>{hashtags.map((hash, index) => <span className="text-gray-500" key={index}> {hash} </span>)}</p>
            <button
                onClick={() => handleReadTime(readtime)}
                className="underline text-blue-500"
            >Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.obj,
    addToBookMark: PropTypes.func,
    handleReadTime: PropTypes.func
}

export default Blog;