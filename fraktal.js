// Configuration
const aspectRatio = 1; // other examples: 16/9, 16/10, etc.
const canvasWidth = 1080; // if changed to 4K you need to change transform: scale in CSS
const canvasHeight = canvasWidth * aspectRatio; // Instagram: square

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
    background("#ffffff");

    const baseWidth = canvasWidth * 0.8;
    const height = Math.sqrt(baseWidth ** 2 - (baseWidth / 2) ** 2);

    translate((canvasWidth - baseWidth) / 2, (canvasHeight - height) / 2); // setting new 0,0 origin to middle of triangle
    console.log(baseWidth, height);

    // drawing triangle
    line(0, 0, baseWidth, 0);
    line(baseWidth, 0, baseWidth / 2, height);
    line(baseWidth / 2, height, 0, 0);
}
