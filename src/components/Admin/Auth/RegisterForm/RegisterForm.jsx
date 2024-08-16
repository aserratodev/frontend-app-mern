import React, { useState } from "react";
import { Form } from "semantic-ui-react"
import { useFormik } from "formik";
import { Auth } from "../../../../api/auth";
import { initialValues, validationSchem } from "./RegisterForm.form";
import "./RegisterForm.scss"

const authController = new Auth()

export function RegisterForm(props) {

    const { openLogin } = props
    const [error, setError] = useState("")

    const formik = useFormik({
        initialValues: initialValues(),

        validationSchema: validationSchem(),
        validateOnChange: false,

        onSubmit: async (formValue) => {
            try {
                setError("")
                //console.log(formValue);
                await authController.register(formValue)
                openLogin()
            } catch (error) {
                setError("Error en el Servidor")
            }
        }
    })

    return (
        <Form className="register-form" onSubmit={formik.handleSubmit} >
            <Form.Input name="firstname" placeholder="Nombres" onChange={formik.handleChange} value={formik.values.firstname} error={formik.errors.firstname} />
            <Form.Input name="lastname" placeholder="Apellidos" onChange={formik.handleChange} value={formik.values.lastname} error={formik.errors.lastname} />
            <Form.Input name="email" placeholder="Correo electrónico" onChange={formik.handleChange} value={formik.values.email} error={formik.errors.email} />
            <Form.Input name="password" type="password" placeholder="Digite una Contraseña" onChange={formik.handleChange} value={formik.values.password} error={formik.errors.password} />
            <Form.Input name="repeatPassword" type="password" placeholder="Confirme la Contraseña" onChange={formik.handleChange} value={formik.values.repeatPassword} error={formik.errors.repeatPassword} />
            <Form.Checkbox name="conditionsAccepted" label="He leído y acepto las Políticas de Privacidad." onChange={ (_, data) => formik.setFieldValue("conditionsAccepted", data.checked)} checked={ formik.values.conditionsAccepted} error={formik.errors.conditionsAccepted   }/>
            <Form.Button type="submit" primary fluid loading={ formik.isSubmitting }>Crear Cuenta</Form.Button>

            <p className="register-form-error">{error}</p>
        </Form>
    )
}