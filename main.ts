/*
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
*/
import { router } from './todo-router';
import { userRouter } from './user-router';
import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
/*
app.use(bodyParser.urlencoded({
    extended: true
}));
*/
app.use('/todo', router);
app.use('/user', userRouter);
app.listen(3000, function(err){
    if (err) {
  console.error("fail to start server:", err);
  return;
    }
console.log("listening on 3000...");
});
