import React from "react"
import css from './Posts.module.scss'
import avatar from '../../../user_icon.png'

const PostInput = (props) => {
    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <textarea className={css.postInput} value={props.newPostBody} onChange={(e) => props.updateNewPostBody(e.target.value)}/>
            <button className={css.btn} onClick={props.addPost} type='button'>
                Send
            </button>
        </form>
    )
}

const Post = (props) => {
    return(
        <li className={css.postsItem}>
            <div className={css.postsItem_avatar}>
                <img src={avatar} alt="User avatar"/>
            </div>
            <div className={css.postsItem_content}>
                {props.content}
            </div>
        </li>
    )
}

const Posts = (props) => {
    return(
        <div className={css.posts}>
            <h2>My posts</h2>
            <PostInput updateNewPostBody={props.updateNewPostBody} addPost={props.addPost} newPostBody={props.newPostBody} />
            <ul className={css.postsList}>
                {props.posts.map((post) => <Post content={post.content}/>)}
            </ul>
        </div>
    )
}
export default Posts
