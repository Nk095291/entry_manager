const express = require("express");
const app = express();
const cons = require('consolidate');
const viewRouter = require('./router/viewRouter');


const port = process.env.PORT || 3000;


app.set('view engine', 'pug')
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));

app.use('', viewRouter);


app.listen(port, () => {
    console.log(`app is live on ${port}`);

});

