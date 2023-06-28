import { fireEvent } from "@testing-library/react";
import { Firestore } from "firebase/firestore";
import {addDoc,collection,onSnapshot} from "firebase/firestore"
import { firestore } from "../firebaseConfig";


let dbRef=collection(firestore,"posts");
export const postStatus=(object)=>{
   
    addDoc(dbRef,object)
    .then((res)=>{
        console.log("Document has been added successfully")
    }).catch((err)=>
    console.log(err));
}

export const getStatus=(setAllStatuses)=>{
    onSnapshot(dbRef,(response)=>{
        setAllStatuses(response.docs.map((docs)=>{
            return {...docs.data(),id:docs.id};
        }));
    });
}