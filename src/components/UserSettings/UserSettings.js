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
import './UserSettings.scss'

export default function UserSettings() {
    const formik = useFormik({
        initialValues: initialFormValues(),
        validationSchema: Yup.object({
            email: Yup.string().email().required(true),
            currentPassword: Yup.string().required(true),
            newPassword: Yup.string().required(true).oneOf([Yup.ref("repeatNewPassword")]),
            repeatNewPassword: Yup.string().required(true).oneOf([Yup.ref("newPassword")]),
        }),
        onSubmit: (formData) => {
            console.log(formData);
        }
    })
    return (
        <div className="user-settings" onSubmit={formik.handleSubmit}>
            <EuiForm component="form">

                <EuiFormRow helpText="Cambiar email">
                    <EuiFieldText
                        placeholder="Cambiar correo electrónico"
                        name="email"
                        onChange={formik.handleChange}
                        autoComplete="off"
                        value={formik.values.email || ''}
                        isInvalid={formik.errors.email && true}
                    />
                </EuiFormRow>
                <EuiFormRow helpText="Contraseña actual">
                    <EuiFieldPassword
                        placeholder="Contraseña actual"
                        name="currentPassword"
                        onChange={formik.handleChange}
                        autoComplete="off"
                        value={formik.values.currentPassword || ''}
                        isInvalid={formik.errors.currentPassword && true}
                    />
                </EuiFormRow>
                <EuiFormRow helpText="Nueva contraseña">
                    <EuiFieldPassword
                        placeholder="Nueva contraseña"
                        name="newPassword"
                        onChange={formik.handleChange}
                        autoComplete="off"
                        value={formik.values.newPassword || ''}
                        isInvalid={formik.errors.newPassword && true}
                    />
                </EuiFormRow>
                <EuiFormRow helpText="Repetir contraseña de usuario">
                    <EuiFieldPassword
                        placeholder="Repetir contraseña"
                        name="repeatNewPassword"
                        onChange={formik.handleChange}
                        autoComplete="off"
                        value={formik.values.repeatNewPassword || ''}
                        isInvalid={formik.errors.repeatNewPassword && true}
                    />
                </EuiFormRow>
                <EuiButton
                    type="submit"
                    fill
                >
                    Enviar
                </EuiButton>

            </EuiForm>
        </div>
    )
}

function initialFormValues() {
    return {
        email: "",
        currentPassword: "",
        newPassword: "",
        repeatNewPassword: "",
    }
}