const person = new Object({
    name:'Maxim',
    age: '24',
    greet: function () {
        console.log('Greet');
    }
})

Object.prototype.sayHello = function () {
    console.log('Hello');
}


const lena = Object.create(person)
lena.name = "my"

const str = 'hello world'


const strr =  new String('hello world')
