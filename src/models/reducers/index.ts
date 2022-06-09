import {combineReducers} from "@reduxjs/toolkit";
import useAuthReducers from "./auth";
import useBlogReducers from "./blog";
import useCuidadoresReducers from "./cuidadores";
import useGeneralReducers from "./general";
import useHomeReducers from "./Home";
import usePacientesReducers from "./pacientes";

const useReducers = () => {
    const { assets, menus } = useGeneralReducers();
    const {
        bannerHome,
        backgroundHome,
        sectionsHome,
        misionHome,
        valoresHome,
        teamHome,
        hover
    } = useHomeReducers();

    const { post } = useBlogReducers();
    
    // Pacientes
    const { assetsPacientes, getPostsPacientes } = usePacientesReducers();
    const { contentCuidadores, contentCuidadoresArtesanal } = useCuidadoresReducers();
    const { login } = useAuthReducers();

    return combineReducers(
        Object.assign({
            assets,
            menus,
            bannerHome,
            backgroundHome,
            sectionsHome,
            misionHome,
            valoresHome,
            teamHome,
            post,
            assetsPacientes,
            getPostsPacientes,
            contentCuidadores,
            contentCuidadoresArtesanal,
            login,
            hover
        })
    );
}

export default useReducers;