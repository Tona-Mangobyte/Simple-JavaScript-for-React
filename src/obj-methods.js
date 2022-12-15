// Old
var skier = {
    name: name,
    sound: sound,
    powderYell: function() {
        var yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell}!!!`);
    },
    speed: function(mph) {
        this.speed = mph;
        console.log("speed:", mph);
    }
};

// New
const skier2 = {
    name,
    sound,
    powderYell() {
        let yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell}!!!`);
    },
    speed(mph) {
        this.speed = mph;
        console.log("speed:", mph);
    }
};
