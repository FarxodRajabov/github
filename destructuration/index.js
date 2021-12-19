function calcValues(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}



const [sum, sub = 'is not defined', mult, ...other] = calcValues(42, 10)

// console.log(sum, mult, other, sub);


const person = {
    name: 'Max', 
    age: 22, 
    address: {
        country: 'Ruusia',
        city: 'Moscow'
    }
}


// const {
//     name:firstname = 'is not defined',
//     age,
//     car = 'нет машины',
//     address,
//     address: {city: homeTown, country: count}
// } = person

// const {name, ...info} = person
// console.log(name, info);

function logPerson({name, age}) {
    console.log(name, ' ', age);
}

logPerson(person)

let namee = `
Maxsudov
Oybek
sdjhsd
sdjsdlsd
sdskdj;sd
${person}
`

console.log(namee);

let fn = () => {}

