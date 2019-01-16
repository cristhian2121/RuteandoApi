const express = require('express');
const router = express.Router();
const City = require('../models/cities');

//mongosee
var mongoose = require('mongoose');

router.get('/', function(req, res){
    res.status(200).json({
        data: City,
        message: 'cities list'
    })
})

router.get('/:cityId', function(req, res){
    const cityId = res.data;
    res.status(200).json({
        data: City,
        message: 'return city'
    })
})

router.post('/', function(req, res){
    res.status(200).json({
        data: City,
        message: 'insert city'
    })
})

router.put('/:cityId', function(req, res){
    res.status(200).json({
        data: City,
        message: 'update city'
    })
})

router.delete('/:cityId', function(req, res){
    res.status(200).json({
        data: City,
        message: 'delete city'
    })
})

module.exports = router;