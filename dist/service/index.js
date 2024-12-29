"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceResponse = void 0;
class ServiceResponse {
    setData(data) {
        this.data = data;
        return this;
    }
    setMsg(mssg) {
        this.msg = mssg;
        return this;
    }
    setErrorType(errorType) {
        this.errorType = errorType;
        return this;
    }
    setState(state) {
        this.state = state;
        return this;
    }
}
exports.ServiceResponse = ServiceResponse;
//# sourceMappingURL=index.js.map