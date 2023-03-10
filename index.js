var express = require('express');
var app = express();
var PORT = process.abort.PORT || 8080;

var date = new Date(); 
var msg = {
    greetings: "Hello world from marvelous Innocent at GitHub codespace. The Year is coming to an end in the next few days, and God has been faithful and forever will remain faithful",
    date: `${date.getDay()} : ${date.getMonth()} : ${date.getYear()}`,
}

app.get('/', (req, res) => {
    res.json(msg);

});

app.listen(PORT, () => {
    console.log(`Server listening from Port ==> ${PORT}`);
})