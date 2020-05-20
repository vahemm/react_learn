import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import NavBar from "./component/Navbar/Navbar";
import Profile from "./component/Content/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContenier from "./component/Content/Dialogs/DialogsContenier";
import UsersContenier from "./component/Content/Users/UsersContenier";

const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route render={() => <Profile/>}
                       path={"/profile"}/>
                <Route render={() => <DialogsContenier/>}
                       path={"/dialogs"}/>
                <Route render={() => <UsersContenier/>}
                       path={"/users"}/>
            </div>
        </div>
    );
};

export default App;
