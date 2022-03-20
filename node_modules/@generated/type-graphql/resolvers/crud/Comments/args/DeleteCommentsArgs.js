"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCommentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CommentsWhereUniqueInput_1 = require("../../../inputs/CommentsWhereUniqueInput");
let DeleteCommentsArgs = class DeleteCommentsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CommentsWhereUniqueInput_1.CommentsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CommentsWhereUniqueInput_1.CommentsWhereUniqueInput)
], DeleteCommentsArgs.prototype, "where", void 0);
DeleteCommentsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteCommentsArgs);
exports.DeleteCommentsArgs = DeleteCommentsArgs;
