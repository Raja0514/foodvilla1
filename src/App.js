import React, { Children } from "react";

import ReactDOM from "react-dom/client";

import About from "./components/About";

import Error from "./components/Error";

import Contact from "./components/Contact";

import Cart from "./components/Cart";

import * as raja from "./components/Header.js";

import Body from "./components/Body.js";

import Footer from "./components/Footer.js";

import RestaMenu from "./components/RestaMenu";



import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <raja.Header />
      <Outlet />
      <Footer></Footer>
    </>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <App />,

    children: [
      { path: "/about", element: <About /> },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/restamenu/:id",
        element: <RestaMenu/>,
      },

      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);

export default App;