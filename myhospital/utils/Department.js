import { db, auth } from "../firebase";
import { useDocumentData, useCollectionData } from "react-firebase-hooks/firestore"
import { orderBy, doc, collection, query, addDoc, serverTimestamp } from "firebase/firestore"

export class Department {
    
    constructor(name, deptId){
        this.departmentName = name;
        
        this.waitingCollection = collection(db, `departments/${deptId}/waitingline`), orderBy("position", "asc");
        this.q = query(this.waitingCollection);
        this.w = useCollectionData(this.q)[0];
    }
    

    name(){
        return this.departmentName;
    }
    logwaitinglist(){
        
        console.log(this.w)
    }
    async addTurn(){
        await addDoc(this.waitingCollection, {
            patientName: "",
            patientUid:"",
            patientPhone:"",
            position: this.length

        })
        
    }
    // peek();
    // backtrackFrom(index);
    // push();


    get length(){
        return this.w?.length;
    }

    
}



class Turn {
    constructor() {
        patientName, patientUid,
        position, expDate
    }

    get pname(){
        return this.patientName;
    }
    get puid(){
        return this.patientUid;
    }
    get pposition(){
        return this.position;
    }
    get pexpdate(){
        return this.expDate;
    }
}
