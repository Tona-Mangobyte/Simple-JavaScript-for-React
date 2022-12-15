class Vacation {
    constructor(destination, length) {
        this.destination = destination;
        this.length = length;
    }

    print() {
        console.log(`${this.destination} will take ${this.length} days.`);
    }
}

class Expedition extends Vacation {
    constructor(destination, length, gear) {
        super(destination, length);
        this.gear = gear;
    }

    print() {
        super.print();
        console.log(`Bring your ${this.gear.join(" and your ")}`);
    }
}


const maui = new Vacation("Maui", 7);

maui.print(); // Maui | 7 days


const trip = new Expedition("Mt. Whitney", 3, [
    "sunglasses",
    "prayer flags",
    "camera"
]);

trip.print();

// Mt. Whitney will take 3 days.
// Bring your sunglasses and your prayer flags and your camera
