const express = require('express')
const router = express.Router()


// dummy data
let people = [
    {firstName: 'Hisham', lastName: 'Aljahbli'},
    {firstName: 'Mohammad', lastName: 'Jouza'},
    {firstName: 'Usman', lastName: 'Bashier'},
    {firstName: 'Sager', lastName: 'Alarifi'}
]

// api.domain.com
// domain.com/api
router.get('/api/people', function (req, res) {
    res.json({
        people: people
    });
});


// Get Person by Record ID
router.get('/api/people/:id', function(req, res) {
    const personID = req.params.id;

    if (!isNaN(personID)) {
        
        const person = people[personID];
        if (person !== undefined) {
          res.json({ person: person });
        } else {
          res.status(404).json({ error: 'Person Not Found' });
        }
    } else {
        // invalid ID key
        res.status(406).json({
            error: 'InvalidID'
        })
    }

});


// problem here can get req.body
// create a person
router.post('/api/people', function (req, res) {
    console.log(req.body);
    
    people.push(req.body.person)
    
    res.status(201).json({people: people})
})



// update a person
router.put('/api/people/:id', function (req,res) {
    const personId = req.params.id;
    console.log(req.body);
    people[personId] = req.body.person
    res.send('Got a PUT request at /user')
})


// delete a person
router.delete('/api/people/:id', function (req, res) {
    const personId = req.params.id;
    console.log(req.body);
    people.splice(personId, 1)

    res.send('Got a DELETE request at /user')
  })


// exports router so it can be used by server.js file
module.exports = router;