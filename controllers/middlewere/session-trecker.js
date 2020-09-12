const { request, response } = require("express");
// const user = require("../models");
const usersController = require("../usersController");


exports.authentication = async (request, response, next) => {
    console.log("authentication", request.headers['session-token'])
    const result = await usersController.getSessionToken(request.headers['session-token']);
    console.log("result in trecker",result)
    if(!result){
        response.status(401).json({'error':'user must be logged in'})
    } else {
        next()
    }
}