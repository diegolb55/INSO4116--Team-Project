import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

import Navigation from '../components/Navigation';
import OverallActivity from '../components/OverallActivity';

import dynamic from 'next/dynamic'

import TextCanvas from '../public/assets/TextCanvas';


const PieChart = dynamic(() => import('../utils/PieChart'), { ssr: false });


export default function Home() {


  return (
    <div className={styles.mainContainer} >

      <Link href="./">
        <p className="logo">myhospital<span className='dot'>.</span></p>
      </Link>

      <Navigation />

      <div style={{position:"relative", width:"100vw", height:200, opacity:.7}}>
        <Image src="/images/building.jpg" layout={'fill'} objectFit={'cover'} alt="building" />
        
      </div>



      
      <div className={styles.infoSection}>
        <h3>Departments</h3>
        {/* <TextCanvas text="Departments"/> */}

        <p>&emsp;Familiarize yourself with each department before, after or while
          you are currently visiting.
        </p>
        <ul className={styles.deptLinks}>
          <Link href="./Emergency" className={styles.homelink}>
            <li>Emergency</li>
          </Link>
          <Link href="./Radiology" className={styles.homelink}>
            <li>Radiology</li>
          </Link>
          <Link href="./Pulmonology" className={styles.homelink}>
            <li>Pulmonology</li>
          </Link>
          <Link href="./Cardiology" className={styles.homelink}>
            <li>Cardiology</li>
          </Link>
          <Link href="./" className={styles.homelink}>
            <li>--</li>
          </Link>
          <Link href="./" className={styles.homelink}>
            <li>--</li>
          </Link>
          
        </ul>
      </div>

      <div className={styles.infoSection}>
        <h3>Overall Activity</h3>
        {/* <TextCanvas text="Overall Activity"/> */}

        <p>&emsp;Based on the reception occupancy from each
          department we have the following live bar graphs:
        </p>
        <OverallActivity />
      </div>


      <div className={styles.infoSection}>
        <h3>Transmissibility</h3>
        {/* <TextCanvas text="Transmissibility"/> */}

        <div className={styles.pieChart}>
          <PieChart styles={styles}/>
        </div>
      </div>

      


      

    </div>
  )
}
