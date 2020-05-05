import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import NavBar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
};

export default App;
