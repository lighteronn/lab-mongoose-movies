const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')

mongoose.connect('mongodb://localhost/starter-code', {
  useNewUrlParser: true
});

const celeblist = [{name:'Brad Pitt',occupation: 'Actor', catchPhrase:'unknown'},
 {name:'Angelina Jolie',occupation: 'Actress', catchPhrase:'unknown'}, 
 {name:'Tom Cruise',occupation: 'Actor', catchPhrase:'unknown'},
]

Celebrity.create(celeblist)
.then( data => console.log(data, " is created"))
.catch(err => console.log(err))
