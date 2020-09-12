import React from "react"
import css from './Header.module.scss'
import logo from '../../logo.svg'

const Header = (props) => {
    return (
        <div className={css.header}>
            <img className={css.logo} src={logo} alt=""/>
        </div>
    )
}
export default Header