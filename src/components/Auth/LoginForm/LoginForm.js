import React, { useState } from 'react'
import {
    EuiButton,
    EuiFieldText,
    EuiForm,
    EuiFormRow,
    EuiFieldPassword,
} from '@elastic/eui'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../../../gql/user'
import "./LoginForm.scss"

export default function LoginForm() {
    const [error, setError] = useState('')
    const [login] = useMutation(LOGIN)

    const formik = useFormik({
        initialValues: initialFormValues(),
        validationSchema: Yup.object({
            email: Yup.string().email().required(true),
            password: Yup.string().required(true),
        }),
        onSubmit: async (formData) => {
            setError('')//only render one time as performance
            //call to mutation to get user token
            try {
                const { data } = await login({
                    variables: {
                        input: formData
                    }
                })
                console.log(data)
            } catch (error) {
                setError(error.message)
            }
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
                        isInvalid={formik.errors.email && true}
                    />
                </EuiFormRow>
                <EuiFormRow helpText="Ingresar contraseña de usuario">
                    <EuiFieldPassword
                        placeholder="Contraseña"
                        name="password"
                        onChange={formik.handleChange}
                        autoComplete="off"
                        value={formik.values.password}
                        isInvalid={formik.errors.password && true}
                    />
                </EuiFormRow>
                <EuiButton
                    type="submit"
                    fill
                >
                    Login
                </EuiButton>
                {error && <p className="submit-error">{error}</p>}
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