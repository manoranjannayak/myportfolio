import React, { Fragment, useEffect, useRef, useState } from "react";
import Logo from "./logo/logo";
import "./header.css";
import Menu from "./menu/menu";

function Header() {
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
    // <div className={`header${isSticky ? " sticky" : ""}`} ref={ref}>
      <div className="sticky-inner">
      <div className="container">
        <Logo />
        <Menu />
      </div>
    </div>
  );
}

export default Header;
