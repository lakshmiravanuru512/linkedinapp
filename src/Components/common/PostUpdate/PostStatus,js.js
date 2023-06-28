import React,{useMemo, useState} from 'react';
import ModalComponent from '../Modal/Modal';
import { postStatus,getStatus} from '../../../Api/FirestoreAPI';
import { PostsCard } from '../PostCard/PostsCard';
import { getCurrentTimeStamp } from '../../../helpers/useMoment';

export const PostStatus = () => {
  let userEmail=localStorage.getItem("userEmail");
  const [modalOpen, setModalOpen] = useState(false);
  const[status, setStatus]=useState("");
  const [allStatuses, setAllStatuses]=useState([]);
  const sendStatus=async ()=>{
    let object= {
      status: status,
      timestamp:getCurrentTimeStamp("LLL")
    }
    await postStatus(object);
    await setModalOpen(false);
    await setStatus("");
    
  }
 
  useMemo(()=>{
    getStatus(setAllStatuses);
  },[]);
 
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
        <div>
        {allStatuses.map((post)=>{
          return (
            
           
           <PostsCard post={post}/>
           
          )
        })}
      </div>    
        </div>
   
  )
}
