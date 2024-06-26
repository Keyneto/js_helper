'use strict';

var express = require('express');  // Импортируем express

var app = express();  // Создаем приложение express

app.get('/', function(req, res){
    res.send('Hello World');
});

/* istanbul ignore next */
if (!module.parent) {
    app.listen(3000, () => {
        console.log('Express started on port 3000');
    });
}