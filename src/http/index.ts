export interface IResponse<T> {

    readonly status: number,
    readonly data: T,
    readonly mssg: string,

    setData(data: T): IResponse<T>
    setMssg(mssg: string): IResponse<T>
    setStatus(status: number): IResponse<T>
}


export class Response <T> {

    status: number;
    data: T;
    mssg: string;

    setData(data: T): IResponse<T> {
        this.data = data;
        return this;
    }

    setMssg(mssg: string): IResponse<T> {
        this.mssg = mssg;
        return this;
    }

    setStatus(status: number): IResponse<T> {
        this.status = status;
        return this;
    }
}