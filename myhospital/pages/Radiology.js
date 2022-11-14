import { Department } from "../utils/Department"
import Navigation from '../components/Navigation';
import styles from "../styles/Radiology.module.css"
import Image from "next/image";
import VirtualReception from "../components/VirtualReception";
import { useState } from "react";

export default function Radiology({}){

    const radiologyDept = new Department("radiology", "skfNeLBKS0k2vYGWDUU8"); 
    radiologyDept.logwaitinglist();
    console.log(radiologyDept.length)



    const [isVROpen, setIsVROpen] = useState(false);


    return (
        <div className={styles.rdeptContainer}>
            <Navigation/>
            <VirtualReception 
                isVROpen={isVROpen} 
                setIsVROpen={setIsVROpen}
                dept={radiologyDept}
            />

            {/* <p>dept name: { radiologyDept.name() }</p>
            <p>first in line?: { radiologyDept.peekfirstInLine() }</p>
            <p>last in line?: { radiologyDept.peekLastInLine() }</p>

            <p>waiting line length: { radiologyDept.activity() }</p> */}

            <h3 className={styles.title}>Radiology Department</h3>
            <div style={{position:"relative", width:"100vw", height:200, opacity:.7}}>
                <Image src="/images/rays.jpg" layout={'fill'} objectFit={'cover'} alt="building" />
            </div>

            <div className={styles.onlinebtns}>
                <button onClick={()=> setIsVROpen(true)}>Virtual Reception</button>
                <button>Register Online</button>
            </div>

            <h5>Activity Info</h5>
            <h5>Transmissibility Info</h5>
            <h5>Our Doctors</h5>
            <h5>Department Services</h5>
            <h5>Schedules</h5>

        </div>
    )
}