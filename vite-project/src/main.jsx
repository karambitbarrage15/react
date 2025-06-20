//import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx'

function MyApp()
{
    return(
        <div>
           <h1>Custom App</h1> 
        </div>
    )
}
/*
const ReacElement={
    type:'a',
    props:{
      href:'https://google.com',
      target:'_blank'
    },
    children:'Click me to visit Google'
  }*/
  const anotherElement=(
    <a href="https://google.com" target="_blank">Click me to Visit Google</a>
  )
  const anotherUsername="chai aur react"
  const reactElement=React.createElement(
    'a',
    {
        href:"https://google.com",
        target:"_blank"
    },
        "click me to visit to google",
        anotherUsername
        //EVALUATED JS EXPREESSION

    
  ); 
ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
   // <MyApp />
 //ReacElement//custom render not written 

)

