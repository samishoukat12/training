"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserListRelationFilter = class UserListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereInput_1.UserWhereInput)
], UserListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereInput_1.UserWhereInput)
], UserListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereInput_1.UserWhereInput)
], UserListRelationFilter.prototype, "none", void 0);
UserListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserListRelationFilter", {
        isAbstract: true
    })
], UserListRelationFilter);
exports.UserListRelationFilter = UserListRelationFilter;
