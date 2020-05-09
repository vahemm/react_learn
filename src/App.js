import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import NavBar from "./component/Navbar/Navbar";
import Profile from "./component/Content/Profile/Profile";
import Dialogs from "./component/Content/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route component={Profile} path={"/profile"}/>
                    <Route component={Dialogs} path={"/dialogs"}/>
                </div>

            </div>
        </BrowserRouter>
    );
};

export default App;
