
export interface IServiceResponse<T> {
    state: boolean;
    data?: T;
    msg: string;
    errorType?: string | any;

    setData(data: T): IServiceResponse<T>
    setMsg(mssg: string): IServiceResponse<T>
    setState(status: boolean): IServiceResponse<T>
    setErrorType(status: string): IServiceResponse<T>
}


export class ServiceResponse<T> {

    state: boolean;
    data?: T;
    msg: string;
    errorType?: string;

    setData(data: T): ServiceResponse<T> {
        this.data = data;
        return this;
    }

    setMsg(mssg: string): ServiceResponse<T> {
        this.msg = mssg;
        return this;
    }

    setErrorType(errorType: string): ServiceResponse<T> {
        this.errorType = errorType;
        return this;
    }

    setState(state: boolean): ServiceResponse<T> {
        this.state = state;
        return this;
    }
}
