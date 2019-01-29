"use strict";
exports.__esModule = true;
var jwt = require('jsonwebtoken');
exports["default"] = function (req, resp, next) {
    // check for 'Authorization' header in the request
    // Authorization: Bearer abc.bcd.def
    var auth = req.get('authorization');
    // if not present respond with 401 (unauthorized)
    if (!auth) {
        resp.status(401).end('Authorization header is missing');
        return;
    }
    var token = auth.split(' ')[1];
    if (!token) {
        resp.status(401).end('Authorization token is missing');
        return;
    }
    // if present, verify the same
    var SECRET_KEY = 'TOPSECRET';
    try {
        jwt.verify(token, SECRET_KEY);
        // if okay then pass the control to the next middleware
        next();
    }
    catch (err) {
        // else respond with 403 (forbidden)
        resp.status(403).end('Authorization token verification failed!');
    }
};
