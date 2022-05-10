import useApi from "api";
import { ISendContactAction } from "models/interfaces/contact";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const useContact = () => {
    // Actions
    const { useActions } = useApi();
    const { dispatch, useContactActions } = useActions();
    const { actSendContact } = useContactActions();

    // History
    const history = useHistory();

    // UseForm
    const { register, handleSubmit, reset } = useForm();

    // States
    const [open, setOpen] = useState<boolean>(false);
    const [text, setText] = useState<string>("");
    const [variant, setVariant] = useState<string>("success");

    // Handlers
    const handleContact = () => {
        history.push('/contact/form')
    }

    const handleSentContact = (data: any) => {
        if (data.name !== "" && data.email !== "" && data.message !== "") {
            const request: ISendContactAction = {
                onSuccess: () => {
                    setOpen(true);
                    setText("Se envio la solicitud de contacto exitosamente.");
                    setVariant("success");
                    reset({
                        name: "",
                        email: "",
                        message: ""
                    })
                },
                onError: (response) => {
                    setOpen(true);
                    setText(response);
                    setVariant("error");
                },
                data: data
            };

            dispatch(actSendContact(request));
        } else {
            console.log('hola')
            setOpen(true);
            setText("Debes ingresar todos los datos para poder enviar el formulario de contacto.");
            setVariant("error");
        }
    }

    const handleClose = () => {
        setOpen(false);
        setText("");
    }

    // States
    const [width, setWidth] = useState<number>(window.innerWidth);

    // Listeners
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    return {
        handleContact,
        width,
        register,
        handleSentContact,
        handleSubmit,
        open,
        text,
        variant,
        handleClose
    };
}

export default useContact;