console.log("Priyanka")
//PromiseAPI1(), PromiseAPI2(),PromiseAPI3().
//Promise.resolve(thenable).then((v) => {console.log(v); // 42});




function promiseChain(){
    const data1 = document.getElementById("data1")
    const data2 = document.getElementById("data2")
    const data3 = document.getElementById("data3")
    //
    let PromiseAPI1 = setTimeout(()=> {
        fetch("https://dummyjson.com/posts")
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            // res.forEach(myFunction);

            // function myFunction(item){
            //     data1 += "<tr>"
            //     data1 += `<td style="padding: 20px 5px 5px 5px; text-align: left"><img src="${name.image}" alt="coin" height="30px" style="margin-left: 30px"/> {item.post.id} <td>`
            // }
        })
    },1000)
    if (PromiseAPI1) {
        clearTimeout(PromiseAPI1); // Stop the interval if the condition holds true
    }
    
    //
    // let PromiseAPI2 = setTimeout(()=> {
    //     fetch("https://dummyjson.com/products")
    //     .then(res=>res.json())
    //     .then(res=>{})
    // },2000)
    // if (PromiseAPI2) {
    //     clearTimeout(PromiseAPI2); // Stop the interval if the condition holds true
    // }

    // //
    // let PromiseAPI3 = setTimeout(()=> {
    //     fetch("https://dummyjson.com/todos")
    //     .then(res=>res.json())
    //     .then(res=>{})
    // },3000)
    // if (PromiseAPI3) {
    //     clearTimeout(PromiseAPI3); // Stop the interval if the condition holds true
    // }
}