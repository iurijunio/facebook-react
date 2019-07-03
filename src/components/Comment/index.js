import React from 'react';
import './styles.css';

function Comment({ data }) {
   return (
      <div className="comment-container">
         <img src={data.author.avatar} />
         <p><strong>{data.author.name}</strong> {data.content}</p>
      </div>
   )
}

export default Comment;