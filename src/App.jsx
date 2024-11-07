
import './App.css'

import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import Bookmarks from './components/bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
  const [bookmarks, setBookmarks] = useState([])

  function addToBookMark(blog) {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);

  }

  const [readtime, setReadtime] = useState(0)
  function handleReadTime(time) {
    setReadtime(readtime + time)
  }
  return (
    <>
      <div className='mx-4'>
        <Header></Header>
        <div className='flex py-2 gap-2'>
          <Blogs handleAddToBookmark={addToBookMark} handleReadTime={handleReadTime}></Blogs>
          <Bookmarks bookmarks={bookmarks} readtime={readtime}></Bookmarks>
        </div>

      </div>


    </>
  )
}

export default App
