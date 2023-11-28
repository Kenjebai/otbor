import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users: [],
        inputValue: ''
    },
    reducers: {
        changeInput: (state, action) => {
            state.inputValue = action.payload
        },
        addUsers: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        addUsersDel: (state, action) => {
            state.users = []
        }
    }
})

export const{ changeInput, addUsers, addUsersDel } = userSlice.actions
export default userSlice.reducer