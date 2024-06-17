import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import MailEditor from "./MailEditor";
const ComposeMail = ()=>{

    const email = useSelector((state)=>state.auth.loggedUser);
    const [isValid, setIsValid] = useState(true);
    const toMailRef = useRef();
    const subjectRef = useRef();
    const history = useHistory();
    let content;
    const handleDoneEditing = (mailContent)=>{
        content = mailContent.content;
    }
    const handleToMailChange = ()=>{
        setIsValid(true);
    }

    const sendEmailHandler = (event)=>{
        console.log("form submit")
        event.preventDefault();
        const enteredToMail = toMailRef.current.value;
        const enteredSubject = subjectRef.current.value;
        if(!enteredToMail || !enteredSubject){
            setIsValid(false);
            return;
        }
        if(!enteredToMail.includes('@')){
            setIsValid(false);
            return;
        }
        const mailDetails = {
            from: email,
            to: enteredToMail,
            subject: enteredSubject,
            content: content,
          };
      
          async function sendMail() {
            const response = await fetch(
              `https://mymail-app-default-rtdb.firebaseio.com/${email.replace('.','')}/sentMails.json`,
              {
                method: 'POST',
                body: JSON.stringify(mailDetails),
              }
            );
            if(response.ok){
                history.replace("/sent")
                await fetch(`https://mymail-app-default-rtdb.firebaseio.com/${enteredToMail.replace('.','')}/receivedMails.json`,{
                    method: 'POST',
                    body: JSON.stringify({...mailDetails, read:false})
                })
            }
            
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
                    <input className={`border border-slate-400 px-2 rounded-sm w-full basis-11/12`} onChange={handleToMailChange} ref={toMailRef}/>
                </div>
                <div className="flex mb-5">
                    <label className="font-bold text-slate-700 basis-1/12">Subject: </label>
                    <input className={`border border-slate-400 px-2 rounded-sm w-full basis-11/12`} ref={subjectRef}/>
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