import React from 'react'
import {
    EuiButton,
    EuiFieldText,
    EuiForm,
    EuiFormRow,
    EuiFieldPassword,

} from '@elastic/eui';
import { useFormik } from 'formik'
import "./RegisterForm.scss"

export default function RegisterForm(props) {
    const { setShowLogin } = props;

    const formik = useFormik({
        initialValues: initialFormValues(),
        validationSchema: null,
        onSubmit: (formValues) => {
            console.log(formValues);
        }
    })


    return (
        <div className="register-form">
            <p className="register-form__title">Formulario de registro</p>
            <EuiForm component="form" onSubmit={formik.handleSubmit}>
                <EuiFormRow helpText="Ingresar nombre de usuario">
                    <EuiFieldText
                        placeholder="Nombre usuario"
                        name="name"
                        onChange={formik.handleChange}
                        autoComplete="off"
                    />
                </EuiFormRow>
                <EuiFormRow helpText="Ingresar email">
                    <EuiFieldText
                        placeholder="Correo electrónico"
                        name="email"
                        onChange={formik.handleChange}
                        autoComplete="off"
                    />
                </EuiFormRow>
                <EuiFormRow helpText="Ingresar contraseña de usuario">
                    <EuiFieldPassword
                        placeholder="Contraseña"
                        name="password"
                        onChange={formik.handleChange}
                        autoComplete="off"
                    />
                </EuiFormRow>
                <EuiFormRow helpText="Repetir contraseña de usuario">
                    <EuiFieldPassword
                        placeholder="Repetir contraseña"
                        name="repeatPassword"
                        onChange={formik.handleChange}
                        autoComplete="off"
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

function initialFormValues() {
    return {
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
    }
}