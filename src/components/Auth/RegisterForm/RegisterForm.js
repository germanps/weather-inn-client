import React from 'react'
import {
    EuiButton,
    EuiFieldText,
    EuiForm,
    EuiFormRow,
    EuiFieldPassword,
} from '@elastic/eui';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from '@apollo/client'
import { REGISTER } from '../../../gql/user'
import PropTypes from 'prop-types';
import "./RegisterForm.scss"

export default function RegisterForm(props) {
    const { setShowLogin } = props
    const [register] = useMutation(REGISTER)

    const formik = useFormik({
        initialValues: initialFormValues(),
        validationSchema: Yup.object({
            name: Yup.string().required(true),
            username: Yup.string().required(true),
            email: Yup.string().email().required(true),
            password: Yup.string().required(true).oneOf([Yup.ref("repeatPassword")], "Las contraseñas no coinciden"),
            repeatPassword: Yup.string().required(true).oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
        }),
        onSubmit: async (formData) => {
            try {
                const newUser = formData
                delete newUser.repeatPassword
                const result = await register({
                    variables: {
                        input: newUser,
                    }
                })
                setShowLogin(true);
                console.log(result);
            } catch (error) {
                console.log(error)
            }
        }
    })


    return (
        <div className="register-form">
            <h2 className="register-form__title">Formulario de registro</h2>
            <EuiForm component="form" onSubmit={formik.handleSubmit}>
                <EuiFormRow helpText="Ingresar nombre de usuario">
                    <EuiFieldText
                        placeholder="Nombre usuario"
                        name="name"
                        onChange={formik.handleChange}
                        autoComplete="off"
                        value={formik.values.name || ''}
                        isInvalid={formik.errors.name && true}
                    />
                </EuiFormRow>
                <EuiFormRow helpText="Ingresar username">
                    <EuiFieldText
                        placeholder="Nickname"
                        name="username"
                        onChange={formik.handleChange}
                        autoComplete="off"
                        value={formik.values.username || ''}
                        isInvalid={formik.errors.username && true}
                    />
                </EuiFormRow>
                <EuiFormRow helpText="Ingresar email">
                    <EuiFieldText
                        placeholder="Correo electrónico"
                        name="email"
                        onChange={formik.handleChange}
                        autoComplete="off"
                        value={formik.values.email || ''}
                        isInvalid={formik.errors.email && true}
                    />
                </EuiFormRow>
                <EuiFormRow helpText="Ingresar contraseña de usuario">
                    <EuiFieldPassword
                        placeholder="Contraseña"
                        name="password"
                        onChange={formik.handleChange}
                        autoComplete="off"
                        value={formik.values.password || ''}
                        isInvalid={formik.errors.password && true}
                    />
                </EuiFormRow>
                <EuiFormRow helpText="Repetir contraseña de usuario">
                    <EuiFieldPassword
                        placeholder="Repetir contraseña"
                        name="repeatPassword"
                        onChange={formik.handleChange}
                        autoComplete="off"
                        value={formik.values.repeatPassword || ''}
                        isInvalid={formik.errors.repeatPassword && true}
                    />
                </EuiFormRow>
                <EuiButton
                    type="submit"
                    fill
                >
                    Registrarse
                </EuiButton>

            </EuiForm>
        </div>
    )
}

function initialFormValues() {
    return {
        name: "",
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
    }
}

RegisterForm.propTypes = {
    setShowLogin: PropTypes.func
}