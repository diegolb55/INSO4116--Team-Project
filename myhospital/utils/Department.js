import { db, auth } from "../firebase";
import { useDocumentData, useCollectionData, useCollection } from "react-firebase-hooks/firestore"
import { orderBy, doc, collection, 
    query, addDoc, serverTimestamp,
    deleteDoc, setDoc} 
from "firebase/firestore"

export class Department {
    
    constructor(name, user){
        this.departmentName = name;
        this.user = user;
        
        // account ref
        this.account = getAccountWithId(this.user.uid);

        this.waitingLine = new WaitingLine(name, this.account);
    }
    

    name(){
        return this.departmentName;
    }
 
    

    
}

class WaitingLine {
    constructor(departmentName, userAcc){
        this.departmentId = getDepartmentId(departmentName);
        this.account = userAcc;

        // wcd = waitinglist collection data reference
        let q = query(collection(db, `departments/${this.departmentId}/waitingline`), orderBy("position", "asc"), );
        this.wcd = useCollectionData(q)[0];

        // wsd = waiting list collection snapshot-data reference
        let uwaitingCollection = collection(db, `departments/${this.departmentId}/waitingline`);
        let [snap] = useCollection(uwaitingCollection);
        this.s = snap;
        this.wsd = this.s?.docs?.map(doc => ({ id: doc.id, ...doc.data() }))

        

    }

  
    hasTurn(){
        return this.wsd?.find(({ id }) => id === this.account.id );
    }
    get position(){
        return this.hasTurn()?.position;
    }
    get patientName(){
        return this.hasTurn()?.patientName;
    }
    
    async addPatient(){
        
        try{
            await setDoc(doc(db,`departments/${this.departmentId}/waitingline`, this.account.id), {
                patientName: this.account.name,
                patientPhone: this.account.phone,
                position: this.length + 1
            })
        }
        catch(err){
            console.log(err)
        }
        
    }
    async deletePatient(){
        await deleteDoc(doc(db,`departments/${this.departmentId}/waitingline`, this.account?.id));
    }
    get length(){
        return this.wcd?.length;
    }
    // updatePositions()

    printId(){
        console.log(this.departmentId)
    }

}


// utitlity methods


const getDepartmentId = (dName) => {
    // department collection snapshot-data reference
    let[ snapshot ] = useCollection(collection(db,"departments"));
    let departments = snapshot?.docs.map( doc => ({ id: doc.id, ...doc.data() }))

    let id = departments?.find(({ departmentName }) => departmentName===dName ).id
    
    return id;
}
const getAccountWithId = (uid) => {
    // users collection snapshot-data reference
    let[ usnapshot ] = useCollection(collection(db,"users"));
    let allusers = usnapshot?.docs.map( doc => ({ id: doc.id, ...doc.data() }))

    let acc = allusers?.find(({ id }) => id === uid )
    
    return acc;
}

