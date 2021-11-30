import React, {useEffect, useState} from "react"

const ProfileStatus = ({status, updateStatus, isOwner}) => {
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState(status)

    useEffect(() => {
        setValue(status)
    }, [status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatus(value)
    }

    return (
        <>
            {
                editMode
                    ? <input
                         type="text"
                         value={value}
                         autoFocus={true}
                         onBlur={deactivateEditMode}
                         onChange={(e) => setValue(e.target.value)}
                    />
                    : <span onDoubleClick={() => isOwner && activateEditMode()}>
                        {!status ? 'Your status' : status}
                      </span>
            }
        </>
    )
}

export default ProfileStatus;
