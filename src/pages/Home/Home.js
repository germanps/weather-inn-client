import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import "./Home.scss"

export default function Home() {
    const auth = useAuth()
    console.log(auth);
    return (
        <div>
            estamos en la home
        </div>
    )
}