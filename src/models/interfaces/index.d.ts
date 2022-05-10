export interface IAction {
    onSuccess: (data?: any) => void,
    onError: (error?: any) => void,
}