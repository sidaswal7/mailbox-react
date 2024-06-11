import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import MailEditor from "./MailEditor";
const ComposeMail = ()=>{

    const email = useSelector((state)=>state.auth.loggedUser);
    const toMailRef = useRef();
    const subjectRef = useRef();
    const history = useHistory();
    let mailBody;
    const handleDoneEditing = (mailContent)=>{
        mailBody = mailContent;
    }
    const sendEmailHandler = (event)=>{
        event.preventDefault();
        const mailDetails = {
            from: email,
            to: toMailRef.current.value,
            subject: subjectRef.current.value,
            body: mailBody,
          };
      
          async function sendMail() {
            const response = await fetch(
              'https://mail-app-4636b-default-rtdb.firebaseio.com/mails.json',
              {
                method: 'POST',
                body: JSON.stringify(mailDetails),
              }
            );
      
            const data = await response.json();
            console.log(response);
            console.log(data);
          }
      
          sendMail();

    }


    return(
        <div className="flex justify-center mt-10">
        <div className="w-8/12 shadow-md px-6">
            <div className="flex justify-between mb-4 items-center">
                <h2 className="text-2xl font-semibold text-slate-700 capitalize">Compose a new mail</h2>
                <button className="text-red-500 text-3xl font-bold" onClick={()=> history.replace('/home')}>&times;</button>
            </div>
            <form onSubmit={sendEmailHandler} className="py-2 px-4">
                <div className="flex mb-5">
                    <label htmlFor="" className="font-bold text-slate-700 basis-1/12">From: </label>
                    <input className="border border-slate-400 px-2 rounded-sm w-full basis-11/12" defaultValue={email}/>
                </div>
                <div className="flex mb-5">
                    <label className="font-bold text-slate-700 basis-1/12">To: </label>
                    <input className="border border-slate-400 px-2 rounded-sm w-full basis-11/12"/>
                </div>
                <div className="flex mb-5">
                    <label className="font-bold text-slate-700 basis-1/12">Subject: </label>
                    <input className="border border-slate-400 px-2 rounded-sm w-full basis-11/12"/>
                </div>
                <MailEditor onDoneEditing = {handleDoneEditing}/>
                <div className="flex justify-center mt-6">
                    <button type="submit" className="text-white bg-orange-500 hover:bg-orange-600 px-5 py-1 rounded shadow-md w-52">Send</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default ComposeMail;