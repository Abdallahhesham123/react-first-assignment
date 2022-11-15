import "./App.css";

import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Portfolio from "./components/Portofolio/Portfolio";
import Recipes from './components/Recipes/Recipes';
import Profile from "./components/Profile/Profile";
import Login from "./components/login/Login";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "login", element: <Login/> },
        { path: "about", element: <About /> },
        { path: "contact", element:
        <RequireAuth>
        <Contacts /> 
        </RequireAuth>
      },
        { path: "recipes", element: 

        <RequireAuth>
        <Recipes/> 
        </RequireAuth>
      
      
      }, 
        { path: "portofolio", element: <Portfolio /> },
        { path: "profile", element:
        
        <RequireAuth>
        <Profile />
         </RequireAuth>},
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}>
        <Layout />
      </RouterProvider>
    </>
  );
}

export default App;
