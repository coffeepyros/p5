// Configuration
const aspectRatio = 1; // other examples: 16/9, 16/10, etc.
const canvasWidth = 1080; // if changed to 4K you need to change transform: scale in CSS
const canvasHeight = canvasWidth * aspectRatio; // Instagram: square
const typeOffset = 16; // writes planet names UNDER circles

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

// min of width/height in case of other aspect ratios than square
// *0.9 so there is a little room between Neptune and image border
// "last planet" in case Pluto is commented in again
const scale =
  (Math.min(canvasWidth, canvasHeight) / planets[planets.length - 1].distance) *
  0.9;

// ---------- P5 ----------

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  angleMode(DEGREES); // so I don't have to convert deg to rad for sin/cos later

  // Animation
  noLoop(); // doesn't animate canvas
  // frameRate(60);

  // planet labels
  textSize(18);
  textAlign(CENTER);
}

function draw() {
  background("#181818");
  translate(canvasWidth / 2, canvasHeight / 2); // middle of image is new 0,0 origin

  fill("yellow");
  circle(0, 0, 10); // sun

  planets.forEach((planet) => {
    console.log(planet);

    // planet "umlaufbahn" <- what is that in english?
    stroke("#eee");
    noFill();
    circle(0, 0, planet.distance * scale);

    // planet label
    noStroke();
    fill("white");
    text(planet.name, 0, (planet.distance * scale) / 2 + typeOffset);
  });
}
