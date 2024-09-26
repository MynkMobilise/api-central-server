require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const authRoute = require("./routes/auth");
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");
const session = require('express-session');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true }));

app.use(session({
	secret: 'somethingsecretgoeshere',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: true }
 }));
// app.use(
// 	cookieSession({
// 		name: "session",
// 		keys: ["cyberwolve"],
// 		maxAge: 24 * 60 * 60 * 100,
// 	})
// );
app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.use(express.static(path.join(__dirname, 'client/build')));
console.log(path.join(__dirname, 'client/build'));
app.get("/", (req, res) => {
	res.send({ status: true, msg: "Hello world" });
	// res.send()
	// Relative path
	const absolutePath = path.resolve('./client/build/index.html');
	console.log('Absolute path:', absolutePath);

	return res.sendFile(absolutePath);

});

app.use("/auth", authRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listenting on port ${port}...`));
