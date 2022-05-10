import axios from "axios";

const useCuidadoresProviders = () => {
    const getContent = () : Promise<any> => {
        return axios.get('/cuidadores/get-assets-cuidadores');
    }

    const getContentArtesanal = () : Promise<any> => {
        return axios.get('/cuidadores/get-assets-artesanal');
    }

    return {
        getContent,
        getContentArtesanal
    }
}

export default useCuidadoresProviders;