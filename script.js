//created a function which return promise for reach api call

function fetchData(url, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                    // console.log(data)
                })
                .catch(error => {
                    reject(error);
                });
        }, delay);
    });
}

//three functions which fetch the api 
function PromiseAPI1() {
    return fetchData('https://dummyjson.com/posts', 1000);
}

function PromiseAPI2() {
    return fetchData('https://dummyjson.com/products', 2000);
}

function PromiseAPI3() {
    return fetchData('https://dummyjson.com/todos', 3000);
}


const posts = document.getElementById('posts')
const products = document.getElementById('products')
const todos = document.getElementById('todos')


document.getElementById('getDataBtn').addEventListener('click', () => {
    PromiseAPI1()
        .then(data1 => {
            // Display data from first API in table
            let tableData1 = '';
            // console.log(data1)
            const arr = data1.posts
            // console.log(arr)
            arr.forEach(item => {
                tableData1 += `<tr><td>${item.title}</td><td>${item.body}</td><td>${item.tags}</td></tr>`;
            });
            posts.innerHTML = tableData1;
            console.log(tableData1)
            return true;
        })
        .then(result1 => {
            if (result1) {
                return PromiseAPI2();
            }
        })
        .then(data2 => {
            // Display data from second API in table
            let tableData2 = '';
            const arr = data2.products
            arr.forEach(item => {
                tableData2 += `<tr><td>${item.title}</td><td>${item.description}</td><td>$${item.price}</td><td><img src=${item.images[0]}></td></tr>`;
            });
            products.innerHTML += tableData2;
            console.log(tableData2)
            return true;
        })
        .then(result2 => {
            if (result2) {
                return PromiseAPI3();
            }
        })
        .then(data3 => {
            // Display data from third API in table
            let tableData3 = '';
            const arr = data3.todos
            arr.forEach(item => {
                tableData3 += `<tr><td>${item.todo}</td><td>${item.completed}</td></tr>`;
            });
            todos.innerHTML += tableData3;
            console.log(tableData3)
        })
        .catch(error => {
            console.error(error);
        });
});
