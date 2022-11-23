import { db } from "../firebase";
import { useDocumentData, useCollectionData, useCollection } from "react-firebase-hooks/firestore"
import { orderBy, doc, collection, 
    query, addDoc, serverTimestamp,
    deleteDoc, setDoc, runTransaction,
    updateDoc
} 
from "firebase/firestore";
import styles from "../styles/OverallActivity.module.css"
import ActivityBar from "./Department/ActivityBar";

export default function OverallActivity(){

    let [ snapshot ] = useCollection(collection(db,"departments"));
    const departments = snapshot?.docs.map( doc => ({ id: doc.id, ...doc.data() }))
    


    const allReceptions = [];
    let [csnap] = useCollection(collection(db, `departments/Cardiology/reception`))
    let c = csnap?.docs.map( doc => ({ id: doc.id, ...doc.data() }))
    allReceptions.push(c)

    let [esnap] = useCollection(collection(db, `departments/Emergency/reception`))
    let e = esnap?.docs.map( doc => ({ id: doc.id, ...doc.data() }))
    allReceptions.push(e)

    let [psnap] = useCollection(collection(db, `departments/Pulmonology/reception`))
    let p = psnap?.docs.map( doc => ({ id: doc.id, ...doc.data() }))
    allReceptions.push(p)

    let [rsnap] = useCollection(collection(db, `departments/Radiology/reception`))
    let r = rsnap?.docs.map( doc => ({ id: doc.id, ...doc.data() }))
    allReceptions.push(r)

    
    const overallBars =  () => 
        allReceptions?.map((arr, index) => {

            let capacity = 0;
            let name = "";
            
            if(departments){
                capacity = departments[index].capacity;
                name = departments[index].id;
            
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
            <div className={styles.barStats}>
                {
                    overallBars()
                }
                
            </div>
        </div>
    )
}