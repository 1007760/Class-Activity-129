song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
leftWristScore = 0;
rightWristScore = 0;

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.position(430, 225);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function preload()
{
    song = loadSound("Happy.mp3");
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded()
{
}

function gotPoses()
{
}

function draw()
{
    image(video, 430, 225, 400, 400);
    fill("#028FF9");
    stroke("#FF0000");

    if(leftWristScore > 0.2)
    {
        circle(leftWristX, leftWristY, 50);
        InNumberleftWristY = number(leftWristY);
        new_leftWristY = round(InNumberleftWristY * 2);
        leftWristY_divide_1000 = new_leftWristY/1000;
        document.getElementById("volume").innerHTML = "Volume = " + leftWristY_divide_1000;
        song.setVolume(leftWristY_divide_1000);
    }
}