"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const APIMaker_1 = require("./APIMaker");
const API = require('./specification.json');
class Linodev4 {
    constructor(key, config, fn) {
        return new APIMaker_1.APIService(API.remote_server, key, API, fn, config);
    }
}
exports.Linodev4 = Linodev4;
exports.default = Linodev4;
//# sourceMappingURL=index.js.map