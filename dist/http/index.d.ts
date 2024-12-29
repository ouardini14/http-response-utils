export interface IResponse<T> {
    readonly status: number;
    readonly data: T;
    readonly mssg: string;
    setData(data: T): IResponse<T>;
    setMssg(mssg: string): IResponse<T>;
    setStatus(status: number): IResponse<T>;
}
export declare class Response<T> {
    status: number;
    data: T;
    mssg: string;
    setData(data: T): IResponse<T>;
    setMssg(mssg: string): IResponse<T>;
    setStatus(status: number): IResponse<T>;
}
