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
// module: ./controllers/categories
var categoryService = require("../service/categories");
exports.getAll = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
    var categories;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, categoryService.getAllCategories()];
            case 1:
                categories = _a.sent();
                resp.json(categories);
                return [2 /*return*/];
        }
    });
}); };
exports.getCategoryById = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
    var id, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                id = req.params['cat_id'];
                id = parseInt(id); // potential exception 
                _b = (_a = resp).json;
                return [4 /*yield*/, categoryService.getOneCategory(id)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [2 /*return*/];
        }
    });
}); };
exports.getCategoryPicture = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
    var id, picture;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params['cat_id'];
                id = parseInt(id); // potential exception
                return [4 /*yield*/, categoryService.getCategoryPicture(id)];
            case 1:
                picture = _a.sent();
                resp.set('Content-Type', 'image/jpeg')
                    .status(200)
                    .end(picture);
                return [2 /*return*/];
        }
    });
}); };
exports.addNewCategory = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
    var cat, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, categoryService.addNewCategory(req.body)];
            case 1:
                cat = _a.sent();
                resp.json(cat);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                resp.status(500).json({ 'error': err_1.toString() });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteCategory = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
    var id, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params['cat_id'];
                id = parseInt(id); // potential exception
                return [4 /*yield*/, categoryService.deleteCategory(id)];
            case 1:
                _a.sent();
                resp.end();
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                resp.status(500).json({ error: err_2.toString() });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
