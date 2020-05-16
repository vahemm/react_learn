import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import NavBar from "./component/Navbar/Navbar";
import Profile from "./component/Content/Profile/Profile";
import Dialogs from "./component/Content/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route render={() => <Profile state={props.state.profilePage}
                                              dispatch={props.dispatch}
                />}
                       path={"/profile"}/>
                <Route render={() => <Dialogs state={props.state.dialogPage}
                                              dispatch={props.dispatch}
                />} path={"/dialogs"}/>
            </div>
        </div>
    );
};

export default App;
