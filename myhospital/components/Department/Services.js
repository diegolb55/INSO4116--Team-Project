import styles from "../../styles/Department/Services.module.css"

export default function Services({department}){

    const getServices = () => 
        department.services?.map(
            (doc, index) => <p key={Math.random()}>{doc.service}</p>
        );
    

    return (
        <div className={styles.serviceCont}>
            <h3>Department Services</h3>
            <div className={styles.servicebox}>
                { getServices() }

            </div>
        </div>
    )
}