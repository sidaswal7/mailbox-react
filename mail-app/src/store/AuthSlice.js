import { createSlice } from "@reduxjs/toolkit";


const inititalAuthState = {
    jwtToken: localStorage.getItem('jwtToken'),
    isLoggedIn: !!localStorage.getItem('jwtToken'),
}
const authSlice = createSlice({
    name:'auth',
    initialState:inititalAuthState,
    reducers:{
        login(state,action){
            localStorage.setItem('jwtToken', action.payload.jwtToken)
            state.isLoggedIn = true;
            state.jwtToken = action.payload.jwtToken;
        },
        logout(state){
            localStorage.removeItem('jwtToken')
            state.isLoggedIn = false;
            state.jwtToken = null;
        }
    }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;