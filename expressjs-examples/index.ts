const express = require('express');
import { getAll as getAllCategories, getCategoryById } from './controllers/categories';

const app = express();
const port = 3000

// enable CORS through a middleware
app.use((req, resp, next) => { 
    resp.set('Access-Control-Allow-Origin', '*');
    resp.set('Access-Control-Allow-Methods', '*');
    resp.set('Access-Control-Allow-Headers', '*');
    next(); // pass the control to the next avaialble middleware
});

app.get('/api/categories/', getAllCategories);
app.get('/api/categories/:cat_id', getCategoryById);

app.listen(port, () => console.log(`Server started at port ${port}`));
console.log('Please wait till server starts :)');