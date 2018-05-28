"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const axios_1 = require("axios");
class APIService {
    constructor(server, personalKey, API, preSend) {
        this.server = server;
        this.personalKey = personalKey;
        this.personalKey = `Bearer ${this.personalKey}`;
        this.preSend = preSend || this.send;
        return this.toFinal(API, server);
    }
    fnHandler(route, method, personalKey, ...args) {
        args = this.validateArgs(method.Name, args, method.RequiredArgs, method.TotalArgs);
        route = this.getRoute(route, method, args);
        let query = this.getQuery(method.Verb, method.QueryParameters, args);
        args.splice(0, 0, this.personalKey);
        let Headers = this.getHeaders(method.Verb, method.HeaderParameters, args);
        let Body = args[0];
        let retObj = {
            headers: Headers,
            verb: method.Verb,
            route,
        };
        if (query)
            retObj.query = query;
        if (Body)
            retObj.body = Body;
        return this.preSend(retObj);
    }
    send(data) {
        let url = data.route + (data.query ? data.query : '');
        let headers = {
            Authorization: data.headers.Authorization
        };
        if (data.headers['X-Filter']) {
            headers['X-Filter'] = JSON.stringify(data.headers['X-Filter']);
        }
        let config = {
            method: data.verb,
            url,
            headers,
            data: data.body
        };
        return axios_1.default(config).then(res => res.data).catch(err => err.response.data);
    }
    checkListArgs(args) {
        let [page, page_size, filter] = args;
        if (typeof (page) === 'object') {
            filter = page;
            page = undefined;
        }
        else if (typeof (page_size) === 'object') {
            filter = page_size;
            page_size = undefined;
        }
        let error = !(page === undefined || util_1.isNumber(page)) || !(page_size === undefined || util_1.isNumber(page_size)) || !(filter === undefined || filter instanceof Object);
        if (error) {
            throw new Error('Arguments are not valid');
        }
        return [page, page_size, filter];
    }
    validateArgs(fnName, args, required, total) {
        if (fnName === 'list') {
            return this.checkListArgs(args);
        }
        else {
            let argCount = args.length;
            let argsCountMatch = argCount >= required && argCount <= total;
            if (!argsCountMatch) {
                throw new Error('Argument count does not match');
            }
            return args;
        }
    }
    getQuery(method, QueryParameters, args) {
        let query;
        if (method === 'get') {
            query = QueryParameters.map((parameter, i) => args[i] ? `${parameter}=${args[i]}` : '').filter(f => f).join('&');
            query = query ? `?${query}` : '';
            args.splice(0, QueryParameters.length);
        }
        return query;
    }
    getHeaders(method, HeaderParameters, args) {
        let Headers = {};
        for (const parameter of HeaderParameters) {
            if (args[0]) {
                Headers[parameter] = args[0];
                args.splice(0, 1);
            }
        }
        return Headers;
    }
    getRoute(route, method, args) {
        if (method.Keep) {
            route += `/${method.Name}`;
        }
        for (let i = 0; method.PathParameters[i]; i++) {
            let { name } = method.PathParameters[i];
            route = route.replace(`{${name}}`, args[0]);
            args.splice(0, 1);
        }
        return route;
    }
    toFinal(node, route) {
        let api = {};
        if (node.Class) {
            api = (arg) => {
                let _route = route + node.Class.Route;
                for (const parameter of node.Class.PathParameter) {
                    _route = _route.replace(`{${parameter}}`, arg);
                }
                return this.toFinal.bind(this)(node.Class, _route);
            };
        }
        for (const property of node.Properties) {
            api[property.FormatName] = this.toFinal.bind(this)(property, route + property.Route);
        }
        for (const method of node.Methods) {
            api[method.fnName] = (...args) => {
                let _route = route;
                if (method.PathParameters.length) {
                    _route += method.RelativeRoute;
                }
                return this.fnHandler(_route, method, this.personalKey, ...args);
            };
        }
        return api;
    }
}
exports.APIService = APIService;
//# sourceMappingURL=APIMaker.js.map