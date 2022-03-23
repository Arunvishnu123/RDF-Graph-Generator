let express = require('express')
let mongoose = require('mongoose')


const app = express()

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/rdf-graph', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Database connected")
},
  error => {
    console.log("Database could't be connected to: " + error)
  }
)

let bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
let cors = require('cors')
const userAPI = require('../rdf-server/routes/UserRegistration')
const rdfAPI = require('../rdf-server/routes/RDFData')
const graphAPI = require('../rdf-server/routes/RDFGraphGenerator')
const fileAPI = require('../rdf-server/routes/FileName')
const messageAPI = require('../rdf-server/routes/Discussion')
const emailAPI  = require('../rdf-server/routes/Email')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());
app.use(cookieParser())


app.use('/', userAPI)
app.use('/', rdfAPI)
app.use('/', graphAPI)
app.use('/', fileAPI)
app.use('/', messageAPI)
app.use('/',emailAPI)

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});