const jwt = require('jsonwebtoken');

const SECRET_KEY = 'TOPSECRET';

const payload = {
    name: 'Vinod',
    city: 'Bangalore',
    email: 'vinod@vinod.co'
}

const encryptedPayload = jwt.sign(payload, SECRET_KEY);

console.log(encryptedPayload);