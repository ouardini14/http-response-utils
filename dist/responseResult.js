"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccefulResponse = SuccefulResponse;
exports.ErrorApi = ErrorApi;
exports.ErrorData = ErrorData;
exports.ForbidenAcess = ForbidenAcess;
exports.ResponseBuilder = ResponseBuilder;
exports.HttpResponseBuilder = HttpResponseBuilder;
const http_1 = require("./http");
const common_1 = require("@nestjs/common");
function SuccefulResponse(data = {}) {
    let response = new http_1.Response();
    response.status = 200;
    response.data = data;
    response.mssg = "OK";
    return response;
}
function ErrorApi(service = "") {
    let response = new http_1.Response();
    response.status = 500;
    response.data = {};
    response.mssg = service;
    return response;
}
function ErrorData(msg = "") {
    let response = new http_1.Response();
    response.status = 400;
    response.data = {};
    response.mssg = msg;
    return response;
}
function ForbidenAcess(msg = "Forbiden access") {
    let response = new http_1.Response();
    response.status = 403;
    response.data = {};
    response.mssg = msg;
    return response;
}
function ResponseBuilder(serviceResponse) {
    if (serviceResponse.state)
        return SuccefulResponse(serviceResponse.data);
    else if (!serviceResponse.state && serviceResponse.errorType)
        return ErrorApi(serviceResponse.errorType);
    else if (!serviceResponse.state && serviceResponse.msg)
        return ErrorData(serviceResponse.msg);
    else
        return ErrorApi("UNKOWN ERROR");
}
function HttpResponseBuilder(serviceResponse) {
    const response = ResponseBuilder(serviceResponse);
    if (response.status >= 400) {
        throw new common_1.HttpException(response, response.status);
    }
    return response;
}
//# sourceMappingURL=responseResult.js.map