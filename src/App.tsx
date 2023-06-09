import "./App.css";
import CookieButton from "./button/CookieButton";
import React from "react";
import ReactGA from "react-ga";
import Cookies from "universal-cookie";
import { v4 as uuidv4 } from "uuid";

function App() {
  let [cookiesCount, setCookiesCount] = React.useState(0);
  let cookies = new Cookies();

  let [analytics, setAnalytics] = React.useState(false);

  React.useEffect(() => {
    setCookiesCount(Object.keys(cookies.getAll()).length);
  });

  return (
    <div className="App">
      <p className="warning">WARNING: This website uses cookies!</p>
      <CookieButton
        addCookie={() => {
          cookies.set(uuidv4(), uuidv4(), {
            path: "/",
            maxAge: 60 * 60 * 24 * 183,
            sameSite: "none",
          });
          setCookiesCount(++cookiesCount);
        }}
        google={false}
      />
      <h1>Your cookies: {cookiesCount}</h1>
      {!analytics ? (
        <div className="analytics-cookie-box">
          <CookieButton
            addCookie={() => {
              ReactGA.initialize('G-B688DBNFZT');
              ReactGA.pageview(window.location.pathname + window.location.search);
              setCookiesCount(++cookiesCount);
              setAnalytics(true);
            }}
            google={true}
          />
          <i>↑ Add analytics</i>
        </div>
      ) : null}
    </div>
  );
}

export default App;
