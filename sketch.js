// Global Configuration
const scale = 300; // controls size of path circle
const r = scale * 2;

// ---------- CONTROL PANEL ----------

// Number of "Planets" (Circles)
const numPlanets = document.getElementById("numPlanets");
const numPlanetsValue = document.getElementById("numPlanetsValue");
let planets = numPlanets.value; // initial value
let step = 360 / planets; // initial value

numPlanets.addEventListener("input", (e) => {
    numPlanetsValue.innerText = e.target.value;
    planets = e.target.value;
    step = 360 / planets;
});

// Speed of Planets
const speedElement = document.getElementById("speed");
let speed = speedElement.value / 100;

speedElement.addEventListener("input", (e) => {
    speedValue.innerText = e.target.value + "%";
    speed = speedElement.value / 100;
});

// ---------- P5 ----------

function setup() {
    createCanvas(1080, 1080); // full-hd square
    angleMode(DEGREES); // so I don't have to convert deg to rad
    // noLoop(); // doesn't animate canvas - other option is frameRate()
    frameRate(60);
}

function draw() {
    background("#fef3c7");

    noFill();
    circle(540, 540, r);

    for (let angle = 0; angle < 360; angle += step) {
        x = sin(angle + frameCount * speed);
        y = cos(angle + frameCount * speed);
        fill(167, 139, 250); // TODO: random color shift?
        circle(540 + x * scale, 540 - y * scale, 67);
    }
}
