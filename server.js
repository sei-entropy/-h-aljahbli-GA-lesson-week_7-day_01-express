// Load the Express module on our server
const express = require('express');

// import routers
const indexRouter = require('./routes/index.js')
const peopleRouter = require('./routes/people.js')

// create new express server
let app = express();


// ********   Middleware      ******
// parse JSON request sent by the user
// and converts it into JS object before
// a route uses it
app.use(express.json());


// **** Routes *****
// single path
app.use('/', indexRouter);

// multiple paths if routes are already in file
app.use(peopleRouter)


// Tells the server where to listen for requests
const port = 3000;


// slash first 
// then introduce nodemon 
// do greetings after
app.get('/greetings', function (req, res) {
    res.send("greetings from SEI Entropy, let's take over the world" )
})


// rihanna?q=jdfkjds
// but if you want part of the querry in the URL
app.get('/rihanna', function (req, res) {
    res.send("Work work work work work")
    // res.send(req.query.q)
    
});



// http:://localhost:3000/food/:food
app.get('/food/:food', function (req, res) {
    console.log(req.params);
    
    res.send(`I really love ${req.params.food}!`)
});


// http:://localhost:3000/:user/food/:food
// function with more than one param
app.get('/:name/food/:food', function (req, res) {
    console.log(req.params);

    res.send(`Hello, I'm ${req.params.name}! and really love ${req.params.food} `)
});


// /sightings?state=new_york&sightings=42
// mention %20 as space
app.get('/sightings', function(req, res) {
    console.log(req.route);
    console.log(req.query);

    res.send(`How many ufo sightings you think there are in ${req.query.state}, ${req.query.sightings}`)
})


// http://localhost:3000/bigfoot?blurry=true
app.get('/bigfoot', function(req, res) {
    console.log(req.route);
    console.log(req.query);
    // true here is a string not a boolean
    if (req.query.blurry === 'true'){
        res.send("It's not the photographer's fault. Bigfoot is blurry, and that's extra scary to me. There's a large, out-of-focus monster roaming the countryside! Run! He's fuzzy! Get out of there!");
    } else {
        res.send("A group of researchers have amassed evidence that the legendary Bigfoot is real, ABC News reported, with the scientists presenting reams of evidence.");
    }
})


// sening objects
//    /hello/:name?human=true
app.get('/hello/:name', function (req, res) {
    res.send(
        {
            params: req.params,
            queries: req.query
        }
    )
})

// http://localhost:3000/favorite/dog?dog=roxy
app.get('/favorite/:noun', function (req, res) {
    res.send(`I have a favorite ${req.params.noun}, it is ${req.query[req.params.noun]}`)
});

//  /:name?first_name=hisham&last_name=aljahbli
app.get('/:name', function (req, res) {
    console.log(req.params);
    console.log(req.route);
    console.log(req.query);
    
    
    
    res.send(`Hello, ${req.params.name}, my name is ${req.query.first_name} ${req.query.last_name}`)
});

app.post('/a', function (req, res) {
    // console.log(req);
    console.log('TTT',req.body);

    // console.log(req.body.person);
    
    // people.push(req.body.person)
    
    res.status(201).json({a:1})
})



// tells the server where to listen for requests
app.listen(port, function() {
    console.log(`hello-express is listening on port ${port}`);
});

