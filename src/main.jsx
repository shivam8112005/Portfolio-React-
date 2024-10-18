import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
// import Home from './components/Home/Home'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import { githubLoader } from './components/Github/Github.jsx'
const router= createBrowserRouter([
  {
  path: '/',
  element: <Layout/>,
  children: [
    {
      // we have to put this path empty cause firstly we want to show home page
      path: "",
      element: <Home/>
    }, 
    { path:"About",
      element: <About/>
    },
    {
      path:"Contact",
      element: <Contact />
    },
    {
      path: "user/:userid",
      element: <User/>
    },
    {
      // loader:{githubLoader},
      path: "github",
      element: <Github/>
    }
    
  ]

}
]);
// its not working dont know why
// const router=createBrowserRouter([ 
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="About" element={<About/>}/>
//       <Route path="Contact" element={<Contact/>}/>
//     </Route>
//   )
// ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
