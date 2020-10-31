import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import "./Home.scss"

export default function Home() {
    const auth = useAuth()
    console.log(auth);
    return (
        <div>
            <h2>Menu</h2>
            <p>Home...</p>
        </div>
    )
}
