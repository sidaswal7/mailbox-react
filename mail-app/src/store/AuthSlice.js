import { createSlice } from "@reduxjs/toolkit";


const inititalAuthState = {
    jwtToken: localStorage.getItem('jwtToken'),
    isLoggedIn: !!localStorage.getItem('jwtToken'),
    loggedUser: localStorage.getItem('loggedUser')
}
const authSlice = createSlice({
    name:'auth',
    initialState:inititalAuthState,
    reducers:{
        login(state,action){
            console.log(action.payload)
            state.isLoggedIn = true;
            state.jwtToken = action.payload.jwtToken;
            state.loggedUser = action.payload.loggedUser;
            localStorage.setItem('jwtToken', action.payload.jwtToken)
            localStorage.setItem('loggedUser',action.payload.loggedUser)
        },
        logout(state){
            console.log(state)
            localStorage.removeItem('jwtToken')
            localStorage.removeItem('loggedUser')
            state.isLoggedIn = false;
            state.jwtToken = null;
            state.loggedUser = null;
        }
    }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;