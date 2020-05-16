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
                <Route render={() => <Profile state={props.state}
                                              dispatch={props.dispatch}
                />}
                       path={"/profile"}/>
                <Route render={() => <Dialogs items={props.state.dialogPage.items}
                                              messages={props.state.dialogPage}
                                              dispatch={props.dispatch}
                                              action={props.action}
                />} path={"/dialogs"}/>
            </div>

        </div>

    );
};

export default App;
