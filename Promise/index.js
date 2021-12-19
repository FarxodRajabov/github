// console.log('Request data...');

// const p = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...');
//         const backendData = {
//             server: 'aws',
//             port: '2000',
//             status: 'working'
//         }
//         resolve(backendData)
//     },2000)
// })

// p.then(data => {
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             data.modifield = true
//             resolve(data)
//         },2000) 
//     })
    
// }).then(clientData => {
//     console.log('Data received', clientData);
//     clientData.fromData = true
//     return clientData
// }).then(data => {
//     console.log("madifine", data);
// })
// .catch(err => console.error('Error', err))
// .finally(() => console.log('Finally'))



const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(),ms)
    })
}

// sleep(2000).then(() => console.log("after two seconds"))
// sleep(3000).then(() => console.log("after three seconds"))

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promise');
})

Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promise');
})

console.log('hello');