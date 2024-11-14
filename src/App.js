import React from 'react'; // Optional: if you have global styles for your app
import Login from './login.js';  // Adjust the path if Login.js is in a different folder
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './home.js';
import SignUp from './SignUp.js';
import MarketingGraph from './MarketingGraph.js';


function App() {
  const route=createBrowserRouter([
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/',
      element:<Login/>
    },
    {
      path:"/signup",
      element:<SignUp/>
    },
    {
      path:"/GetStarted",
      element:<MarketingGraph/>

    }
  ])
    return (
        <div><RouterProvider router={route}></RouterProvider></div>
    );
}

export default App;