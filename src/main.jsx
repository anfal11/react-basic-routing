import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import 'tailwindcss/tailwind.css';
import Users from './components/Users/Users';
import ShowDetails from './components/ShowDetails/ShowDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>
      }, 
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>
      },
      {
        path: "/details/:detailsId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.detailsId}`),
        element: <ShowDetails></ShowDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
