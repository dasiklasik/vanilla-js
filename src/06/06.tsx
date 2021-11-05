import React from "react";

export const User = () => {

    const deleteUser = () => {
        alert('user should be deleted')
    }

    const addUser = () => {
        alert('user should be added')
    }

    const onNameChange = () => {
        console.log('name changed')
    }



    return (
        <div>
            <textarea onChange={onNameChange} onBlur={() => alert('we lost it!')}>Dasha</textarea>
            <button onClick={deleteUser}>Del</button>
            <button onClick={addUser}>Save</button>
        </div>
    )
}