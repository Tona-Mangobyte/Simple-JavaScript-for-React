const sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
};

// const { bread, meat } = sandwich;
let { bread, meat } = sandwich;

console.log(bread, meat); // dutch crunch tuna


bread = "garlic";
meat = "turkey";

console.log(bread); // garlic
console.log(meat); // turkey

console.log(sandwich.bread, sandwich.meat); // dutch crunch tuna

console.log("============================================");

const lordify = regularPerson => {
    console.log(`${regularPerson.firstname} of Canterbury`);
};

// destructure property of object in func
const lordify2 = ({ firstname }) => {
    console.log(`${firstname} of Canterbury`);
};

const lordify3 = ({ spouse: { firstname } }) => {
    console.log(`${firstname} of Canterbury`);
};

const regularPerson = {
    firstname: "Bill",
    lastname: "Wilson",
    spouse: {
        firstname: "Phil",
        lastname: "Wilson"
    }
};

lordify(regularPerson); // Bill of Canterbury
lordify2(regularPerson); // Bill of Canterbury
lordify3(regularPerson); // Phil of Canterbury
