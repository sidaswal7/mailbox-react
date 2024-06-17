
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    receivedMails:[],
    sentMails:[],
    unreadMails:0,
}

const emailSlice = createSlice({
    name:"email",
    initialState,
    reducers: {
        setSentMails(state, action){
            state.sentMails = action.payload
        },
        setReceivedMails(state,action){
            state.receivedMails = action.payload.mailArray;
            state.unreadMails = action.payload.unreadMails
        }
    }
});

export const {setSentMails, setReceivedMails} = emailSlice.actions;

export default emailSlice.reducer;