import React, { Fragment, useEffect, useRef, useState } from "react";
import "./App.css";
// import Title from './title/title'
import Head from "./head/head";
import Nav from "./header/menu/menu";
import Header from "./header/header";
import Section from "./section/section";

function App() {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Head />
      <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
        <Header />
        <Section />
      </div>
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
