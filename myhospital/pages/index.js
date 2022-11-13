import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

import Navigation from '../components/Navigation';



export default function Home() {
  return (
    <div className={styles.mainContainer} >

      <Navigation />

      <div style={{position:"relative", width:"100vw", height:200, opacity:.7}}>
        <Image src="/images/building.jpg" layout={'fill'} objectFit={'cover'} alt="building" />
      </div>

      
      <div className={styles.infoSection}>
        <h3>Departments</h3>
        <ul className={styles.deptLinks}>
          <li>
            <Link href="">Emergency</Link>
          </li>
          <li>
            <Link href="">Pulmonology</Link>
          </li>
          <li>
            <Link href="">Radiology</Link>
          </li>
          <li>
            <Link href="">Emergency</Link>
          </li>
          <li>
            <Link href="">Pulmonology</Link>
          </li>
          <li>
            <Link href="">Radiology</Link>
          </li>
        </ul>
      </div>
      <div className={styles.infoSection}>
        <h3>Overall Activity</h3>
        <div className={styles.barStats}></div>
      </div>
      <div className={styles.infoSection}>
        <h3>Transmissibility</h3>
        <div className={styles.pieChart}></div>
      </div>

      


      

    </div>
  )
}
