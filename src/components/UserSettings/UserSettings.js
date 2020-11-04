import React, { useState } from 'react'
import {
    EuiButton,
    EuiFieldText,
    EuiForm,
    EuiFormRow,
    EuiFieldPassword,
} from '@elastic/eui'
import { useMutation } from '@apollo/client'
import { UPDATE_USER } from '../../gql/user'
import { decodeToken, getToken } from '../../utils/token'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './UserSettings.scss'

export default function UserSettings() {
    const [error, setError] = useState(null)
    const [updateUser] = useMutation(UPDATE_USER)
    const history = useHistory()
    const formik = useFormik({
        initialValues: initialFormValues(),
        validationSchema: Yup.object({
            email: Yup.string().email().required(true),
            currentPassword: Yup.string().required(true),
            newPassword: Yup.string().required(true).oneOf([Yup.ref("repeatNewPassword")]),
            repeatNewPassword: Yup.string().required(true).oneOf([Yup.ref("newPassword")]),
        }),
        onSubmit: async (formData) => {
            try {
                const result = await updateUser({
                    variables: {
                        input: {
                            idUser: decodeToken(getToken('token')).id,
                            email: formData.email,
                            currentPassword: formData.currentPassword,
                            newPassword: formData.newPassword,
                        }
                    }
                })
                const { data } = result

                if (!data.updateUser) {
                    console.log(data.updateUser);
                    setError(true)
                } else {
                    history.push('/')
                }


            } catch (error) {
                console.log(error);
            }
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
                {error ? <p className="error">Ha habido un error</p> : null}
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