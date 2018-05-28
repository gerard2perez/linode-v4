export interface SMethod {
    Name: string;
    fnName: string;
    QueryParameters: any[];
    PathParameters: any[];
    HeaderParameters: any[];
    RequiredArgs: number;
    TotalArgs: number;
    Verb: string;
    Keep: boolean;
    RelativeRoute: any;
}
export interface SNode {
    FormatName: string;
    Class: SNode;
    Properties: SNode[];
    Methods: SMethod[];
    Route: string;
    PathParameter: string[];
}
export interface IAPICall {
    verb: string;
    route: string;
    query?: string;
    body?: any;
    headers: any;
}
export declare type APIPreSend = (data: IAPICall) => Promise<any>;
export declare class APIService {
    private server;
    private personalKey;
    private preSend;
    fnHandler(route: string, method: SMethod, personalKey: string, ...args: any[]): Promise<any>;
    send(data: IAPICall): Promise<any>;
    constructor(server: string, personalKey: string, API: SNode, preSend?: APIPreSend);
    checkListArgs(args: any[]): any[];
    validateArgs(fnName: string, args: any[], required: number, total: number): any[];
    getQuery(method: string, QueryParameters: string[], args: any[]): any;
    getHeaders(method: string, HeaderParameters: string[], args: any[]): {};
    getRoute(route: string, method: SMethod, args: any): string;
    toFinal(node: SNode, route: string): any;
}
