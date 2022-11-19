import { useState } from "react";
import styles from "../styles/Emergency.module.css"
import { Department } from "../utils/Department"
import Link from "next/link";

import Navigation from '../components/Navigation';
import Image from "next/image";
import DeptBtns from "../components/Department/DeptBtns"; 
import VirtualReception from "../components/Department/VirtualReception";
import Activity from "../components/Department/Activity";
import Transmissibility from "../components/Department/Transmissibility";
import Doctors from "../components/Department/Doctors";


export default function Emergency({user}){

    const emergencyDept = new Department("Emergency", user); 
    const [isVROpen, setIsVROpen] = useState(false);

    return (
        <div className={styles.rdeptContainer}>
            <Link href="./">
                <p className="logo">myhospital.</p>
            </Link>
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

            <Activity department={emergencyDept}/>
            <Transmissibility  name={emergencyDept.name}/>

            <Doctors />
            <h5>Department Services</h5>
            <h5>Schedules</h5>

        </div>
    )
}