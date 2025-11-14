import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './Components/Home/Home.jsx';
import Favorites from './Components/Favorites/Favorites.jsx';
import About from './Components/About/About.jsx';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import { MovieProvider } from "./MovieContext/MovieContext.jsx";

const root = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="about" element={<About/>} >
      </Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieProvider>
      <RouterProvider router={root} />
    </MovieProvider>
  </StrictMode>
);