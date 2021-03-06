"use strict";
exports.__esModule = true;
exports.enableCors = function (req, resp, next) {
    resp.set('Access-Control-Allow-Origin', '*');
    resp.set('Access-Control-Allow-Methods', '*');
    resp.set('Access-Control-Allow-Headers', '*');
    next(); // pass the control to the next avaialble middleware
};
