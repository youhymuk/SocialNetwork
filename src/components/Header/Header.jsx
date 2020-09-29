import React, {useEffect} from "react"
import css from './Header.module.scss'
import logo from '../../logo.svg'
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/reducers/authReducer";

const Header = (props) => {
  useEffect(
    () => {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then(response => {
          if(response.data.resultCode === 0) {
            const {email, id, login} = response.data.data
            props.setAuthUserData(email, id, login)
          }
        })
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

export default connect(mapStateToProps, {setAuthUserData})(Header)