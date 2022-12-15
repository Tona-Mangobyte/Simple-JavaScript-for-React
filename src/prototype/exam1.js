function Vacation(destination, length) {
    this.destination = destination;
    this.length = length;
}

Vacation.prototype.print = function() {
    console.log(this.destination + " | " + this.length + " days");
};

const maui = new Vacation("Maui", 7);

maui.print(); // Maui | 7 days
