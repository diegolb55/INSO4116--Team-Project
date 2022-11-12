import '../styles/globals.css'
import Head from 'next/head'
import {auth, db} from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import Authentication from "../components/Authentication/Authentication"

function MyApp({ Component, pageProps }) {

  // Authentication state
  const [user, loading, error] = useAuthState(auth);

  if(!user){
    if(loading){
      return <div><h1>Loading Screen</h1></div>
    }
    return <Authentication />
  }
  

  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <title>MyHospital</title>
      </Head>
      <Component {...pageProps} />
    </>
  )



}

export default MyApp
