
import PropTypes from "prop-types";
import Bookmark from './Bookmark';
const Bookmarks = ({ bookmarks, readtime }) => {

    return (
        <div className='w-1/3'>
            <div className="bg-violet-200 p-2 my-4 rounded-md">
                <h2 className="w-full">Spent Time on Read: {readtime} min</h2>
            </div>
            <div className="bg-blue-100 p-2 rounded-md">
                <h3>Bookmarks : {bookmarks.length}</h3>
                {
                    bookmarks.map((bookmark, index) => {
                        return <Bookmark
                            key={index}
                            bookmark={bookmark}
                        ></Bookmark>
                    })
                }
            </div>
        </div>

    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object,
    readtime: PropTypes.array
}

export default Bookmarks;