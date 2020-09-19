import React from 'react'
import css from './Dialogs.module.scss'
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
                {
                    props.messages.map(
                        message => <Message messageBody={message.messageBody}/>
                    )
                }
            </ul>
        </div>
    )
}
export default Dialogs