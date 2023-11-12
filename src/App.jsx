import { createContext, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Test from './components/Test';
import Books from './components/Books';
import { ChakraProvider } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Home from './pages/Home';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './pages/About';
import Post from './pages/Post';
import Details from './pages/Details';
import Login from './pages/Login';
import { googleLogout } from '@react-oauth/google';

export const UserContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('TEST');
  // console.log(name);

  const navigate = useNavigate();

  useEffect(() => {
    console.log('component muncul');
    const timeout = clearTimeout(() => {}, 10000);
    return () => {
      console.log('component destroyed');
      clearTimeout(timeout);
    };
  }, [count]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const user = { name: 'john' };

  return (
    <ChakraProvider>
      <button
        onClick={() => {
          localStorage.setItem('login', true);
          setIsAuthenticated(true);
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          localStorage.setItem('login', false);
          setIsAuthenticated(false);
          googleLogout();
        }}
      >
        Logout
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/post" element={<Post />} />
        <Route exact path="/post/:id" element={<Details />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
