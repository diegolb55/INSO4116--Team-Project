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

import HeartCanvas from "../public/assets/Model";


export default function Cardiology({user}){

    const cardiologyDept = new Department("Cardiology", user); 
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
                department={cardiologyDept}
            />

            <h3  style={{
                margin: 0, padding:"130px 0 50px 20px",
                fontSize:"1.7rem", fontWeight:"lighter"
            }}>Cardiology Department</h3>            
            
            <CustomImage
                src="/images/heart.jpg" 
                layout={'fill'} 
                objectFit={'cover'} 
                alt="building"
            />
            {/* <HeartCanvas/> */}

            <DeptBtns  setIsVROpen={setIsVROpen}/>
            <Activity  department={cardiologyDept}/>
            <Transmissibility department={cardiologyDept}/>
            <Doctors department={cardiologyDept}/>
            <Services department={cardiologyDept}/>
            <h5>Schedules</h5>

        </div>
    )
}