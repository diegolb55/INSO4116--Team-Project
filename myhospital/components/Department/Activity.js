import styles from "../../styles/Activity.module.css"
import {FaXRay} from "react-icons/fa"

export default function Activity({ department}){
    const getIcon = (name) => {
        switch(name){
            case "Radiology":
                return <FaXRay/>;
                break;
            default:
                return "no icon"
        }
    }
    return (
        <div className={styles.activityCont}>
             <h3>Activity information</h3>
            <p>Busyness activity in {department.name} Department</p>
            <div className={styles.circle}>
                <p className={styles.baricon}>{getIcon(department.name)}</p>
                <ActivityBar activity={department.activity}/>
            </div>
            <p>{department.waitingLine.length}/{department.capacity} <br/>occupancy</p>
        </div>
    )
}

const ActivityBar = ({activity}) => {
    console.log(activity)
    return(
            <div className={styles.barCont}>
                <div className={styles.fill}
                style={{ height: `${activity}%`}}
                ></div>

            </div>
    )
}