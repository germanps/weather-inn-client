import React, { useState } from 'react'
import RegisterForm from '../../components/Auth/RegisterForm'
import LoginForm from '../../components/Auth/LoginForm'
import logo from '../../assets/png/weather_inn-logo.png'
import {
    EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
    EuiTitle,
    EuiImage,
} from '@elastic/eui';
import "./Auth.scss"



export default function Auth() {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <EuiPage className="auth">
            <EuiPageBody component="div">
                <h1 className="title-logo">
                    <EuiImage
                        size="s"
                        hasShadow
                        alt="logo weather-inn"
                        url={logo}
                    />
                </h1>
                <EuiPageContent>
                    <EuiPageContentHeader>
                        <EuiPageContentHeaderSection>
                            <EuiTitle>
                                <h2>Weather Inn  <span>Take the weather!</span></h2>
                            </EuiTitle>
                        </EuiPageContentHeaderSection>
                    </EuiPageContentHeader>
                    <EuiPageContentBody>


                        {showLogin ? <LoginForm /> : <RegisterForm setShowLogin={setShowLogin} />}




                    </EuiPageContentBody>

                </EuiPageContent>
                <div className="change-to-register">

                    {showLogin ? (
                        <>
                            <p>¿No tienes cuenta?</p>
                            <span onClick={() => setShowLogin(!showLogin)}>Registrarse</span>
                        </>
                    ) : (
                            <>
                                <p>¡Entra con tu cuenta!</p>
                                <span onClick={() => setShowLogin(!showLogin)}>Iniciar sesión</span>
                            </>
                        )}
                </div>
            </EuiPageBody>
        </EuiPage>
    )
}