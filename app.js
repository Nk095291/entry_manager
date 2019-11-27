const express = require("express");
const app = express();
const cons = require('consolidate');
const viewRouter = require('./router/viewRoute');


const port = process.env.port || 3000;

app.engine('html', cons.swig)
app.set('view engine', 'html');
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));

app.use('', viewRouter);


app.listen(port, () => {
    console.log(`app is live on ${port}`);

});

