import React from 'react';
import './blog.css';
import { Article } from '../../components';
import {blog01,blog02,blog03,blog04,blog05} from './import'
const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, 
        We are blogging about it.</h1>

      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
      <Article  imgUrl={blog01} data="OCT 13,2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
        <Article imgUrl={blog02} data="OCT 13,2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog03} data="OCT 13,2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog04} data="OCT 13,2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog05} data="OCT 13,2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div> 
  

      </div>
    </div>
  )
}

export default Blog
