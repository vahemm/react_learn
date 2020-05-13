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
                <Route render={() => <Profile posts={props.state.profilePage.posts}
                                              addPost={props.addPost}
                                              newText={props.state.newText}
                                              addText={props.addText}/>}
                       path={"/profile"}/>
                <Route component={() => <Dialogs items={props.state.dialogPage.items} messages={props.state.dialogPage.messages}/>} path={"/dialogs"}/>
            </div>

        </div>

    );
};

export default App;
