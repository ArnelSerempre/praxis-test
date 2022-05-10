import useApi from "api";
import { Login, RecoverPassword, Register } from "models/interfaces/auth";
import { trackPromise } from "react-promise-tracker";

const useAuthServices = () => {
    // Providers
    const { useProviders } = useApi();
    const { useAuthProviders } = useProviders();
    const { login, register, recoverPassword } = useAuthProviders();

    const loginService = (data: Login) : Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(login(data)));
            } catch (error) {
                reject(error);
            }
        });
    }

    const registerService = (data: Register) : Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(register(data)));
            } catch (error) {
                reject(error);
            }
        });
    }

    const recoverService = (data: RecoverPassword) : Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(recoverPassword(data)));
            } catch (error) {
                reject(error);
            }
        });
    }

    return {
        loginService,
        registerService,
        recoverService
    }
}

export default useAuthServices;