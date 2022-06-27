function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 100);
    posenet = ml5.poseNet(video, moadelloaded);
    posenet.on('pose', gotposes);
}

function draw() {
    background('#a9def9');
}

function moadelloaded() {
    console.log("posenet is initialized");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
    }
}