"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCommentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CommentsWhereInput_1 = require("../../../inputs/CommentsWhereInput");
let DeleteManyCommentsArgs = class DeleteManyCommentsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CommentsWhereInput_1.CommentsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CommentsWhereInput_1.CommentsWhereInput)
], DeleteManyCommentsArgs.prototype, "where", void 0);
DeleteManyCommentsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyCommentsArgs);
exports.DeleteManyCommentsArgs = DeleteManyCommentsArgs;
