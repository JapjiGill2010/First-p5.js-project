function preload(){

}
function setup(){
    canvas = createCanvas(700,500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video,300,200,100,100);
    
    fill("green");
    stroke("green");
    rect(100,60,500,30)
    rect(100,400,500,30)
    rect(60,100,30,300)
    rect(600,100,30,300)
    
    
    fill("red");
    stroke("red");
    circle(70,70,80)
    circle(620,70,80)
    circle(620, 420,80)
    circle(70,420,80)

    
}