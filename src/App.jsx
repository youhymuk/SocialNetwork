import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/LoginPage';

const App = (props) => (
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
);

export default App;
