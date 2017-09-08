let express = require('express'),
app = express();

app.listen(8081, function(err) {
    if (err) {
        console.error("Error:", err);
        return;
    }
    console.log('Serveur lançé sur le port 8081');
});

let bodyParser = require('body-parser')

