"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccefulServiceResponse = SuccefulServiceResponse;
exports.NoDataServiceResponse = NoDataServiceResponse;
exports.ErrorServiceResponse = ErrorServiceResponse;
const service_1 = require("./service");
function SuccefulServiceResponse(data = {}) {
    let response = new service_1.ServiceResponse();
    response.state = true;
    response.data = data;
    response.msg = "OK";
    return response;
}
function NoDataServiceResponse() {
    let response = new service_1.ServiceResponse();
    response.state = false;
    response.data = null;
    response.msg = "NO DATA WAS FOUND";
    return response;
}
function ErrorServiceResponse(errorType = "") {
    let response = new service_1.ServiceResponse();
    response.state = false;
    response.data = null;
    response.msg = null;
    response.errorType = errorType;
    return response;
}
//# sourceMappingURL=serviceResult.js.map