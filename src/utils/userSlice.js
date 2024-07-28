import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null,
        userInfo:null,
    
    },
    
    reducers: {

        addUser: (state, action)=>{
            state.user = action.payload;
        },

        addUserInfo: (state, action)=>{
            state.userInfo = action.payload;
        },
     
        removeUser: (state)=>{
            state.user = null
            state.userInfo=null
        },

    }

});

export const {addUser,  removeUser, addUserInfo} = userSlice.actions;

export default userSlice.reducer;