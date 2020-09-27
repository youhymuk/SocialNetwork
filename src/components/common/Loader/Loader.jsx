import React from "react"
import css from './loaders.module.scss'

const Loader = (props) => {
  return (
    <div className={css.roller}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
export default Loader