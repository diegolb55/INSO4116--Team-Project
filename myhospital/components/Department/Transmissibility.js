import styles from "../../styles/Department/Transmissibility.module.css"
// import ApexCharts from "apexcharts"
import React from 'react';
import dynamic from 'next/dynamic'
// import PieChart from "../../utils/PieChart";


const PieChart = dynamic(() => import('../../utils/PieChart'), { ssr: false });

export default function Transmissibility({ department }){


    return (

        <div className={styles.transmissibilityCont}>
            <h3>Transmissibility</h3>
            <p>
                Contagious diseases in {department.name} department.
                Based on all the in-patients currently on this department.
            </p>

            <PieChart styles={styles}/>
        </div>
        
    )
}