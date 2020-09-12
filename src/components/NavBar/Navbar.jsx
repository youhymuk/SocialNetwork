import React from 'react'
import css from './Navbar.module.scss'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
    return (
        <aside className={css.aside}>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/profile' className={css.nav__item} activeClassName={css.active}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dialogs' className={css.nav__item} activeClassName={css.active}>Dialogs</NavLink>
                    </li>
                    <li>
                        <NavLink to='/users' className={css.nav__item} activeClassName={css.active}>Users</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
export default Navbar