const express    = require('express'),
      bodyParser = require('body-parser') ,
      mongoose   = require('mongoose'),
      app        = express()

const port = process.env.PORT || 8000

//Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))
//Routes
app.use(require('./routes/api'))

app.listen(port, ()=>{console.log(`server started at port ${port}`)})