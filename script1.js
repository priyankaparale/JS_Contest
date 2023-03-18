//created a function which return promise for reach api call
console.log("priyanka")
function fetchData(url, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                    console.log(data)
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

document.getElementById('getDataBtn').addEventListener('click', () => {
    PromiseAPI1()
        .then(data1 => {
            // Display data from first API in table
            let tableData1 = '';
            const arr = Array.from(data1)
            arr.forEach(item => {
                tableData1 += `<tr><td>${item.posts.title}</td><td>${item.posts.body}</td></tr>`;
            });
            document.getElementById('data').innerHTML = tableData1;
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
            const arr = Array.from(data2)
            arr.forEach(item => {
                tableData2 += `<tr><td>${item.name}</td><td>${item.description}</td></tr>`;
            });
            document.getElementById('data').innerHTML += tableData2;
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
            const arr = Array.from(data3)
            arr.forEach(item => {
                tableData3 += `<tr><td>${item.title}</td><td>${item.completed}</td></tr>`;
            });
            document.getElementById('data').innerHTML += tableData3;
        })
        .catch(error => {
            console.error(error);
        });
});
