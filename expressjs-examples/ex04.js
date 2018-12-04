const jwt = require('jsonwebtoken');

const SECRET_KEY = 'TOPSECRET';
const encryptedPayload = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVmlub2QiLCJjaXR5IjoiQmFuZ2Fsb3JlIiwiZW1haWwiOiJ2aW5vZEB2aW5vZC5jbyJ9.X8fTn_vkQ5zHAROyVE_53n1p1wOFaEEPs-UyKQTYw1Y';

try{
    let decryptedPayload = jwt.verify(encryptedPayload, SECRET_KEY);
    console.log('Payload decrypted successfully', decryptedPayload);
}
catch(err){
    console.log('Payload is invalid or tampered!')
}
