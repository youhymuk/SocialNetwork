import React, { useEffect } from 'react';
import css from './Header.module.scss';
import logo from '../../logo.svg';
import { connect } from 'react-redux';
import { getAuthUserData, logOut } from '../../redux/thunks/';

const Header = ({ isAuthorized, login, getAuthUserData, logOut }) => {
    useEffect(() => {
        getAuthUserData();
    }, [isAuthorized]);
    return (
        <div className={css.header}>
            <img className={css.logo} src={logo} alt="" />
            {isAuthorized ? (
                <div>
                    {login} - <button onClick={logOut}>Logout</button>
                </div>
            ) : (
                <span>Login</span>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        login: state.authorization.login,
        isAuthorized: state.authorization.isAuthorized,
    };
};

export default connect(mapStateToProps, { getAuthUserData, logOut })(Header);
