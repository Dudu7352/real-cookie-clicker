import './App.css';
import CookieButton from './button/CookieButton';
import React from 'react';
import Cookies from 'universal-cookie';
import { v4 as uuidv4 } from 'uuid';

function App() {
  let [cookiesCount, setCookiesCount] = React.useState(0);
  let cookies = new Cookies();;

  React.useEffect(() => {
    setCookiesCount(Object.keys(cookies.getAll()).length);
  });

  return (
    <div className='App'>
      <p className='warning'>WARNING: This website uses cookies!</p>
      <CookieButton addCookie={
        () => {
          cookies.set(uuidv4(), uuidv4(), { path: '/', maxAge: 60 * 60 * 24 * 183 });
          setCookiesCount(++cookiesCount);
        }}/>
      <h1>Your cookies: {cookiesCount}</h1>
    </div>
  )
}

export default App
