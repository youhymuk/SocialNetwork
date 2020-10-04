import React, {useEffect} from "react"
import css from './Header.module.scss'
import logo from '../../logo.svg'
import {connect} from "react-redux";
import {authorizeUser} from "../../redux/reducers/authReducer";

const Header = (props) => {
  useEffect(
    () => {
      props.authorizeUser()
    }, []
  )
    return (
        <div className={css.header}>
            <img className={css.logo} src={logo} alt=""/>
          {props.isAuthorized
          ? <span>{props.login}</span>
            : <span>Login</span>
          }
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    login: state.authorization.login,
    isAuthorized: state.authorization.isAuthorized,
  }
}

export default connect(mapStateToProps, {authorizeUser})(Header)