import { AnyAction, Dispatch } from "redux";

interface Transaction {
    status: boolean;
}

interface Message {
    type: "success" | "error";
    content: string;
}

export interface ResponseApi<Data> {
    transaction: Transaction;
    message: Message;
    data: Data;
}

export type ActionReturns = (dispatch?: Dispatch) => void;