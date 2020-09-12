import React from 'react'
import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <ul className={css.dialogs__list}>
                <li className={css.dialogs__item}>
                    <NavLink to='/dima'>
                        Dima
                    </NavLink>
                </li>
                <li className={css.dialogs__item}>
                    <NavLink to='/dima'>
                        Viktor
                    </NavLink>
                </li>
                <li className={css.dialogs__item}>
                    <NavLink to='/dima'>
                        Daria
                    </NavLink>
                </li>
                <li className={css.dialogs__item}>
                    <NavLink to='/dima'>
                        Irina
                    </NavLink>
                </li>
                <li className={css.dialogs__item}>
                    <NavLink to='/dima'>
                        Max
                    </NavLink>
                </li>
            </ul>
            <ul className={css.messages}>
                <Message message='Message1' />
                <Message message='Message2' />
                <Message message='Message3' />
                <Message message='Message4' />
                <Message message='Message5' />
            </ul>
        </div>
    )
}
export default Dialogs