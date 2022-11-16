import styles from "../../styles/Activity.module.css"

export default function Activity({ name }){
    return (
        <div className={styles.activityCont}>
             <h3>Activity information</h3>
            <p>Busyness activity in {name} Department</p>
            <div className={styles.circle}>
                
            </div>
            <p>2/5</p>
        </div>
    )
}