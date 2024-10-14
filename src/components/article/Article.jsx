import React from 'react';
import './article.css';

const Article = ({imgUrl,data, title}) => {
  return (
    <div className='gpt3__blog-container_artical'>
      <div className='gpt3__blog-container_artical-image'>
        <img src={imgUrl} alt="blog" />
      </div>
      <div className='gpt3__blog-container_artical-content'>
        <div>
          <p>{data}</p>
          <h3>{title}</h3>
        </div>
        <p> Read Full Artical</p>
      </div>
      
    </div>
  )
}

export default Article
