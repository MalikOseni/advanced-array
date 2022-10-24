const username = [
	{ firstName: "balogun", lastName: "opeyemi", category: "student" },
	{ firstName: "jeff", lastName: "bezos", category: "worker" },
	{ firstName: "stephn", lastName: "gerad", category: "teacher" }
];
let a = prompt('enter name')
let b = username.filter(function (e) {
	if (e.category == `${a}`) {
		return true;
	}
}
)
	.map(e => `${e.firstName}${e.lastName}`);
console.log(b)