"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCommentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindFirstCommentsArgs_1 = require("./args/FindFirstCommentsArgs");
const Comments_1 = require("../../../models/Comments");
const helpers_1 = require("../../../helpers");
let FindFirstCommentsResolver = class FindFirstCommentsResolver {
    async findFirstComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).comments.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Comments_1.Comments, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstCommentsArgs_1.FindFirstCommentsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindFirstCommentsResolver.prototype, "findFirstComments", null);
FindFirstCommentsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Comments_1.Comments)
], FindFirstCommentsResolver);
exports.FindFirstCommentsResolver = FindFirstCommentsResolver;
