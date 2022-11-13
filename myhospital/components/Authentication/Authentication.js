import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Head from "next/head";

export default function Authentication(){
    
    const [signUpPage, setSignUpPage] = useState(false);
    
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>
            {
                signUpPage ? 
                <SignUp setSignUpPage={setSignUpPage}/>
                :
                <Login setSignUpPage={setSignUpPage}/>


            }
        </>
    )
}