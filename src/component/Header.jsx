import React from "react";
import h from "./Header.module.css";

const Header = () => {
  return (
    <header className={h.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png"
        alt="description "
      />
    </header>
  );
};

export default Header;
