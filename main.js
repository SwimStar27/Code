function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);

    canvas=createCanvas(500,500);
    canvas.position(670,280);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model Has Loaded !!");
}

function gotPoses(results){
    if(results.length > 0){
console.log(results);
    }
}

function draw(){
background("#93e4fa");
}