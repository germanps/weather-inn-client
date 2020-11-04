import React from 'react'
import UserSettings from '../../components/UserSettings'
import './User.scss'
import { useParams } from 'react-router-dom'

export default function User() {
    const params = useParams();
    console.log(params);;
    return (
        <div className="user">
            <h2 className="subtitle">Panel Usuario</h2>
            <UserSettings />
        </div>
    )
}
