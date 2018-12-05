const express = require('express');
const bodyParser = require('body-parser');
import * as categoryControllers from './controllers/categories';
import { enableCors } from './middlewares/CORS';
import authenticate from './middlewares/authenticate';
import { login } from './controllers/users';

const app = express();
const port = 3000

app.use(express.static('public_html'));

// enable CORS through a middleware
app.use(enableCors);

// enable parsing of request payload into JSON object
app.use(bodyParser.json());

const categoryRoutePrefix = '/api/categories/';

app.get(categoryRoutePrefix, categoryControllers.getAll);
app.get(`${categoryRoutePrefix}:cat_id`, categoryControllers.getCategoryById);
app.get(`${categoryRoutePrefix}:cat_id/picture`, categoryControllers.getCategoryPicture);

// authenticate middleware applied:
app.post(categoryRoutePrefix, authenticate, categoryControllers.addNewCategory);
app.delete(`${categoryRoutePrefix}:cat_id`, authenticate, categoryControllers.deleteCategory);


app.post('/api/login', login);

app.listen(port, () => console.log(`Server started at port ${port}`));
console.log('Please wait till server starts :)');