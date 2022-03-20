"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = exports.createAuthService = void 0;
var typedi_1 = require("typedi");
var client_1 = require("@prisma/client");
var typedi_tokens_1 = require("../types/typedi-tokens");
var typedi_2 = __importDefault(require("typedi"));
var jwt_decode_1 = __importDefault(require("jwt-decode"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var mail_1 = require("../../utils/mail");
var createAuthService = function () {
    return new AuthService(typedi_2.default.get(typedi_tokens_1.prismaToken), jwt_decode_1.default);
};
exports.createAuthService = createAuthService;
var AuthService = /** @class */ (function () {
    function AuthService(prisma, jwtDecode) {
        var _this = this;
        this.prisma = prisma;
        this.jwtDecode = jwtDecode;
        this.isUserAuthorized = function (token) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("run");
                return [2 /*return*/, true];
            });
        }); };
        this.login = function (email, password) { return __awaiter(_this, void 0, void 0, function () {
            var user, jwtKey, jstoken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.user.findUnique({
                            where: {
                                email: email,
                            },
                            rejectOnNotFound: true,
                        })];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, bcryptjs_1.default.compare(password, user.password)];
                    case 2:
                        if (!(_a.sent())) {
                            throw new Error("Your password is not correct");
                        }
                        jwtKey = "dasgvjtnkkweroutojfldmvturhglmslfjgibtrle";
                        jstoken = jsonwebtoken_1.default.sign({ id: user.id, role: user.role, email: user.email, name: user.name }, jwtKey, { expiresIn: 5 });
                        user.token = jstoken;
                        return [2 /*return*/, user];
                }
            });
        }); };
        this.register = function (_a) {
            var id = _a.id, name = _a.name, email = _a.email, password = _a.password, cnic = _a.cnic, phone = _a.phone, role = _a.role;
            return __awaiter(_this, void 0, void 0, function () {
                var checkExistence, encryptedPassword, user, portal;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.prisma.user.findUnique({
                                where: {
                                    email: email,
                                },
                            })];
                        case 1:
                            checkExistence = _b.sent();
                            if (checkExistence) {
                                throw new Error("Email Already Exist");
                            }
                            return [4 /*yield*/, bcryptjs_1.default.hash(password, 10)];
                        case 2:
                            encryptedPassword = _b.sent();
                            return [4 /*yield*/, this.prisma.user.create({
                                    data: {
                                        name: name,
                                        email: email,
                                        password: encryptedPassword,
                                        cnic: cnic,
                                        phone: phone,
                                    },
                                })];
                        case 3:
                            user = _b.sent();
                            portal = process.env.STAFFPORTAL;
                            return [4 /*yield*/, (0, mail_1.sendEmail)(portal, email, password, name)];
                        case 4:
                            _b.sent();
                            return [2 /*return*/, user];
                    }
                });
            });
        };
    }
    AuthService.prototype.getUserInfo = function (authHeader) {
        try {
            var jwtKey = "dasgvjtnkkweroutojfldmvturhglmslfjgibtrle";
            var decodedToken = jsonwebtoken_1.default.verify(authHeader, jwtKey);
            return {
                roles: decodedToken ? [decodedToken.role] : [],
                id: decodedToken ? decodedToken.id : "",
            };
        }
        catch (e) {
            return {
                roles: [],
                id: "",
            };
        }
    };
    AuthService = __decorate([
        (0, typedi_1.Service)({ factory: exports.createAuthService }),
        __param(0, (0, typedi_1.Inject)(typedi_tokens_1.prismaToken)),
        __metadata("design:paramtypes", [client_1.PrismaClient, Function])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth-service.js.map