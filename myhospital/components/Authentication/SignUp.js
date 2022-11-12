
import {useState} from "react"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase'
import styles from "../../styles/Authentication.module.css"
import { doc, setDoc, collection, setIndexConfiguration, addDoc } from "firebase/firestore";


export default function SignUp({setSignUpPage}){

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [createUserWithEmailAndPassword,] = useCreateUserWithEmailAndPassword(auth);

    const createUser = async (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password)
        .then(function(userCredentialImpl){
            setDoc(doc(db, "users", userCredentialImpl?.user.uid), {
                name : name,
                email : email,
                phone : phone
            })
        })
       
    }
    return (
        <div className={styles.authPage}>
            <h1>MyHospital.</h1>
            <p>An insightful visit to your favorite Health Center.</p>
            
            <form onSubmit={ createUser } className={styles.authForm}>
                <label htmlFor="name">name</label>
                <input
                    className={styles.inputs}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                />
                <label htmlFor="phone">phone</label>
                <input
                    className={styles.inputs}
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    id="phone"
                />
                <label htmlFor="email">email</label>
                <input
                    className={styles.inputs}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                />
                <label htmlFor="password">password</label>
                <input
                    className={styles.inputs}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                />
                <div>
                    <button 
                        className={styles.btn}
                        type="submit"
                    > Sign In
                    </button>
                    
                </div> 
                <p className={styles.changePage}>Or login by <span 
                        onClick={ () => setSignUpPage(false) }
                        className={styles.changeAuthPage}
                    >
                        LogIn
                    </span>
                </p> 
            </form>
               
                
        </div>
    )
}