// const consoleDebugger = require('debug')('app:consoleEnabled');
// const helmet = require("helmet"); // for securing app with setting some http headers
// const morgan = require('morgan'); // to log http requests

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hospitality')
.then(()=> console.log('Connected to MongoDB'))
.catch(err => console.error('Couldnt', err));


// auth
const logger = require('./middleware/logger')
const authenticator = require("./middleware/authenticator");


//routes
const home = require("./routes/home");
const amenities = require("./routes/amenities");
const hotels = require("./routes/hotels");
const customers = require("./routes/customers");
const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended : true})) // for key=value &key=value advanced form fileds; extende ture

// app.set('view engine', 'pug');
// app.set('views', './views')
// app.use(express.static('public'))
// app.use(helmet()) // http request se

// routes
app.use('/', home);
app.use("/api/amenities", amenities);
app.use("/api/hotels", hotels);
app.use("/api/customers", customers);

// auth and log
app.use(logger)
app.use(authenticator)


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


/* 
if (app.get('env') === 'development') {
  app.use(morgan('tiny')) // tiny format display
  consoleDebugger('morgan enabled for http request on macdev. env. ')
}

*/