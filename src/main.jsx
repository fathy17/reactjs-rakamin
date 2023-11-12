import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Post from './pages/Post.jsx';
import Details from './pages/Details.jsx';
import axios from 'axios';
import { GoogleOAuthProvider } from '@react-oauth/google';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        exact
        path="/post"
        element={<Post />}
        loader={async () => {
          try {
            const data = await axios('https://dummyjson.com/posts');
            console.log(data);
            return data.data.posts;
          } catch (error) {
            console.log(error);
          }
        }}
      />
      <Route exact path="/post/:id" element={<Details />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="474109136574-vh6pk4ff8la227e2f3bhn2j08mgvrkj5.apps.googleusercontent.com">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
);
