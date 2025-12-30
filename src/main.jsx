import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { RouterProvider } from "react-router";
//import  RouterApp from "./router/RouterApp.jsx";
//import Navbar from "./components/Navbar.jsx";
import Header from './components/Header';
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <main>
    <Header/>
    <ProductList />
      <Footer />
    </main>
  </StrictMode>
);
