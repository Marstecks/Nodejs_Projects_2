var express = require('express');
var app = express();
var PORT = process.abort.PORT || 8080;
var message = {
    greetings: "Hello world from marvelous Innocent at GitHub codespace. The Year is coming "
}
app.get('/', (req, res) => {
    res.json();

});

app.listen(PORT, () => {
    console.log(`Server listening from Port ==> ${PORT}`);
})