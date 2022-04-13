difference=0;
leftWristX=0;
rightWristX=0;
noseX=0;
noseY=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(500,550);
    video.position(10,70);
    canvas=createCanvas(500,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Model is Initialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;

    leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
}

function draw(){
    background('#c7e9ff');
textSize(difference);
fill("black");
text("Aashi",noseX,noseY);
}