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


app.get("/",(req,res) =>{
    res.send("send")

})

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})