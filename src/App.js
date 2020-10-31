import React, { useEffect, useState, useMemo } from 'react'
import { ApolloProvider } from "@apollo/client"
import client from "./config/apollo"
import Auth from './pages/Auth'
import Navigation from './routes/Navigation'
import AuthContext from './context/AuthContext'
import { getToken } from './utils/token'



export default function App() {
  const [auth, setAuth] = useState(undefined)

  useEffect(() => {
    //if userToken is set redirect to home page
    const token = getToken()
    if (!token) setAuth(null)
    else setAuth(token)
  }, [])

  const logout = () => {
    console.log('cerrar sesión')
  }

  const setUser = user => setAuth(user)
  //avoid new render with useMemo
  const authData = useMemo(
    () => ({
      auth,
      logout,
      setUser
    }), [auth]
  )

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={authData}>
        {!auth ? <Auth /> : <Navigation />}
      </AuthContext.Provider>
    </ApolloProvider>
  );
}