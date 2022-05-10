import axios from "axios";
import { Login, RecoverPassword, Register } from "models/interfaces/auth";

const useAuthProviders = () => {
    const login = (data: Login) : Promise<any> => {
        return axios.post(`/auth/login`, data);
    };  

    const register = (data: Register) : Promise<any> => {
        return axios.post(`/auth/register`, data);
    };  

    const recoverPassword = (data: RecoverPassword) : Promise<any> => {
        return axios.post(`/auth/recovery-password`, data);
    };  

    return {
        login,
        register,
        recoverPassword
    };
};

export default useAuthProviders;