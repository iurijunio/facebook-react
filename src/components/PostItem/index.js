import React from 'react';
import Comment from '../Comment';
import './styles.css';

function PostItem({ data }) {
   return (
      <div className="post-container">
         <div className="user-pub-data">
            <img src={data.author.avatar} />
            <div>
               <p>{data.author.name}</p>
               <span>{data.date}</span>
            </div>
         </div>
         <p className="post-content">{data.content}</p>
         {data.comments.length > 0 && <div className="divisor"></div>}
         {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
      </div>
   )
}

export default PostItem;
