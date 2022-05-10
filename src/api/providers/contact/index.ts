import axios from "axios";

const useContactProviders = () => {
    const sendContact = (data: any) : Promise<any> => {
        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('message', data.message);
        return axios.post('/contact/send-contact', formData);
    }

    return {
        sendContact,
    }
}

export default useContactProviders;