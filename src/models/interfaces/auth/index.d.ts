import { IAction } from "..";

export interface Login {
    email: string,
    password: string
}

export interface Register {
    name: string,
    last_name: string,
    profesion: string,
    username: string,
    phone: string,
    email: string,
    password: string
}

export interface RecoverPassword {
    email: string,
    password: string
}

export interface ILoginAction extends IAction {
    login: FormData<Login>
}

export interface IRegisterAction extends IAction {
    register: FormData<Register>
}

export interface IRecoverPasswordAction extends IAction {
    recover: FormData<RecoverPassword>
}