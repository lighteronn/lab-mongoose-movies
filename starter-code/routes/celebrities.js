const express = require('express')
const router = express.Router()
const Celebrity = require("../models/celebrity")

router.get('/celebrities', (req,res, next) => {
    Celebrity.find()
    .then(celebrities => res.render('celebrities/index', {celebrities}))
    .catch(err => {
        next() 
        console.log(err)})   
})

router.get('/celebrities/new', (req,res) => {
    res.render('celebrities/new')
})

router.get('/celebrities/:id', (req,res,next) => {
    const id = req.params.id
    console.log(id)
    Celebrity.findById(id)
    .then(celebrity => res.render('celebrities/show', {celebrity}))
    .catch(err => next(err))
})





router.post('/celebrities', (req,res) => {
    const {name, occupation, catchPhrase} = req.body
    Celebrity.create({name, occupation, catchPhrase})
    .then(() => {
        res.redirect('/celebrities')
    })
    .catch(() => res.render('celebrities/new'))
})

router.post('/celebrities/:id/delete', (req,res,next) => {
    const id = req.params.id
    Celebrity.findByIdAndRemove(id)
    .then(() => res.redirect('/celebrities'))
    .catch(err =>{
        next(err)
    
    })
})

module.exports = router