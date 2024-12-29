import { IServiceResponse } from "./service";
export declare function SuccefulServiceResponse(data?: any): IServiceResponse<any>;
export declare function NoDataServiceResponse(): IServiceResponse<any>;
export declare function ErrorServiceResponse(errorType?: string): IServiceResponse<any>;
export { IServiceResponse } from "./service";
