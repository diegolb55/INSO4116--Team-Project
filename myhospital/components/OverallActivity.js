import { db, auth } from "../firebase";
import { useDocumentData, useCollectionData, useCollection } from "react-firebase-hooks/firestore"
import { orderBy, doc, collection, 
    query, addDoc, serverTimestamp,
    deleteDoc, setDoc, runTransaction,
    updateDoc
} 
from "firebase/firestore";
import { getDepartmentId } from "../utils/Department";
import styles from "../styles/OverallActivity.module.css"
import ActivityBar from "./Department/ActivityBar";
// import { getDepartmentId } from "../utils/Department";
import { useState, useEffect } from "react";

export default function OverallActivity(){

    const getDepartmentId = (dName, depts) => {
        let id = depts?.find(({ departmentName }) => departmentName===dName )?.id
        
        return id;
    }
   

    let [ snapshot ] = useCollection(collection(db,"departments"));
    const departments = snapshot?.docs.map( doc => ({ id: doc.id, ...doc.data() }))
    
    const allReceptions = [];

    let id = getDepartmentId("Radiology", departments)
    let [linesnap] = useCollection(collection(db, `departments/${id}/waitingline`))
    let line = linesnap?.docs.map( doc => ({ id: doc.id, ...doc.data() }))

    allReceptions.push(line)

    let eid = getDepartmentId("Emergency", departments)
    let [esnap] = useCollection(collection(db, `departments/${eid}/waitingline`))
    let eline = esnap?.docs.map( doc => ({ id: doc.id, ...doc.data() }))

    allReceptions.push(eline)

    
    const overallBars =  () => 
        allReceptions?.map((arr, index) => {

            let capacity = 0;
            let name = "";
            
            if(departments){
                capacity = departments[index].capacity;
                name = departments[index].departmentName;
            
            }
            

            let activity = (arr?.length / capacity) * 100;

            return (
                <ActivityBar key={Math.random()} 
                    activity={activity} 
                    styles={styles} 
                    name={name} 
                    footer={true}/>
            )
        });

    
   

        
    
    return (
        <div className={styles.infoSection}>
            <h3>Overall Activity</h3>
            <div className={styles.barStats}>
                {
                    overallBars()
                }
                
            </div>
        </div>
    )
}