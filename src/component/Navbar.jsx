import React from "react";
import n from "./Navbar.module.css";

const NavBar = () => {
  return (
    <nav className={n.nav}>
      <div className={`${n.item} ${n.active}`}>
        <a>Profile</a>
      </div>
      <div className={n.item}>
        <a>Messages</a>
      </div>
      <div className={n.item}>
        <a>News</a>
      </div>
      <div className={n.item}>
        <a>Music</a>
      </div>
      <div className={n.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default NavBar;
