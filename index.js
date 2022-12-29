var express = require('express');
var app = express();
var PORT = process.abort.PORT || 8080;
var message =
app.get('/', (req, res) => {
    res.send('Hello world from marvelous Innocent at GitHub codespace.');

});

app.listen(PORT, () => {
    console.log(`Server listening from Port ==> ${PORT}`);
})