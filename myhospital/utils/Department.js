import { db, auth } from "../firebase";
import { useDocumentData, useCollectionData, useCollection } from "react-firebase-hooks/firestore"
import { orderBy, doc, collection, 
    query, addDoc, serverTimestamp,
    deleteDoc, setDoc, runTransaction,
    updateDoc
} 
from "firebase/firestore"

export class Department {
    
    constructor(name, user){
        this.departmentName = name;
        this.user = user;
        this.departmentId = getDepartmentId(name)[0];
        this.departmentCapacity = getDepartmentId(name)[1];
        
        // user account snapshot
        this.account = getAccountWithId(this.user.uid);

        // create waiting line
        this.waitingLine = new WaitingLine(name, this.account);

        // dsd = doctor list collection snapshot-data reference
        let doctorCollection = collection(db, `departments/${this.departmentId}/doctors`);
        let [dsnap] = useCollection(doctorCollection);
        this.dsd = dsnap?.docs?.map(doc => ({ id: doc.id, ...doc.data() }));

        // ssd = service list collection snapshot-data reference
        let serviceCollection = collection(db, `departments/${this.departmentId}/services`);
        let [ssnap] = useCollection(serviceCollection);
        this.ssd = ssnap?.docs?.map(doc => ({ id: doc.id, ...doc.data() }));

    }
    

    get name(){
        return this.departmentName;
    }
    get activity(){
        return (this.waitingLine.length / this.departmentCapacity)*100;
    }
    get capacity(){
        return this.departmentCapacity;
    }
    get doctors(){
        return this.dsd;
    }
    get services(){
        return this.ssd;
    }
    
    
    

    
}

class WaitingLine {
    constructor(departmentName, userAcc){
        this.departmentId = getDepartmentId(departmentName)[0];
        this.account = userAcc;

        // wcd = waitinglist collection data reference
        let q = query(collection(db, `departments/${this.departmentId}/waitingline`), orderBy("position", "asc") );
        this.wcd = useCollectionData(q)[0];

        // wsd = waiting list collection snapshot-data reference
        let uwaitingCollection = collection(db, `departments/${this.departmentId}/waitingline`);
        let [snap] = useCollection(uwaitingCollection);
        this.s = snap;
        this.wsd = this.s?.docs?.map(doc => ({ id: doc.id, ...doc.data() }))

        

        

    }

    printId(){
        console.log(this.departmentId)
    }
    hasTurn(){
        return this.wsd?.find(({ id }) => id === this.account.id );
    }
    async updatePositions(){
        let sortedWSD = this.wsd.sort((a,b) => a.position - b.position).filter((doc) => doc.id !== this.account.id);
        let docref;

        for (let i=0; i < this.length; i++){
            try {
                docref = doc(db, `departments/${this.departmentId}/waitingline`, sortedWSD[i].id )
                
                await updateDoc(docref, {
                    position: i+1
                    
                });
            } catch(error){
                console.log(error)
            }
            
        }
        
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
        await deleteDoc(doc(db,`departments/${this.departmentId}/waitingline`, this.account?.id))
        .then(this.updatePositions());
    }
    get length(){
        return this.wcd?.length;
    }
    get position(){
        return this.hasTurn()?.position;
    }
    get patientName(){
        return this.hasTurn()?.patientName;
    }
    
    

}


/** Utility functions */

const getDepartmentId = (dName) => {
    // department collection snapshot-data reference
    let [ snapshot ] = useCollection(collection(db,"departments"));
    let departments = snapshot?.docs.map( doc => ({ id: doc.id, ...doc.data() }))

    let id = departments?.find(({ departmentName }) => departmentName===dName )?.id
    let cap = departments?.find(({ departmentName }) => departmentName===dName )?.capacity
    let result = [id, cap]
    return result;
}

const getAccountWithId = (uid) => {
    // users collection snapshot-data reference
    let[ usnapshot ] = useCollection(collection(db,"users"));
    let allusers = usnapshot?.docs.map( doc => ({ id: doc.id, ...doc.data() }))

    let acc = allusers?.find(({ id }) => id === uid )
    
    return acc;
}

