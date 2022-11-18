import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Radiology.module.css"
import { Department } from "../utils/Department"

import Navigation from '../components/Navigation';
import Image from "next/image";
import DeptBtns from "../components/Department/DeptBtns"; 
import VirtualReception from "../components/Department/VirtualReception";
import Activity from "../components/Department/Activity";
import Transmissibility from "../components/Department/Transmissibility";



export default function Radiology({user}){

    const radiologyDept = new Department("Radiology", user); 
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
                department={radiologyDept}
            />

            <h3 className={styles.title}>Radiology Department</h3>
            <div style={{position:"relative", width:"100vw", height:200, opacity:.7}}>
                <Image src="/images/rays.jpg" layout={'fill'} objectFit={'cover'} alt="building" />
            </div>

            <DeptBtns styles={ styles } setIsVROpen={setIsVROpen}/>

            <Activity  department={radiologyDept}/>
            <Transmissibility />
            <h5>Our Doctors</h5>
            <h5>Department Services</h5>
            <h5>Schedules</h5>

        </div>
    )
}