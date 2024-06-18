import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSentMails } from "../../store/EmailSlice";
import MailList from "./MailList";

const SentMail = ()=>{

    const email = useSelector(state=>state.auth.loggedUser)
    const sentMails = useSelector(state=>state.emailState.sentMails)
    const dispatch = useDispatch();
    const fetchMail = async()=>{
        const response = await fetch(`https://mymail-app-default-rtdb.firebaseio.com/${email.replace('.','')}/sentMails.json`);
        const data = await response.json();
        let maildata = [];
        console.log(data,"this is data")
        for(let key in data){
            const content = data[key].content;
            if(!content.entityMap) content.entityMap = {};
            content.blocks.map((c) => {
                if (!c.data) c.data = {};
                if (!c.entityRanges) c.entityRanges = [];
                if (!c.inlineStyleRanges) c.inlineStyleRanges = [];
                return c;
            });
            maildata.push({mail:data[key], id:key})
        }
        dispatch(setSentMails(maildata))
       
        
    }
    useEffect(()=>{
        fetchMail()
    },[email])

    let content = <h1 className="text-2xl font-bold text-slate-800 text-center mt-20">No message to show.</h1>

    if(sentMails.length>0){
        content = (
            <ul>
                {sentMails.map((m)=>{
                    return <MailList key={m.id} id={m.id} mail={m.mail} label="To:" to={`/sent/${m.id}`}/>
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
export default SentMail;