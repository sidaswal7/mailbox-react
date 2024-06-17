import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setReceivedMails } from "../../store/EmailSlice";
import MailList from "./MailList";

const ReceivedMail = ()=>{

    const email = useSelector(state=>state.auth.loggedUser)
    const receivedMails = useSelector(state=>state.emailState.receivedMails)
    const dispatch = useDispatch();
    const fetchMail = async()=>{
        const response = await fetch(`https://mymail-app-default-rtdb.firebaseio.com/${email.replace('.','')}/receivedMails.json`);
        const data = await response.json();
        console.log(data,"this is data")
        const mailData = [];
        let unreadMails = 0;
        for(let key in data){
            const content = data[key].content;
            if(!content.entityMap) content.entityMap = {};
            content.blocks.map((c) => {
                if (!c.data) c.data = {};
                if (!c.entityRanges) c.entityRanges = [];
                if (!c.inlineStyleRanges) c.inlineStyleRanges = [];
                return c;
            });
            if(data[key].read === false) unreadMails = unreadMails+1;

            mailData.push({
                id:key,
                mail:data[key],
            });
        }
        dispatch(setReceivedMails({mailData,unreadMails}))
        
    }
    useEffect(()=>{
        fetchMail()
    },[email])

    let content = <h1 className="text-2xl font-bold text-slate-800 text-center mt-20">No message to show.</h1>

    if(receivedMails.length>0){
        content = (
            <ul>
                {receivedMails.map((m)=>{
                    return <MailList key={m.id} id={m.id} mail={m.mail} label="From: "/>
                })}
            </ul>
        )
    }
    return(
        <section>
            {content}
        </section>
        
        
    )
}
export default ReceivedMail;