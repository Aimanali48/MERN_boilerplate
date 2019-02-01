const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://aiman123:aiman123@ds219055.mlab.com:19055/cvgenerator',{useNewUrlParser:true})