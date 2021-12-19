const person = Object.create(
    {
        calculateAge() {
            console.log('Age', new Date().getFullYear() - this.birthYea );
        }
},{
    name: {
        value: 'Farhod',
        enumerable: true,
        writable: true,
        configurable: true

        
    },
    birthYea: {
        value: 2000,
        enumerable: false,
        writable: false,
        configurable: false

    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYea
        },
        set(value) {
            document.body.style.background = 'red'
            console.log('Set age', value);
        }
    },
    
})

// delete person.name
// delete person.birthYea


for(let key in person) {
    if (person.hasOwnProperty(key)) {
    console.log('key', key , person[key]);
    }
}

