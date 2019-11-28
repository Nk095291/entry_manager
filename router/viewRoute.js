const express = require("express");
const viewRouter = express.Router();
const entry = require('../controller/entry');
const leave = require('../controller/leave');
const updateHost = require('../controller/updateHost');

const render_home_page = (req, res) => { res.render('home') };

viewRouter
.get('/',render_home_page)
.post('/entry',entry)
.post('/leave',leave)
.post('/updateHost',updateHost)


module.exports = viewRouter;