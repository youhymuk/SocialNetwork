import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Router} from "./routes";
import {initializeApp} from "./redux/thunks/appThunk";
import {selectAppIsInitialized} from "./redux/selectors";

import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import Loader from "./components/common/Loader/Loader";

import './App.scss';

const App = (props) => {
    const dispatch = useDispatch();

    const isInitialized = useSelector(selectAppIsInitialized)

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    return isInitialized ? (
    <div className="App">
        <Header />
        <Navbar />
        <div className="content">
            <Router/>
        </div>
    </div>
) : <Loader/>};

export default App;
