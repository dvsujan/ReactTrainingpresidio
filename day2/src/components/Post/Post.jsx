import React from 'react'
import './post.css'; 
import PostDetails from '../PostDetails/PostDetails';

const Post = (props) => {
  console.log(props.isAuthor); 
  return (
    <div className='post-container'>
      <h1>{props.PostData.title??props.PostData.title}</h1>
      <p>{props.PostData.body??props.PostData.body}</p>
      <PostDetails details={props.PostData} isAuthor ={props.isAuthor}/>
    </div>
  )
}

export default Post