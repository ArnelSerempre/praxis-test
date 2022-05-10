import { IAction } from "..";

export interface IContactData {
    name: string;
    email: string;
    message: string;
}

export interface ISendContactAction extends IAction {
    data: IContactData;
}