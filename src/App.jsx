import { createContext, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Test from './components/Test';
import Books from './components/Books';
import { ChakraProvider } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

export const UserContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('TEST');
  // console.log(name);

  useEffect(() => {
    console.log('component muncul');
    const timeout = clearTimeout(() => {}, 10000);
    return () => {
      console.log('component destroyed');
      clearTimeout(timeout);
    };
  }, [count]);

  const user = { name: 'john' };

  return (
    <ChakraProvider>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card text-test">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className={`${count > 2 ? 'text-red-600' : 'text-white'}`}>
        Click on the Vite and React logos to learn more
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <UserContext.Provider value={user}>
        <Test nama={name} />
      </UserContext.Provider>
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  );
}

export default App;
