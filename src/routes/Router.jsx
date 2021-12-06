import {Redirect, Route, Switch} from "react-router-dom";
import DialogsContainer from "../components/Dialogs/DialogsContainer";
import ProfileContainer from "../components/Profile/ProfileContainer";
import UsersContainer from "../components/Users/UsersContainer";
import LoginPage from "../components/Login/LoginPage";
import React from "react";

import {routePaths} from "./index";
import ErrorPage from "../pages/ErrorPage";

const Router = () => (
        <Switch>
            <Route path={routePaths.dialogsPage()} component={DialogsContainer }/>
            <Route path={routePaths.profilePage(':userId?')} component={ProfileContainer}/>
            <Route path={routePaths.usersPage()} component={UsersContainer}/>
            <Route path={routePaths.loginPage()} component={LoginPage}/>
            <Redirect exact from="/" to={routePaths.profilePage()}/>
            <Route path={routePaths.errorPage(':statusCode')} component={ErrorPage} />
            <Redirect to={routePaths.errorPage('404')} />
        </Switch>
)

export default Router;
