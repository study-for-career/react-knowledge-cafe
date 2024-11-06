
import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import Bookmarks from './components/bookmarks/Bookmarks';

function App() {


  return (
    <>
      <div className='mx-4'>
        <Header></Header>
        <div className='flex py-2 gap-2'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>

      </div>


    </>
  )
}

export default App
