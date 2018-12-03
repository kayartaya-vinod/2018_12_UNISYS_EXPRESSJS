const express = require('express');
import { getAll as getAllCategories, getCategoryById } from './controllers/categories';

const app = express();
const port = 3000

app.get('/api/categories/', getAllCategories);
app.get('/api/categories/:cat_id', getCategoryById);

app.listen(port, () => console.log(`Server started at port ${port}`));
console.log('Please wait till server starts :)');