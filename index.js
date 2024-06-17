import dotenv from 'dotenv'
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// const path = require('path');

dotenv.config()


import authRouter from "./router/login.js";
import docsRoute from "./router/document.route.js";
import textRoute from "./router/text.route.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev")); //Req logging
app.use(helmet()); //provide security headers
app.use(fileUpload());
// app.use(express.static(__dirname + '\\public'));
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
app.use("/auth", authRouter);
app.use("/doc", docsRoute);
app.use("/lang", textRoute);

app.listen(port, () => {
	console.log(`server is running at port : ${port}`);
});
