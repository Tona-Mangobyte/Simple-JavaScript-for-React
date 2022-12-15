const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];
const tahoe = [...peaks, ...canyons];

console.log(tahoe.join(", ")); // Tallac, Ralston, Rose, Ward, Blackwood


peaks.reverse();
console.log(peaks.join(", ")); // Rose, Ralston, Tallac

const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];

const [first, ...others] = lakes;

console.log(others.join(", ")); // Marlette, Fallen Leaf, Cascade


function directions(...args) {
    let [start, ...remaining] = args;
    let [finish, ...stops] = remaining.reverse();

    console.log(`drive through ${args.length} towns`);
    console.log(`start in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`stopping ${stops.length} times in between`);
}

directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");


const morning = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
};

const dinner = "mac and cheese";

const backpackingMeals = {
    ...morning,
    dinner
};

console.log(backpackingMeals);

// {
//   breakfast: "oatmeal",
//   lunch: "peanut butter and jelly",
//   dinner: "mac and cheese"
// }
