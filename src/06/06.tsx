import React from "react";

export const User = () => {

    const deleteUser = () => {
        alert('user should be deleted')
    }

    const addUser = () => {
        alert('user should be added')
    }

    return (
        <div>
            Dasha
            <button onClick={deleteUser}>Del</button>
            <button onClick={addUser}>Save</button>
        </div>
    )
}