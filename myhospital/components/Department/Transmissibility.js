
import styles from "../../styles/Department/Transmissibility.module.css"

export default function Transmissibility({ name }){
    return (
        <div className={styles.transmissibilityCont}>
            <h3>Transmissibility information</h3>
            <p>Infectuous diseases in {name} Department</p>
            <div className={styles.rect}>
                
            </div>
        </div>
    )
}