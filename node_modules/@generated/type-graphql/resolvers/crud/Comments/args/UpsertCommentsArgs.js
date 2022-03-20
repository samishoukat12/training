"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCommentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CommentsCreateInput_1 = require("../../../inputs/CommentsCreateInput");
const CommentsUpdateInput_1 = require("../../../inputs/CommentsUpdateInput");
const CommentsWhereUniqueInput_1 = require("../../../inputs/CommentsWhereUniqueInput");
let UpsertCommentsArgs = class UpsertCommentsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CommentsWhereUniqueInput_1.CommentsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CommentsWhereUniqueInput_1.CommentsWhereUniqueInput)
], UpsertCommentsArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CommentsCreateInput_1.CommentsCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CommentsCreateInput_1.CommentsCreateInput)
], UpsertCommentsArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CommentsUpdateInput_1.CommentsUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CommentsUpdateInput_1.CommentsUpdateInput)
], UpsertCommentsArgs.prototype, "update", void 0);
UpsertCommentsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertCommentsArgs);
exports.UpsertCommentsArgs = UpsertCommentsArgs;
