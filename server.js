var express = require('express');

var port = 4000;
var app = express();

app.get('*', (req, res) => {
        return res.redirect('https://www.austinkellar.com/portfolio');
});

app.listen(process.env.PORT || port, ()=> {
        console.log('server listening on port ' + port);
});

