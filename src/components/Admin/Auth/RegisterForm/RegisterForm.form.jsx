import * as Yup from "yup"

export function initialValues() {
    return {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        repeatPassword: "",
        conditionsAccepted: false,
    }
}

export function validationSchem(){
    return Yup.object({
        firstname: Yup.string().required("Campo Obligatorio"),
        lastname: Yup.string().required("Campo Obligatorio"),
        email: Yup.string().email("El email no es válido").required("Campo Obligatorio"),
        password: Yup.string().required("Campo Obligatorio"),
        repeatPassword: Yup.string().required("Campo Obligatorio").oneOf([Yup.ref("password")], "Las contraseñas deben coincidir."),
        conditionsAccepted: Yup.bool().isTrue(true),
    })
}