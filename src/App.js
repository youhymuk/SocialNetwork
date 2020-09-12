import React from 'react'
import './App.scss'
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/users" component={Users}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
