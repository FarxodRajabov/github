function hello() {
    console.log('Hello',this);
}

const person = {
    name: 'Farhod',
    age: '23',
    sayHello: 'hello',
    sayHelloWindow: hello.bind(document),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`name is ${this.name}`);
        console.log(`age is ${this.age}`);
        console.log(`job is ${job}`);
        console.log(`phone is ${phone}`);
        console.groupEnd()
    }
}



const lena = {
    name: 'Elena',
    age: '22'
}



// person.logInfo.bind(lena, 'Frontent', '8-545-444-555')()
// person.logInfo.call(lena, 'Frontent', '8-545-444-555')
person.logInfo.apply(lena, ['Frontent', '8-545-444-555'])


////========


const array = [1, 2, 3, 4, 5]

// function multBy(arr,n) {
//     return arr.map(function (i) {
//         return i * n
//     })
    
// }


// Array.prototype.multBy = function (n) {
//     console.log('multby', this);
//     }
//     array.multBy()


// Array.prototype.multBy = function (n) {
//     return this.map(function (i) {
//         return i * n
//     })
// }




// console.log(array.multBy(25));