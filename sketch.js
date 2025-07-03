// Configuration in Global Scope
const scale = 300; // controls size of path circle
const r = scale * 2;
const step = 30; // controls amount of circles

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

    // console.log(frameCount);
    for (let angle = 0; angle <= 360; angle += step) {
        x = sin(angle + frameCount / 4);
        y = cos(angle + frameCount / 4);
        fill(167, 139, 250); // TODO: random color shift?
        circle(540 + x * scale, 540 - y * scale, 67);
    }
}
