const name = "Tallac";
const elevation = 9738;

const funHike = { name, elevation };

console.log(funHike); // {name: "Tallac", elevation: 9738}

const print = function() {
    console.log(`Mt. ${this.name} is ${this.elevation} feet tall`);
};

const funHike2 = { name, elevation, print };

funHike2.print(); // Mt. Tallac is 9738 feet tall
