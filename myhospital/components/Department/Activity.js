import styles from "../../styles/Department/Activity.module.css"
import {FaXRay} from "react-icons/fa"
import ActivityBar from "./ActivityBar";

export default function Activity({ department}){

    console.log(department.waitingLine.length)

    return (
        <div className={styles.activityCont}>
             <h3>Activity information</h3>
            <p>Busyness activity in {department.name} Department</p>
            <div className={styles.circle}>
                <ActivityBar 
                    activity={department.activity} 
                    name={department.name} 
                    styles={styles}
                    
                    />
            </div>
            <p>{department.activity} %<br/>occupancy</p>
        </div>
    )
}

