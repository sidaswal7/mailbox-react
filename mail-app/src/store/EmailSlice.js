
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
            state.sentMails = action.payload;    
        },
        setReceivedMails(state,action){
            state.receivedMails = action.payload.mailData;
            state.unreadMails = action.payload.unreadMails
        },
        markAsRead(state,action){
            const updatedMails = state.receivedMails.map((m)=>{
                if(m.id === action.payload){
                    m.mail.read = true;
                }
                return m
            });
            state.receivedMails = updatedMails;
            state.unreadMails = state.unreadMails -1;
        },
        deleteSentMails(state, action) {
            const updatedMails = state.sentMails.filter(
              (m) => m.id !== action.payload
            );
            state.sentMails = updatedMails;
          },
      
        deleteReceivedMails(state, action) {
            const updatedMails = state.receivedMails.filter(
              (m) => m.id !== action.payload
            );
            state.receivedMails = updatedMails;
        }
    }
});

export const {setSentMails, setReceivedMails, markAsRead, deleteReceivedMails, deleteSentMails} = emailSlice.actions;

export default emailSlice.reducer;