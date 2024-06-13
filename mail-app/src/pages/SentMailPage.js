import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SentMailPage = ()=>{
    const email = useSelector(state=>state.auth.loggedUser)
    const [sentMail, setSentMail] = useState([]);
    const fetchMail = async()=>{
        const response = await fetch(`https://mail-app-4636b-default-rtdb.firebaseio.com/mails.json`);
        const data = await response.json();

        const mailData = [];
        for(let key in data){
            if(data[key].from === email){
                mailData.push({
                    id:key,
                    mail:data[key],
                });
            }
        }
        console.log(mailData)
        setSentMail(mailData)
    }
    useEffect(()=>{
        fetchMail()
    },[email])
    return(
        <section>
            <header>
                <h1 className="mt-10 text-4xl mb-6 text-center font-bold">
                    Sent
                </h1>
            </header>   
            <div className="flex justify-center">
                <Link className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-1 cursor-pointer rounded shadow-md" to="/inbox">Inbox</Link>
            </div>
            <div className="flex justify-center mt-10">
                <ul>
                    {sentMail.map((m)=>{
                        return(
                            <li className="my-1 flex" key={m.id}>
                                <div className="mr-4">
                                    <span className="text-slate-800 font-semibold text-sm">From: </span>
                                    <span className="text-sm">{m.mail.from}</span>
                                </div>
                                <div>
                                    <span className="text-slate-800 font-semibold text-sm">Subject: </span>
                                    <span className="text-sm">{m.mail.subject}</span>
                                </div>
                                
                            </li>
                        )
                    })}
                </ul>
            </div>
            
        </section>
        
        
    )
}


export default SentMailPage;