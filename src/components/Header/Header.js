import React from 'react'
import logo from '../../assets/png/weather_inn-logo.png'
import { useApolloClient } from '@apollo/client'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { EuiIcon } from '@elastic/eui'

import './Header.scss'
import {
    EuiHeader,
    EuiHeaderSectionItem,
    EuiHeaderLinks,
    EuiImage,
} from '@elastic/eui';

export default function Header() {
    const { auth, logout } = useAuth()
    const history = useHistory()
    const client = useApolloClient()
    //console.log(auth);
    const onLogout = () => {
        client.clearStore()
        logout()
        history.push("/")
    }
    return (
        <EuiHeader className="header">
            <EuiHeaderSectionItem border="right">
                <h1 className="title-logo">
                    <Link to="/">
                        <EuiImage
                            size={50}
                            alt="logo weather-inn"
                            url={logo}
                        />
                    </Link>
                    Weather Inn
                </h1>
            </EuiHeaderSectionItem>

            <EuiHeaderSectionItem>
                <EuiHeaderLinks aria-label="App navigation links example">

                    <Link to={`/${auth.username}`}>

                        <span>{auth.username}</span>
                        <EuiIcon
                            onClick={onLogout}
                            type="exit"
                        />

                    </Link>

                </EuiHeaderLinks>
            </EuiHeaderSectionItem>
        </EuiHeader>
    )
}
