import '../styles/globals.css'
import Head from 'next/head'
import {auth, db} from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import Authentication from "../components/Authentication/Authentication"
import Loading from '../components/Loading'

function MyApp({ Component, pageProps }) {

  // Authentication state
  const [user, loading, error] = useAuthState(auth);

  if(!user){
    if(loading){
      return <Loading/>
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
