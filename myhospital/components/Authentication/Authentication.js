import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Authentication(){
    const [signUpPage, setSignUpPage] = useState(false);
    
    if(signUpPage){
        return <SignUp setSignUpPage={setSignUpPage}/>
    }

    return (
        <>
        <Login setSignUpPage={setSignUpPage}/>
        </>
    )
}