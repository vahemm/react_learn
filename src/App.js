import React from "react";
import "./App.css";
import Header from "./component/Header";
import NavBar from "./component/Navbar";
import Profile from "./component/Profile";

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
};

export default App;
