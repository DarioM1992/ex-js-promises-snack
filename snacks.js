
//SNACK-1
function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(res => res.json())
        .then(post => resolve(post.title))
        .catch(reject);
    });
}

//BONUS SNACK-1
getPostTitle(1)
.then(title => console.log('Titolo del post:', title))
.catch(err => console.error(err));

//FORMA ANNIDATA

// function getPost(id) {
//     return new Promise((resolve, reject) => {
//         fetch(`https://dummyjson.com/posts/${id}`)
//         .then(res => res.json())
//         .then(post => {
//             fetch(`https://dummyjson.com/users/${post.userId}`)
//             .then(res => res.json())
//             .then(user => {
//                 const result = {
//                     ...post,
//                     user
//                 }
//                 resolve(result);
//             })
//             .catch(reject)
//         })
//         .catch(reject);
//     });
// }

//FORMA PIU' LEGGIBILE 

function getPost(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(res => res.json())
        .then(post => {
            fetch(`https://dummyjson.com/users/${post.userId}`)
            .then(res => res.json())
            .then(user => resolve ({...post, user}))
            .catch(reject)
        })
        .catch(reject)
    });
}

getPost(1)
.then(post => console.log('Post:', post))
.catch(err => console.error(err));

//SNACK-2
 
function lanciaDado() {
    return new Promise((resolve,reject) => {
        console.log('Sto lanciando il dado...');
        setTimeout(() => {
            if(Math.random() < 0.2) {
                reject('Il dado si è incastrato! Rilancialo...')
            } else {
                const result = Math.floor(Math.random() * 6) + 1;
                resolve(result);
            }
        },3000);
        
    });
}

lanciaDado()
.then( result => console.log('Il dado ha fatto uscire:', result))
.catch(err => console.log(err))