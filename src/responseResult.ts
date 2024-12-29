import { IResponse } from "./http";
import { Response } from "./http";
import { IServiceResponse } from "./service";


export function SuccefulResponse(data: any = {}): IResponse<any> {
    let response = new Response();
    response.status = 200;
    response.data = data;
    response.mssg = "OK";
    return response;
}


export function ErrorApi(service: string = ""): IResponse<any> {
    let response = new Response();
    response.status = 500;
    response.data = {};
    response.mssg = "Error Service " + service;
    return response;
}


export function ErrorData(msg: string = ""): IResponse<any> {
    let response = new Response();
    response.status = 400;
    response.data = {};
    response.mssg = msg;
    return response;
}

export function ForbidenAcess(msg: string = "Forbiden access"): IResponse<any> {
    let response = new Response();
    response.status = 403;
    response.data = {};
    response.mssg = msg;
    return response;
}

export function ResponseBuilder(serviceResponse: IServiceResponse<any>): IResponse<any> {
    if (serviceResponse.state)
        return SuccefulResponse(serviceResponse.data);
    else if (!serviceResponse.state && serviceResponse.errorType)
        return ErrorApi(serviceResponse.errorType);
    else if (!serviceResponse.state && serviceResponse.msg)
        return ErrorData(serviceResponse.msg);
    else
        return ErrorApi("UNKOWN ERROR")
}

export { IResponse } from "./http";