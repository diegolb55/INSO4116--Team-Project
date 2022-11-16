

export default function DeptBtns({ styles, setIsVROpen }) {
    return (
        <div className={styles.onlinebtns}>
            <button onClick={()=> setIsVROpen(true)}>Virtual Reception</button>
            <button>Register Online</button>
        </div>
    )
}