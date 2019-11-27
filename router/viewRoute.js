const express = require("express");
const viewRouter = express.Router();
const entry = require('../controller/entry');
const leave = require('../controller/leave');


const render_home_page = (req, res) => { res.render('home') };

viewRouter
.get('/',render_home_page)
.post('/entry',entry)
.post('/leave',leave);


module.exports = viewRouter;