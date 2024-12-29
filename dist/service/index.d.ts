export interface IServiceResponse<T> {
    state: boolean;
    data?: T;
    msg: string;
    errorType?: string | any;
    setData(data: T): IServiceResponse<T>;
    setMsg(mssg: string): IServiceResponse<T>;
    setState(status: boolean): IServiceResponse<T>;
    setErrorType(status: string): IServiceResponse<T>;
}
export declare class ServiceResponse<T> {
    state: boolean;
    data?: T;
    msg: string;
    errorType?: string;
    setData(data: T): ServiceResponse<T>;
    setMsg(mssg: string): ServiceResponse<T>;
    setErrorType(errorType: string): ServiceResponse<T>;
    setState(state: boolean): ServiceResponse<T>;
}
