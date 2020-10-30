import React from 'react'
import {
    EuiButton,
    EuiFieldText,
    EuiForm,
    EuiFormRow,
    EuiFieldPassword,
} from '@elastic/eui'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import "./LoginForm.scss"

export default function LoginForm() {
    const formik = useFormik({
        initialValues: initialFormValues(),
        validationSchema: Yup.object({
            email: Yup.string().email().required(true),
            password: Yup.string().required(true),
        }),
        onSubmit: (formData) => {
            console.log(formData);
        }
    })
    return (
        <div className="login-form">
            <p className="register-form__title">Login</p>
            <EuiForm component="form" onSubmit={formik.handleSubmit}>
                <EuiFormRow helpText="Ingresar email">
                    <EuiFieldText
                        placeholder="Correo electrónico"
                        name="email"
                        onChange={formik.handleChange}
                        autoComplete="off"
                        value={formik.values.email}
                        isInvalid={formik.errors.email}
                    />
                </EuiFormRow>
                <EuiFormRow helpText="Ingresar contraseña de usuario">
                    <EuiFieldPassword
                        placeholder="Contraseña"
                        name="password"
                        onChange={formik.handleChange}
                        autoComplete="off"
                        value={formik.values.password}
                        isInvalid={formik.errors.password}
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
        email: "",
        password: "",
    }
}