
const Blog = ({ blog }) => {
    const { title, cover_img, author_img, author_name, post_date, hashtags, readtime } = blog
    console.log(blog)
    console.log(cover_img)
    return (
        <div className="p-2 border-b-2 rounded-md my-2 space-y-3">
            <img className="rounded-lg" src={cover_img} alt={`cover photo: ${title}`} />
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
                <div>
                    <h3>{readtime} min read</h3>
                </div>
            </div>

            {/* post title */}
            <h1 className="text-3xl font-bold">{title}</h1>

            <p>{hashtags.map((hash, index) => <span className="text-gray-500" key={index}> {hash} </span>)}</p>
            <a href="">Mark as read</a>
        </div>
    );
};

export default Blog;