import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsersDel } from "../store/userSlice";

function User({name}){

    const dispatch = useDispatch()

    const { users } = useSelector(state => state.usersReducer)

    const deleteName = () => {
        dispatch(addUsersDel(users))
    }

    return(
        <p>{name}<button onClick={deleteName} >Delete</button></p>
    )
}

export default User