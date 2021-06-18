import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'
import { UserContext } from "../components/context/userContext";

//import polyfill for IE11 compatibility
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const [userData, setUserData] = useState(null); 

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>

  )
}

export default MyApp