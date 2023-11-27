function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    circle(480, 260, 100);
    rect(455, 100, 100, 100);
}

function draw(){
    image(video, 0, 0, 400, 300);
}

function take_snapshot(){
    save('student_name.png');
}