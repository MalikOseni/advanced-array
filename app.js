let apple = [34, 21, 45, 12, 5, 75, 89, 12, 6, 12, 110, 39, 38, 85, 02, 14]

// apple.forEach(item => {
//     console.log(item<21)
// });

// let fruits = [];
// for (let i = 0; i < apple.length;i++){
//     if (apple[i] <= 21) {
//     fruits.push(apple[i])
// }
// }
// console.log(fruits)

// let x = apple.filter(e=> {
//     if (e<=21) {
//         return true;
//     }
// });
// filters
// let x = apple.filter(e => e <= 21);
// console.log(x)
// let b = apple.filter(c => c % 2)
// console.log(b)
// let b = apple.reduce((total, age) => total + age,0);
// console.log(b)
let b = [];
for (let i = 0; i < apple.length; i++){
    if (apple[i] % 2) {
        b.push(apple[i])
    }
}
console.log(b)