import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { useSelector,useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from '../Mail/MailEditor.module.css'
import { deleteReceivedMails, deleteSentMails } from "../../store/EmailSlice";
const MailBody = ()=>{

    const location = useLocation();
    const {mailId} = useParams();
    const sentMails = useSelector(state=>state.emailState.sentMails);
    const receivedMails = useSelector(state=>state.emailState.receivedMails);
    const dispatch = useDispatch();
    const email = useSelector(state=>state.auth.loggedUser);
    const allMails = [...sentMails, ...receivedMails];
    const history = useHistory()
    const selectedMail = allMails.find((m) => m.id === mailId)
    console.log("hi mailbody")
    const handleDeleteMail = async ()=>{
        if(location.pathname.includes('inbox')){
            const response = await fetch(`https://mymail-app-default-rtdb.firebaseio.com/${email.replace('.','')}/receivedMails/${mailId}.json`,{
                method: 'DELETE',
            });
            if(response.ok){
                
                history.replace("/inbox")
                setTimeout(()=>{dispatch(deleteReceivedMails(mailId))},0)
                ;
            }
        }
        if(location.pathname.includes('sent')){
            const response = await fetch(`https://mymail-app-default-rtdb.firebaseio.com/${email.replace('.','')}/sentMails/${mailId}.json`,{
                method: 'DELETE',
            });
            if(response.ok){
                
                history.replace("/sent")
                setTimeout(()=>{dispatch(deleteSentMails(mailId))},0)
                
            }
        }
    }
    return(
        <section className="flex justify-center items-center mt-10">
            <div className="flex">
                <div>
                    <h4 className="mb-6"><span className="text-sm font-semibold mr-5">Subject:</span>{selectedMail.mail.subject}</h4>
                    <p className="text-sm mb-10">{location.pathname.includes('inbox') ? `From:<${selectedMail.mail.from}>`: `To:<${selectedMail.mail.to}>`}</p>
                    <Editor
                        editorClassName={styles.editor}
                        initialContentState={selectedMail.mail.content}
                        readOnly
                        toolbarHidden
                        />
                </div>
                <div>
                    <button onClick={handleDeleteMail} className="bg-red-500 py-1 px-2 text-white text-sm rounded shadow">Delete</button>
                </div>
            </div>
        </section>
    )
}

export default MailBody;