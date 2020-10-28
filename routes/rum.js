// company.js
const controller = require("../controllers/controller");
const express = require('express');
const router = express.Router();

router
    .get('/', async (request, response) => {
        response.json(await controller.getRum());
    });
    

function sendStatus(e, response) {
    console.error("Exception: " + e);
    if (e.stack) console.error(e.stack);
    response.status(500).send(e);
}

module.exports = router;