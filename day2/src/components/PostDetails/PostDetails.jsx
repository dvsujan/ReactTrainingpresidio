import React from 'react';
import './postdetails.css'; 
import { AiOutlineLike , AiOutlineDislike }  from 'react-icons/ai';
import { FaRegChartBar } from "react-icons/fa";
import EditComponent from '../EditComponent/EditComponent';
const PostDetails = (props) => {
  return (
    <div className='post-details'>
        <div className='post-details-left'>
            <p> <AiOutlineLike/> {props.details.reactions.likes}</p>
            <p> <AiOutlineDislike/> {props.details.reactions.dislikes}</p>
            <p> <FaRegChartBar/> {props.details.views}</p>
        </div>
        <div className='post-details-right'>
            {props.isAuthor && <EditComponent/>}
        </div>
    </div>
  )
}

export default PostDetails