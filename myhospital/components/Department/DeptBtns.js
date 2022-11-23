import styles from "../../styles/Department/DeptButton.module.css"

export default function DeptBtns({ setIsVROpen }) {
    return (
        <div className={styles.onlinebtns}>
            <button onClick={()=> setIsVROpen(true)}>Virtual Reception</button>
            <button>Register Online</button>
        </div>
    )
}