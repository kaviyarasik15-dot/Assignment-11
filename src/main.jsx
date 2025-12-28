import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import  RouterApp from "./router/RouterApp.jsx";
import HomePage from './pages/HomePage.jsx';
import Navbar from "./components/Navbar.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <main>
    <Navbar/>
    <RouterProvider router={RouterApp} />
    </main>
  </StrictMode>
);
