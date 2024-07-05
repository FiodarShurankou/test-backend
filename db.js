const users = [
	{ name: "Peter", id: 1 },
	{ name: "Andrew", id: 2 },
	{ name: "James", id: 3 },
	{ name: "John", id: 4 },
	{ name: "Philip", id: 5 },
	{ name: "Bartholomew", id: 6 },
	{ name: "Matthew", id: 7 },
	{ name: "Thomas", id: 8 },
	{ name: "James", id: 9 },
	{ name: "Simon", id: 10 },
	{ name: "Judas", id: 11 },
	{ name: "Jude", id: 12 },
];
users._id = 13;
Object.defineProperty(users, "nextId", {
	get: () => {
		return ++users._id;
	},
});

/**
 * @typedef {{name: string, data?: any}} UserData
/

/**
 * @typedef {{id: number, name: string, data?: any}} User
 */

/**
 *s
 * @param {number} id
 * @returns {Promise<User>}
 */
exports.getUser = async function (id) {
	console.log("get by id", id);
	return users.find((user) => user.id === id);
};

/**
 *
 * @param {number} id
 * @returns {Promise<User[]>}
 */
exports.getUsers = async function () {
	console.log("get all users");
	return users;
};

/**
 *
 * @param {UserData} data
 * @returns {Promise<User>}
 */
exports.insertUser = async function (data) {
	data.id = users.nextId;
	console.log(`insert`, data);
	users.push(data);
	return data;
};

/**
 *
 * @param {number} id
 * @param {UserData} data
 * @returns {Promise<User>}
 */
exports.updateUser = async function (id, data) {
	let userIndex = users.findIndex((user) => user.id === id);
	data.id = id;
	console.log(`update ${userIndex < 0 ? "new" : "old"}`, data);
	if (userIndex < 0) users.push(data);
	else users[userIndex] = data;

	return data;
};

/**
 *
 * @param {number} id
 * @returns {Promise<User>}
 */
exports.deleteUser = async function (id) {
	let userIndex = users.findIndex((user) => user.id === id);
	console.log("delete", users[userIndex]);
	if (userIndex < 0) return;
	return users.splice(userIndex, 1)[0];
};
