import { IServiceResponse, ServiceResponse } from "./service";


export function SuccefulServiceResponse(data: any = {}): IServiceResponse<any> {
    let response = new ServiceResponse();
    response.state = true;
    response.data = data;
    response.msg = "OK";
    return response;
}

export function NoDataServiceResponse(): IServiceResponse<any> {
    let response = new ServiceResponse();
    response.state = false;
    response.data = null;
    response.msg = "NO DATA WAS FOUND";
    return response;
}

export function ErrorServiceResponse(errorType: string = ""): IServiceResponse<any> {
    let response = new ServiceResponse();
    response.state = false;
    response.data = null;
    response.msg = null;
    response.errorType = errorType;
    return response;
}

export { IServiceResponse } from "./service"