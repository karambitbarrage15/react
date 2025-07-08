import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { useLoaderData } from 'react-router'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from 'react-router'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact/contact.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader}
from './components/Github/github.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
       <Route path='' element={<Home />}></Route> 
      <Route path='about' element={<About />}></Route> 
       <Route path='contact' element={<Contact />}></Route>
      <Route path='user/:userid' element={<User />}></Route>
      
      <Route loader={githubInfoLoader} path='github' element={<Github />}></Route>
    </Route>
  )
);
// const router=createBrowserRouter([
//  { path:'/',
//   element:<Layout />,
//   children:[
//     {path:"",
//       element:<Home />

//     },
//     {path:"about",
//       element:<About />},
//       {path:"contact",
//         element:<Contact />
//       }
//   ]

//  }
// ]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
