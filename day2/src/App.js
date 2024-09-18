import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data.json'; 
import Post from './components/Post/Post';
import '../src/components/global.css'

// current userId is 123 need to show edit and delete button only for his posts
function App() {
  return (
    <div className='home-container'>
      <h1>Total Posts: {Data.total}</h1>
      {
        Data.posts.map((post, index) => {
          return <Post key={index} PostData={post} isAuthor={post.userId === 123} />
        })
      }
    </div>
  );
}

export default App;
