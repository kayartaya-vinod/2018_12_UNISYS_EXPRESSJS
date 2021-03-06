"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var _this = this;
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var Category_1 = require("../entity/Category");
// service layer for categories data
// async functions return Promise instance, and
// inside an async function, we can use await keyword
// to call other async functions like sync functions.
exports.getAllCategories = function () { return __awaiter(_this, void 0, void 0, function () {
    var conn, repo, categories;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.createConnection()];
            case 1:
                conn = _a.sent();
                return [4 /*yield*/, conn.getRepository(Category_1.Category)];
            case 2:
                repo = _a.sent();
                return [4 /*yield*/, repo.find()];
            case 3:
                categories = _a.sent();
                categories.forEach(function (c) { return delete c.picture; });
                return [4 /*yield*/, conn.close()];
            case 4:
                _a.sent();
                return [2 /*return*/, categories];
        }
    });
}); };
// an async function, that takes category_id as parameter
// and returns the corresponding category, if found.
exports.getOneCategory = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var conn, repo, cat;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.createConnection()];
            case 1:
                conn = _a.sent();
                return [4 /*yield*/, conn.getRepository(Category_1.Category)];
            case 2:
                repo = _a.sent();
                return [4 /*yield*/, repo.findOne(id)];
            case 3:
                cat = _a.sent();
                delete cat.picture;
                return [4 /*yield*/, conn.close()];
            case 4:
                _a.sent();
                return [2 /*return*/, cat];
        }
    });
}); };
exports.getCategoryPicture = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var conn, repo, cat;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.createConnection()];
            case 1:
                conn = _a.sent();
                return [4 /*yield*/, conn.getRepository(Category_1.Category)];
            case 2:
                repo = _a.sent();
                return [4 /*yield*/, repo.findOne(id)];
            case 3:
                cat = _a.sent();
                return [4 /*yield*/, conn.close()];
            case 4:
                _a.sent();
                return [2 /*return*/, cat.picture];
        }
    });
}); };
exports.addNewCategory = function (category) { return __awaiter(_this, void 0, void 0, function () {
    var conn, repo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // basic validations
                if (!category || typeof category != 'object') {
                    throw new Error('Category was not supplied or was not an object');
                }
                if (!category.name) {
                    throw new Error('Category name is mandatory, but was not supplied.');
                }
                return [4 /*yield*/, typeorm_1.createConnection()];
            case 1:
                conn = _a.sent();
                return [4 /*yield*/, conn.getRepository(Category_1.Category)];
            case 2:
                repo = _a.sent();
                return [4 /*yield*/, repo.insert(category)];
            case 3:
                _a.sent();
                return [4 /*yield*/, conn.close()];
            case 4:
                _a.sent();
                return [2 /*return*/, category]; // with id
        }
    });
}); };
exports.deleteCategory = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var conn;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.createConnection()];
            case 1:
                conn = _a.sent();
                return [4 /*yield*/, conn.manager["delete"](Category_1.Category, id)];
            case 2:
                _a.sent();
                return [4 /*yield*/, conn.close()];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
