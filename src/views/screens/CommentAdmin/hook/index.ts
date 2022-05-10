import axios from "axios";
import useModels from "models";
import { useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useActiveUsers = () => {
    const history = useHistory()

    // Controllers
    const { useSelectors } = useModels();
    const { useAuthSelectors } = useSelectors();
    const { loginSelector } = useAuthSelectors();
    const login = useSelector(loginSelector);

    // States
    const [comments, setComments] = useState<any>([]);
    const [totalPag] = useState<number>(1);
    const [page] = useState<number>(1);

    // Handlers
    const getComments = () : Promise<any> => {
        return axios.get(`${process.env.REACT_APP_BASE_URL_API}/wp/v2/comments`)
        .then((res:any) => {
            console.log(res.data)
            setComments(res.data);
        }).catch((err: any) => {
            console.log(err);
        })
    }

    const deleteCommentFinal = (id: number) : Promise<any> => {
        return axios.get(`${process.env.REACT_APP_BASE_URL_API}/comments/delete-comment?id=${id}`)
        .then((res:any) => {
            trackPromise(getComments());
        }).catch((err: any) => {
            console.log(err);
        })
    }

    const deleteComment = (id: number) => {
        trackPromise(deleteCommentFinal(id));
    }
    
    // useEffect
    useEffect(() => {
        if(login.token && login.user.role !== "Administrador"){
            history.push('/')
        }
        trackPromise(getComments());    
        // eslint-disable-next-line
    }, [])

    return {
        comments,
        totalPag,
        page,
        deleteComment,
        // activateUser,
        // deletedUser
    };
}

export default useActiveUsers;