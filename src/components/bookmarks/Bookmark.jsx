import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {

    const { title } = bookmark
    return (
        <div className='bg-gray-400'>
            <div className='bg-gray-100 rounded-md p-2 m-3'>
                <h3>{title}</h3>
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
};

export default Bookmark;