import { useState } from "react";
import Link from "next/link";
import { Department } from "../utils/Department"

import Navigation from '../components/Navigation';
import Image from "next/image";
import DeptBtns from "../components/Department/DeptBtns"; 
import VirtualReception from "../components/Department/VirtualReception";
import Activity from "../components/Department/Activity";
import Transmissibility from "../components/Department/Transmissibility";
import Doctors from "../components/Department/Doctors";
import Services from "../components/Department/Services";
import CustomImage from "../components/Department/CustomImage";

export default function Radiology({user}){

    const radiologyDept = new Department("Radiology", user); 
    const [isVROpen, setIsVROpen] = useState(false);

    

    return (
        <div >
            <Link href="./">
                <p className="logo">myhospital.</p>
            </Link>
            <Navigation/>
            <VirtualReception 
                isVROpen={isVROpen} 
                setIsVROpen={setIsVROpen}
                department={radiologyDept}
            />

            <h3  style={{
                margin: 0, padding:"130px 0 50px 20px",
                fontSize:"1.7rem", fontWeight:"lighter"
            }}>Radiology Department</h3>            
            
            <CustomImage
                src="/images/rays.jpg" 
                layout={'fill'} 
                objectFit={'cover'} 
                alt="building"
            />

            <DeptBtns  setIsVROpen={setIsVROpen}/>
            <Activity  department={radiologyDept}/>
            <Transmissibility department={radiologyDept}/>
            <Doctors department={radiologyDept}/>
            <Services department={radiologyDept}/>
            <h5>Schedules</h5>

        </div>
    )
}