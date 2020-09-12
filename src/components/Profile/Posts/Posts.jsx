import React from "react"
import css from './Posts.module.scss'

const PostInput = (props) => {
    return(
        <div>
            <textarea className={css.post__input}/>
            <button className={css.btn}>
                Send
            </button>
        </div>
    )
}

const Post = (props) => {
    return(
        <li className={css.posts__item}>
            {props.content}
        </li>
    )
}

const Posts = (props) => {
    return(
        <div className={css.posts}>
            <h2>My posts</h2>
            <PostInput/>
            <ul className={css.posts__list}>
                <Post content='Hi!'/>
                <Post content='How are you?'/>
            </ul>
        </div>
    )
}
export default Posts