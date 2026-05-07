import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Skill from "../pages/Skill";
import Contact from "../pages/Contact";
import Project from "../pages/Project";
import Blog from "../pages/Blog";
const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "skill",
        element: <Skill />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default AppRoutes;
