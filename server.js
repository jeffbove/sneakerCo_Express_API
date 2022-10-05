const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//middlewares
app.use(cors());

app.use(bodyParser.json());

//import routes
const mensRoute = require('./routes/mens');
const womensRoute = require('./routes/womens');
const AirForce1sRoute = require('./routes/airForce1s');
const JacketsRoute = require('./routes/jackets');
const Jordan4Route = require('./routes/jordan4s');
const KidsRoute = require('./routes/kids');
const MostPopularRoute = require('./routes/mostPopular');
const NewBalancesRoute = require('./routes/newBalances');
const NewReleasesRoute = require('./routes/newReleases');

app.use('/mens', mensRoute);
app.use('/womens', womensRoute);
app.use('/airForce1s', AirForce1sRoute );
app.use('/jackets', JacketsRoute );
app.use('/jordan4s', Jordan4Route );
app.use('/kids', KidsRoute );
app.use('/mostPopular', MostPopularRoute );
app.use('/newBalances', NewBalancesRoute );
app.use('/newReleases', NewReleasesRoute );

//Routes
app.get('/', (req,res) => {
    res.send('we are on home')
})

app.get('/mens', (req, res) => {
    res.send('we are on mens')
})
app.get('/womens', (req, res) => {
    res.send('we are on womens')
})
app.get('/airForce1s', (req, res) => {
    res.send('we are on air forces')
})
app.get('/jackets', (req, res) => {
    res.send('we are on jackets')
})
app.get('/jordan4s', (req, res) => {
    res.send('we are on jordan4s')
})
app.get('/kids', (req, res) => {
    res.send('we are on kids')
})
app.get('/mostPopular', (req, res) => {
    res.send('we are on most popular')
})
app.get('/newBalances', (req, res) => {
    res.send('we are on new balances')
})
app.get('/newReleases', (req, res) => {
    res.send('we are on new releases')
})



//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true },
    () => {
    console.log('connected to db!')
})

app.listen(5000);