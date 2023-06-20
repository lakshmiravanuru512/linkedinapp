import { fireEvent } from "@testing-library/react";
import { Firestore } from "firebase/firestore";
import {addDoc,collection} from "firebase/firestore"
import { firestore } from "../firebaseConfig";


let dbRef=collection(firestore,"posts");
export const postStatus=(status)=>{
    let object={
        status:status,
    };
    addDoc(dbRef,object)
    .then((res)=>{
        console.log("Document has been added successfully")
    }).catch((err)=>
    console.log(err));
}