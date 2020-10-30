import React from 'react'
import {
    EuiButton,
    EuiFieldText,
    EuiForm,
    EuiFormRow,
    EuiFieldPassword,

} from '@elastic/eui';
import "./RegisterForm.scss"

export default function RegisterForm(props) {
    const { setShowLogin } = props;

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('formulario enviado')
    }
    return (
        <div className="register-form">
            <p className="register-form__title">Formulario de registro</p>
            <EuiForm component="form" onSubmit={onSubmit}>
                <EuiFormRow helpText="Ingresar nombre de usuario">
                    <EuiFieldText
                        placeholder="Nombre usuario"
                        name="name"
                    />
                </EuiFormRow>
                <EuiFormRow helpText="Ingresar email">
                    <EuiFieldText
                        placeholder="Correo electrónico"
                        name="user"
                    />
                </EuiFormRow>
                <EuiFormRow helpText="Ingresar contraseña de usuario">
                    <EuiFieldPassword
                        placeholder="Contraseña"
                    // onChange={(e) => setValue(e.target.value)}
                    />
                </EuiFormRow>
                <EuiFormRow helpText="Repetir contraseña de usuario">
                    <EuiFieldPassword
                        placeholder="Repetir contraseña"
                    // onChange={(e) => setValue(e.target.value)}
                    />
                </EuiFormRow>
                <EuiButton
                    type="submit"
                    fill
                >
                    Login
                </EuiButton>
            </EuiForm>
        </div>
    )
}
