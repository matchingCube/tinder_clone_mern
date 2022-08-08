import mongoose from "mongoose";
import express from "express";
import Cors from "cors";
import Cards from "./dbCards.js";

// App Config
const app = express();
const port = process.env.PORT || 8001;

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(
	"mongodb://localhost:27017/",
	{
		dbName: "tinderCloneDB",
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => (err ? console.log(err) : console.log("Connected to tinderCloneDB"))
);

// API Endpoints
app.get("/", (req, res) => res.status(200).send("HELLO CLEVER PROGRAMMERS!!!"));

app.post("/tinder/cards", (req, res) => {
	const dbCard = req.body;

	Cards.create(dbCard, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});

app.get("/tinder/cards", (req, res) => {
	Cards.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
