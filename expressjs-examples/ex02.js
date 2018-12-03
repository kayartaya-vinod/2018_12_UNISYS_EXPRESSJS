const express = require('express');
const app = express();
const port = 3000;

// app.use() takes a middleware as parameter.
// express.static() takes a path to a folder containing all static content,
// and returns a middleware.
app.use(express.static('static-content', { index: 'home.html' }));

app.get('/author-info', (req, resp) => {
    let author = {};
    author.name = 'Vinod';
    author.email = 'vinod@vinod.co';
    author.phone = '9731424784';
    resp.json(author);
});

app.listen(port, () => console.log(`Server started at port ${port}`));
console.log('Please wait for the server to start....');