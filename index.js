import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import cors from "cors";


import authRouter from "./router/login.js";
import invoice from "./router/invoice.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev")); //Req logging
app.use(helmet()); //provide security headers
app.use(fileUpload());
app.get("/", (req, res) => {
	res.send({ status: true, msg: "Hello world" });
});
app.use("/auth", authRouter);
app.use("/inv", invoice);

app.listen(port, () => {
	console.log(`server is running at port : ${port}`);
});
