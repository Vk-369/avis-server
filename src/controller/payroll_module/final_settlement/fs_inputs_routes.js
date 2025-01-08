const express = require('express'); 
const fs_input_handlers=require('./fs_inputs_handlers')
const fs_input_routes = express.Router();


fs_input_routes.get('/test/api', fs_input_handlers.test)   

module.exports = fs_input_routes;