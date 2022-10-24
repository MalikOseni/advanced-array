const username = [
	{ firstName: "balogun", lastName: "opeyemi", category: "student" },
	{ firstName: "jeff", lastName: "bezos", category: "worker" },
];
const profile = [];
const fullname = document.createElement("p");
username.forEach((user) => {
	const li = document.createElement("span");
	profile.push(li);
	li.innerHTML = `<h2>${user.firstName}${user.lastName}</h2>`;
	fullname.appendChild(li);
});
const ratio = [];
const worker = document.createElement("p");
// const statos = username
// 		.filter((stats) => stats.category === "student")
// 		.map((stats) => `${stats.firstName} ${stats.lastName}`);
let statos = prompt("category");
let c = "";
if (c === username.category) {
	username
		.filter((e) => e.username === c)
		.map((e) => `${e.firstName} ${e.lastName}`);
	c.push(statos);
}
ratio.push(statos);
worker.innerHTML = c;
document.body.appendChild(worker);
