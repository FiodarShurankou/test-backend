const express = require("express");
const bodyParser = require("body-parser");
const {
	getUser,
	insertUser,
	updateUser,
	deleteUser,
	getUsers,
} = require("./db");

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.post("/user", async (req, res) => {
	const newUser = req.body;
	//Implement creating a user (send created user back)
	res.send();
});

app.get("/user/:id", async (req, res) => {
	const id = +req.params.id;
	//Implement getting a user
});

app.get("/user", async (req, res) => {
	//Implement getting all users
	res.send();
});

app.put("/user/:id", async (req, res) => {
	const id = +req.params.id;
	const newUser = req.body;
	//Implement update or create if user does not exist (send updated user back)
	res.send();
});

app.delete("/user/:id", async (req, res) => {
	const id = +req.params.id;
	//Implement delete user (send deleted user back)
	res.send();
});

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
