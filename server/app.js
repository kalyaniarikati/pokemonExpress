const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const pokeRouter = require('./routes/poke_routes');
const mongoose = require("mongoose");

const port = 3000

app.engine('handlebars', exphbs({
    extname: 'handlebars',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
  }));
app.set('view engine', 'handlebars');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const dbConn = "mongodb://localhost/comments_app";

mongoose.connect(
	dbConn,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	},
	err => {
		if (err) {
			console.log("Error connecting to database", err)
		} else {
			console.log("Connected to database!")
		}
	}
)

app.use("/pokemons", pokeRouter)


app.listen(port, () => {
    console.log("Express listening on port" +port)
})