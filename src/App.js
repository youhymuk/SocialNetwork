import React from 'react'
import './App.scss'
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import {Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className="content">
                <Route path="/dialogs" render={() => <DialogsContainer messages={props.messages}/>}/>
                <Route path="/profile" render={() => <Profile/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
            </div>
        </div>
    )
}

export default App
