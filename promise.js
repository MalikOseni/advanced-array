const app = [
    { title: 'Rice', body: 'this is rice' },
    { title: 'Beans', body: 'this is beans' }];

function getFood() {
    setTimeout(() => {
        let output = '';
        app.forEach((post) => {
            output += `<h4>${post.title}</h4>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};
// getFood();

function newPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            app.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('SOMETHING WENT WRONG');
            }
    },3000)  
    })
}

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const d = data.filter(e=>e=`${data.username}`)
    console.log(d);
}
fetchUsers();
// newPost({ title: 'yam', body: 'this is yam' })
//     .then(getFood)
//     .catch(err => console.log(err));