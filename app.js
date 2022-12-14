const path = require('path');
const express = require('express');
const formidable = require('express-formidable');


module.exports = app => {
    app.use(formidable()); 
    return app;
}
