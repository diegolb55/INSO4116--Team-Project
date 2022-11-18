import Head from "next/head";
import { useState } from "react"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase'
import styles from "../../styles/Authentication/Authentication.module.css"



export default function Login({ setSignUpPage }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithEmailAndPassword,
        user,
        loading,
        error] = useSignInWithEmailAndPassword(auth)
    
        return (
        <div className={styles.authPage}>
            

            <h1>MyHospital.</h1>
            <p>An insightful visit to your favorite Health Center.</p>
            
            
            <div className={styles.authForm}>
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
                        onClick={() => signInWithEmailAndPassword(email, password)}>
                        login
                    </button>
                    <p className={styles.changePage}>Or create account by <span 
                            onClick={ () => setSignUpPage(true) }
                            className={styles.changeAuthPage}
                        >
                          SignIn
                        </span>
                    </p>
                        
                </div>
            </div>
        </div>
    )
}