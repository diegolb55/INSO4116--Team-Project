import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navigation from '../components/Navigation';



export default function Home() {
  return (
    <div className={styles.mainContainer} >

      <Navigation />

      <div style={{position:"relative", width:"100vw", height:100, opacity:.7}}>
        <Image src="/images/building.jpg" fill alt="building" />
      </div>

      <h3>Departments</h3>

      <h3>Overall Activity</h3>
      
      <h3>Transmissibility</h3>


      

    </div>
  )
}
