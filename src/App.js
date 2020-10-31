import React, { useEffect, useState } from 'react'
import { ApolloProvider } from "@apollo/client"
import client from "./config/apollo"
import Auth from './pages/Auth'
import { getToken } from './utils/token'
import './App.scss';


export default function App() {
  useEffect(() => {
    //if userToken is set redirect to home page
    const token = getToken()
    if (!token) setAuth(null)
    else setAuth(token)
  }, [])
  const [auth, setAuth] = useState(undefined)

  return (
    <ApolloProvider client={client}>
      {!auth ? <Auth /> : <h1>Estas logeado</h1>}
    </ApolloProvider>
  );
}