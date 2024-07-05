const assert = require("node:assert").strict;
const endpoint = "http://localhost:3000/user";

async function addUser(data) {
	const res = await fetch(endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	if (!res.ok) return;
	try {
		return await res.json();
	} catch {
		console.log("[addUser]: invalid json");
	}
}

async function getUser(id) {
	const res = await fetch(endpoint + `/${id}`);
	if (!res.ok) return;
	try {
		return await res.json();
	} catch {
		console.log("[getUser]: invalid json");
	}
}

async function getUsers() {
	const res = await fetch(endpoint);
	if (!res.ok) return;
	try {
		return await res.json();
	} catch {
		console.log("[getUsers]: invalid json");
	}
}

async function updateUser(id, data) {
	const res = await fetch(endpoint + `/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	if (!res.ok) return;
	try {
		return await res.json();
	} catch {
		console.log("[updateUser]: invalid json");
	}
}

async function deleteUser(id) {
	const res = await fetch(endpoint + `/${id}`, {
		method: "DELETE",
	});
	return res.ok;
}

async function test() {
	let jake = await addUser({ name: "jake" });
	const { id } = jake;
	assert.deepEqual(jake, { name: "jake", id });
	console.log(`test 1 passed`);

	jake = await updateUser(jake.id, { name: "Jake", data: { hobby: "music" } });
	assert.deepEqual(jake, { name: "Jake", data: { hobby: "music" }, id });
	console.log(`test 2 passed`);

	jake = (await getUsers()).find((user) => user.id == id);
	assert.deepEqual(jake, { name: "Jake", data: { hobby: "music" }, id });
	console.log(`test 3 passed`);

	await deleteUser(id);
	assert.equal(await getUser(id), undefined);
	console.log(`test 4 passed`);
}

test();
