import React from 'react'
import logo from '../../assets/png/weather_inn-logo.png'
import './Header.scss'
import {
    EuiHeader,
    EuiHeaderSectionItem,
    EuiHeaderLinks,
    EuiHeaderLink,
    EuiImage,
} from '@elastic/eui';

export default function Header() {
    return (
        <EuiHeader className="header">
            <EuiHeaderSectionItem border="right">
                <h1 className="title-logo">
                    <EuiImage
                        size={50}
                        alt="logo weather-inn"
                        url={logo}
                    />
                    Weather Inn
                </h1>
            </EuiHeaderSectionItem>

            <EuiHeaderSectionItem>
                <EuiHeaderLinks aria-label="App navigation links example">
                    <EuiHeaderLink isActive>Configuración</EuiHeaderLink>
                </EuiHeaderLinks>
            </EuiHeaderSectionItem>
        </EuiHeader>
    )
}
