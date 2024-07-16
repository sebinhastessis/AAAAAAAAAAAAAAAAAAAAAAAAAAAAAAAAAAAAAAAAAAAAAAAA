function setup() {
canvas=createCanvas(300,300);
canvas.center();
background("white");
}
function preload(){
classifier=ml5.imageClassifier("DoodleNet");
}

function draw(){
    strokeWeight(20);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    
    }
}
function clearCanvas(){
    background("white");
}