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
import "./RegisterForm.scss"

export default function RegisterForm(props) {
    const { setShowLogin } = props;

    const formik = useFormik({
        initialValues: initialFormValues(),
        validationSchema: Yup.object({
            name: Yup.string().required(true),
            email: Yup.string().email().required(true),
            password: Yup.string().required(true).oneOf([Yup.ref("repeatPassword")], "Las contraseñas no coinciden"),
            repeatPassword: Yup.string().required(true).oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
        }),
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
                        value={formik.values.name}
                        isInvalid={formik.errors.name && true}
                    />
                </EuiFormRow>
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
                <EuiFormRow helpText="Repetir contraseña de usuario">
                    <EuiFieldPassword
                        placeholder="Repetir contraseña"
                        name="repeatPassword"
                        onChange={formik.handleChange}
                        autoComplete="off"
                        value={formik.values.repeatPassword}
                        isInvalid={formik.errors.repeatPassword && true}
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