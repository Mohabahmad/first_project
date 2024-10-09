import React from 'react'
import { Footer, Blog, Possibility, Header, WhatGPT3,Features } from './container';
import { Cta,Brand,Navbar } from './components';
import './App.css'
const app = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            
            <Navbar/>
            <Header/>
            
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <Cta/>
        
        <Blog/>
        <Footer/>
      
    </div>
  )
}

export default app
