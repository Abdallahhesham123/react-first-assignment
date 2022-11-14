import "./App.css";

import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Portfolio from "./components/Portofolio/Portfolio";
import Recipes from './components/Recipes/Recipes';

function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contacts /> },
        { path: "recipes", element: <Recipes/> }, 
        { path: "portofolio", element: <Portfolio /> },
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
