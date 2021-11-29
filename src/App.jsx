import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import {initializeApp} from "./redux/thunks/appThunk";
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/LoginPage';
import Loader from "./components/common/Loader/Loader";

import './App.scss';

const App = (props) => {
    const dispatch = useDispatch();
    const {isInitialized} = useSelector(({app}) => app)

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    return isInitialized ? (
    <div className="App">
        <Header />
        <Navbar />
        <div className="content">
            <Route path="/dialogs" render={() => <DialogsContainer messages={props.messages} />} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <LoginPage />} />
        </div>
    </div>
) : <Loader/>};

export default App;
