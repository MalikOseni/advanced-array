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

function newPost(post, callback) {
    setTimeout(() => {
        app.push(post);
        callback();
    },3000)
}

newPost({title:'yam',body:'this is yam'},getFood)