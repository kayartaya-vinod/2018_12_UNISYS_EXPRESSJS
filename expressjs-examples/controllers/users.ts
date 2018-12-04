// ./controllers/users
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'TOPSECRET'; // must match in authenticate middleware

export const login = async (req, resp) => {

    let username = req.body.username;
    let password = req.body.password;

    if (username === 'vinod' && password === 'bigsecret') { // to be verified against DB
        let user = {
            id: 1,
            name: 'Vinod Kumar K',
            email: 'vinod@vinod.co',
            city: 'Bangalore'
        }; /// user data pulled from DB
        resp.json({ user, token: jwt.sign(user, SECRET_KEY) });
    }
    else {
        resp.status(401).end('Invalid credentials')
    }
}