import useApi from "api"
import { IContactData } from "models/interfaces/contact";
import { trackPromise } from "react-promise-tracker";

const useContactServices = () => {
    const { useProviders } = useApi();
    const { useContactProviders } = useProviders();
    const { sendContact } = useContactProviders();

    const sendContactService = (data: IContactData) : Promise<any> => {
        return new Promise(async(resolve, reject) => {
            try {
                resolve(await trackPromise(sendContact(data)));
            } catch (error) {
                reject(error);
            }
        });
    }

    return {
        sendContactService
    }
}

export default useContactServices;