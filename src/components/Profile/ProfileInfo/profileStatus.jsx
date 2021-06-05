import React, {useState} from "react"

export const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deActivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  return (
    <>
      {
        !editMode
        ? <span onClick={() => activateEditMode()}>
            {!props.status ? 'Your status' : props.status}
      </span>
        : <input type="text"
                 value={status}
                 autoFocus={true}
                 onBlur={() => deActivateEditMode()}
                 onChange={(e) => setStatus(e.target.value)}
          />
      }
    </>
  )
}