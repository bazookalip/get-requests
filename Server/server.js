let quotes_data = require('./quotes');

let PORT = 5000;

let express = require('express');

let app = express();



app.listen(PORT,  () => {
    console.log('Running on port', PORT);
});

app.use(express.static('server/public'))


app.get('/quotes', (req, res) => {
    res.send(quotes_data)
})
// res.send(418) I'm a teapot