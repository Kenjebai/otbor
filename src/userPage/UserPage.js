import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, changeInput } from "../store/userSlice";
import User from "../components/User";

function UserPage(){

    const dispatch = useDispatch()

    const { users, inputValue } = useSelector(state => state.usersReducer)

    const changeInputFunc = (event) => {
        dispatch(changeInput(event.target.value))
    }

    const addUserFunc = () => {
        dispatch(addUsers(inputValue))
    }

    return(
        <div>
            <h1>To-Do List</h1>
            <input value={inputValue} onChange={changeInputFunc} />
            <button onClick={addUserFunc}>add user</button>
            <p>Tasks</p>
            {users.map(user => <User name={user} /> )}
        </div>
    )
}

export default UserPage