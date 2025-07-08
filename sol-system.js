// Configuration
const aspectRatio = 1;
const CANVAS_WIDTH = 1080; // 4K?
const CANVAS_HEIGHT = CANVAS_WIDTH * aspectRatio; // square
const typeOffset = 16;

// Data
const sun = { name: "Sun", distance: 0, size: 695508 };
const planets = [
    { name: "Mercury", distance: 0.4, size: 2440 },
    { name: "Venus", distance: 0.7, size: 6052 },
    { name: "Earth", distance: 1, size: 6371 },
    { name: "Mars", distance: 1.5, size: 3390 },
    { name: "Jupiter", distance: 5.2, size: 69911 },
    { name: "Saturn", distance: 9.5, size: 58232 },
    { name: "Uranus", distance: 19.2, size: 25362 },
    { name: "Neptune", distance: 30, size: 24622 },
    // { name: "Pluto", distance: 39.5 },
    // image construction is dynamic, if you want to have pluto
    // just comment it in, rest works automatically
];

const scale =
    (Math.min(CANVAS_WIDTH, CANVAS_HEIGHT) /
        planets[planets.length - 1].distance) *
    0.9; // * 0.95 so there is a little room between Neptune and image border

// ---------- P5 ----------

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT); // full-hd square
    angleMode(DEGREES); // so I don't have to convert deg to rad

    // Animation
    noLoop(); // doesn't animate canvas - other option is frameRate()
    // frameRate(60);

    // planet labels
    textSize(18);
    textAlign(CENTER);
}

function draw() {
    background("#181818");
    translate(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);

    fill("yellow");
    circle(0, 0, 10); // sun

    planets.forEach((planet) => {
        console.log(planet);

        stroke("#eee");
        noFill();
        circle(0, 0, planet.distance * scale);

        noStroke();
        fill("white");
        text(planet.name, 0, (planet.distance * scale) / 2 + typeOffset);
    });
}
