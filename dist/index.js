"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var type_graphql_1 = require("type-graphql");
var apollo_server_express_1 = require("apollo-server-express");
var client_1 = require("@prisma/client");
var graphqlHTTP = require('express-graphql').graphqlHTTP;
// import { resolvers } from "@generated/type-graphql";
var typedi_1 = __importDefault(require("typedi"));
var express_1 = __importDefault(require("express"));
var type_graphql_2 = require("@generated/type-graphql");
var autogenerated_resolvers_1 = require("./src/graphql/resolvers/autogenerated-resolvers");
var auth_service_1 = require("./src/graphql/services/auth-service");
var auth_resolver_1 = require("./src/graphql/resolvers/auth-resolver");
var typedi_tokens_1 = require("./src/graphql/types/typedi-tokens");
var PORT = process.env.port || 3000;
var prisma = new client_1.PrismaClient();
typedi_1.default.set(typedi_tokens_1.prismaToken, prisma);
(0, type_graphql_2.applyResolversEnhanceMap)(autogenerated_resolvers_1.resolversEnhanceMap);
(0, type_graphql_2.applyRelationResolversEnhanceMap)(autogenerated_resolvers_1.relationResolversEnhanceMap);
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var authService, schema, app, apolloServer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    authService = typedi_1.default.get(auth_service_1.AuthService);
                    return [4 /*yield*/, (0, type_graphql_1.buildSchema)({
                            resolvers: __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], (0, autogenerated_resolvers_1.getAutogeneratedResolvers)(), true), (0, autogenerated_resolvers_1.AutogeneratedCreateResolver)(), true), (0, autogenerated_resolvers_1.AutogeneratedUpdateResolver)(), true), (0, autogenerated_resolvers_1.AutogeneratedDeleteResolver)(), true), [
                                auth_resolver_1.AuthResolver,
                            ], false),
                            authChecker: authService.isUserAuthorized,
                            container: typedi_1.default,
                            validate: true
                        })];
                case 1:
                    schema = _a.sent();
                    app = (0, express_1.default)();
                    apolloServer = new apollo_server_express_1.ApolloServer({
                        schema: schema,
                        context: function (_a) {
                            var req = _a.req, res = _a.res;
                            var authHeader = req.headers.authorization || "";
                            var user = authService.getUserInfo(authHeader);
                            console.log("user", user);
                            return { prisma: prisma, req: req, res: res, user: user };
                        },
                    });
                    app.get('/', function (req, res) {
                        console.log("server working");
                    });
                    return [4 /*yield*/, apolloServer.start()];
                case 2:
                    _a.sent();
                    apolloServer.applyMiddleware({ app: app });
                    app.listen(PORT, function () {
                        console.log("Server running at port " + PORT);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
main().catch(function (error) {
    console.log("Eror", error);
});
//# sourceMappingURL=index.js.map