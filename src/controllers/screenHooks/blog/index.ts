import useApi from "api";
// import useModels from "models";
import { IBlogAssets } from "models/interfaces/blog";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { trackPromise } from "react-promise-tracker";
// import axios from "axios";
// import { useForm } from "react-hook-form";
import { IAction } from "models/interfaces";

const useBlog = (page: string) => {
    /** Actions */
    const { useActions } = useApi();
    const { dispatch, useBlogActions } = useActions();
    const { actGetBlogAssets, actGetRecentPosts, actGetPosts } = useBlogActions();

    /** States */
    const [postsAssets, setPostAssets] = useState<IBlogAssets>({});
    const [recentPosts, setRecentPosts] = useState([]);
    const [posts, setPosts] = useState([]);

    /** Effects */
    useEffect(() => {
        if(page === "principal"){
            const request : IAction = {
                onError: (error: any) => console.log(error),
                onSuccess: (data: IBlogAssets) => setPostAssets(data)
            }

            dispatch(actGetBlogAssets(request));

            const requestRecent : IAction = {
                onError: (error: any) => console.log(error),
                onSuccess: (data: any) => setRecentPosts(data)
            }

            dispatch(actGetRecentPosts(requestRecent));

            const requestPosts : IAction = {
                onError: (error: any) => console.log(error),
                onSuccess: (data: any) => setPosts(data)
            }

            dispatch(actGetPosts(requestPosts));
        }

        // eslint-disable-next-line
    }, [dispatch, page]);

    return {
        postsAssets,
        recentPosts,
        posts
    }

















    // // Styles
    // const [comments, setComments] = useState<any>();
    // const [recient, setRecient] = useState<any>();
    // const [blogs, setBlogs] = useState<any>();
    // const [post, setPost] = useState<any>({});

    // const getComments = () : Promise<any> => {
    //     return axios.get(`${process.env.REACT_APP_BASE_URL_API}/wp/v2/comments`)
    //     .then((res: any) => {
    //         setComments(res.data);
    //     }).catch((err: any) => {
    //         console.log(err);
    //     })
    // }

    // const getLastedsPosts = () : Promise<any> => {
    //     return axios.get(`${process.env.REACT_APP_BASE_URL_API}/blog/get-lasted-post`)
    //     .then((res: any) => {
    //         setRecient(res.data.data);
    //     }).catch((err: any) => {
    //         console.log(err);
    //     })
    // }

    // const getPosts = () : Promise<any> => {
    //     return axios.get(`${process.env.REACT_APP_BASE_URL_API}/blog/get-posts`)
    //     .then((res: any) => {
    //         setBlogs(res.data.data);
    //     }).catch((err: any) => {
    //         console.log(err);
    //     })
    // }

    // const {useSelectors} = useModels();
    // const {useAuthSelectors} = useSelectors()
    // const { loginSelector } = useAuthSelectors();
    // const login = useSelector(loginSelector);

    // const { control, handleSubmit, reset } = useForm()

    // const handleComment = (data: any) => {
    //     trackPromise(setComment(data));
    // }

    // const setComment = (data:any) : Promise<any> => {
    //     let formData = new FormData();
    //     formData.append('id', login.user.id);
    //     formData.append('post_id', post.ID);
    //     formData.append('comment', data.comment);
    //     formData.append('fullname', login.user.fullname);
    //     formData.append('email', login.user.email);
    //     return axios.post(`${process.env.REACT_APP_BASE_URL_API}/blog/set-comment`, formData)
    //     .then((res: any) => {
    //         reset({
    //             comment: ""
    //         });
    //     }).catch((err: any) => {
    //         console.log(err);
    //     })
    // }


    // useEffect(() => {
    //     trackPromise(getComments());
    //     trackPromise(getLastedsPosts());
    //     trackPromise(getPosts());
    //     // eslint-disable-next-line
    // }, []);

    // // Params
    // const { id } = useParams();

    // // Actions
    // const { useActions } = useApi();
    // const { dispatch, useBlogActions } = useActions();
    // const { actGetPost } = useBlogActions();

    // // Effects
    // useEffect(() => {
    //     const request : IGetBlogAction = {
    //         id: id,
    //         onSuccess: (data: any) => {
    //             setPost(data)
    //         },
    //         onError: (error: any) => {
    //             console.log(error);
    //         }
    //     }   
    //     dispatch(actGetPost(request));
    //     // eslint-disable-next-line
    // }, [])

    // return {
    //     recient,
    //     blogs,
    //     post,
    //     comments,
    //     handleComment,
    //     control,
    //     handleSubmit,
    //     login
    // };
}

export default useBlog;