import useApi from "api";
import useModels from "models";
import {useState} from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useHeader = () => {
    const history = useHistory();

    // States
    const [open, setOpen] = useState<boolean>(false);
    const [expand, setExpand] = useState<boolean>(false);
    const [expand1, setExpand1] = useState<boolean>(false);
    const [expand4, setExpand4] = useState<boolean>(false);
    const [expand2, setExpand2] = useState<boolean>(false);
    const [expand3, setExpand3] = useState<boolean>(false);

    // Actions
    const { useActions } = useApi();
    const { dispatch, useAuthActions } = useActions();
    const { actLogout } = useAuthActions();

    // Handlers
    const closeDrawer = () : void => {
        setOpen(false);
    }

    const openDrawer = () : void => {
        setOpen(true);
    }

    const expandMenu = (type: string) : void => {
        if(type === "menu1"){
            expand4 ? setExpand4(false) : setExpand4(true);
        }
        if(type === "menu2"){
            expand2 ? setExpand2(false) : setExpand2(true);
        }
        if(type === "menu3"){
            expand3 ? setExpand3(false) : setExpand3(true);
        }
        if(type === "personal"){
            if(expand1){
                setExpand1(false);
            }else{
                setExpand1(true);
            }
        }else{
            if(expand){
                setExpand(false);
            }else{
                setExpand(true);
            }
        }
        
    }

    const closeSesion = () => {
        dispatch(actLogout(() => {
            history.push('/')
        }))
    }

    // Models
    const { useSelectors } = useModels();
    const { useAuthSelectors } = useSelectors();
    const { loginSelector } = useAuthSelectors();
    const login = useSelector(loginSelector);

    return {
        open,
        closeDrawer,
        openDrawer,
        expandMenu,
        expand,
        login,
        expand1,
        closeSesion,
        expand2,
        expand3,
        expand4
    }
}

export default useHeader;