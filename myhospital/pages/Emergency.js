import { useState } from "react";
import styles from "../styles/Emergency.module.css"
import { Department } from "../utils/Department"

import Navigation from '../components/Navigation';
import Image from "next/image";
import DeptBtns from "../components/Department/DeptBtns"; 
import VirtualReception from "../components/Department/VirtualReception";
import Activity from "../components/Department/Activity";
import Transmissibility from "../components/Department/Transmissibility";


export default function Emergency({user}){

    const emergencyDept = new Department("Emergency", user, 20); 
    const [isVROpen, setIsVROpen] = useState(false);

    return (
        <div className={styles.rdeptContainer}>
            <Navigation/>
            <VirtualReception 
                isVROpen={isVROpen} 
                setIsVROpen={setIsVROpen}
                department={emergencyDept}
            />

            <h3 className={styles.title}>Emergency Department</h3>
            <div style={{position:"relative", width:"100vw", height:200, opacity:.7}}>
                <Image src="/images/emergency.jpg" layout={'fill'} objectFit={'cover'} alt="building" />
            </div>

            <DeptBtns styles={ styles } setIsVROpen={setIsVROpen}/>

            <Activity name={emergencyDept.name} />
            <Transmissibility  name={emergencyDept.name}/>
            <h5>Our Doctors</h5>
            <h5>Department Services</h5>
            <h5>Schedules</h5>

        </div>
    )
}