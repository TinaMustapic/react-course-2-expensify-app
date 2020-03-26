const Person = {
    name: 'Andrew',
    age : 26,
    location: {
        city: 'Philly',
        temp: 92
    }
};

const {name, age} = Person;
console.log(`${name} is ${age}.`);