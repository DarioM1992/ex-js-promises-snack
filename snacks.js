

function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(res => res.json())
        .then(post => resolve(post.title))
        .catch(reject);
    });
}

getPostTitle(1)
.then(title => console.log('Titolo del post:', title))
.catch(err => console.error(err));

function getPost(id) {
    
}