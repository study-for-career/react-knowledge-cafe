import profileImage from '../../assets/images/boy1.png';

const Header = () => {
    return (
        <div className='flex justify-between items-center py-2 border-b-2'>
            <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
            <img className='w-14' src={profileImage} alt="" />
        </div>
    );
};

export default Header;