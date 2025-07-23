// Configuration
const canvasWidth = 1080; // if changed to 4K you need to change "transform: scale" in CSS
const aspectRatio = 1; // other examples: 16/9, 16/10, etc.
const canvasHeight = canvasWidth * aspectRatio; // Instagram: square

// ---------- P5 ----------

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    angleMode(DEGREES); // so I don't have to convert deg to rad for sin/cos later

    // Animation
    noLoop(); // doesn't animate canvas

    /*

    Question is how to manage the increasing render depth of further iterations of the fractal
        - manual via button / interface
        - as animation -> which speed? at which stage is computation slower than animation speed?

    */

    // frameRate(60);

    // planet labels
    textSize(18);
    textAlign(CENTER);
}

function draw() {
    // background("#ffffff");

    const baseWidth = canvasWidth * 0.8;
    const height = Math.sqrt(baseWidth ** 2 - (baseWidth / 2) ** 2);

    translate((canvasWidth - baseWidth) / 2, (canvasHeight - height) / 2); // setting new 0,0 origin to middle of triangle
    // console.log(baseWidth, height);

    // draw outer triangle
    line(0, 0, baseWidth, 0);
    line(baseWidth, 0, baseWidth / 2, height);
    line(baseWidth / 2, height, 0, 0);

    // draw first inner triangle
    let w = baseWidth;
    let h = height;
    line(w / 2, 0, (w * 3) / 4, h / 2);
    line((w * 3) / 4, h / 2, (w * 1) / 4, h / 2);
    line((w * 1) / 4, h / 2, w / 2, 0);

    // probably better to give the outer bounds as parameter
    // otherwise offset away from 0,0 doesn't really work?
    const drawInnerTriangles = (w, h) => {
        // drawing inner triangle #1 - top left
        translate(0, 0);
        line(w / 2, 0, (w * 3) / 4, h / 2);
        line((w * 3) / 4, h / 2, (w * 1) / 4, h / 2);
        line((w * 1) / 4, h / 2, w / 2, 0);

        // drawing inner triangle #2 - top right
        translate(w, 0);
        line(w / 2, 0, (w * 3) / 4, h / 2);
        line((w * 3) / 4, h / 2, (w * 1) / 4, h / 2);
        line((w * 1) / 4, h / 2, w / 2, 0);

        // drawing inner triangle #3 - bottom
        translate(-w / 2, h);
        line(w / 2, 0, (w * 3) / 4, h / 2);
        line((w * 3) / 4, h / 2, (w * 1) / 4, h / 2);
        line((w * 1) / 4, h / 2, w / 2, 0);
    };

    drawInnerTriangles(baseWidth / 2, height / 2);
    drawInnerTriangles(baseWidth / 4, height / 4);
}
