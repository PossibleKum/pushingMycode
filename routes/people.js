var express = require('express');
var router = express.Router();
var persons=[
    {
        age: 45,
        height:'40m',
        weight: '25kg',
        description: "Hey! I'm tera and I'm 45 years old"
    },
    {
        age: 23,
        height:'43m',
        weight: '21kg',
        description: "Hey! I'm kkg and I'm 25 years old"
    },
    {
        age: 33,
        height:'45m',
        weight: '45kg',
        description: "Hey! I'm dbk and I'm 33 years old"
    }
]
router.get('/', function (req, res) {
    res.render('people', {
        'persons': persons
    })
})

router.get('/:id', function (req, res, next) {
    
    let id = req.params['age'];
    var oneperson = [];
    

    persons.forEach((article, index, articles) => {
        if (persons.id == id) {
            oneperson = person
        }
    })

    res.render('peopleitem', {
       'person': oneperson
    })
})

module.exports = router;