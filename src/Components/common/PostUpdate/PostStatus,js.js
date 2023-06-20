import React,{useState} from 'react';
import ModalComponent from '../Modal/Modal';
import { postStatus } from '../../../Api/FirestoreAPI';

export const PostStatus = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const[status, setStatus]=useState("");
  const sendStatus=()=>{
    postStatus(status);
  }
  return (
    <div className='post-status-main'>
         <div className='post-status'>
          <button className='open-post-modal' onClick={()=>setModalOpen(true)} > Start a post</button>
        </div>
        <ModalComponent
         modalOpen={modalOpen} 
         setModalOpen={setModalOpen}
         status={status}
         setStatus={setStatus}
         sendStatus={sendStatus}/>
        </div>
   
  )
}
