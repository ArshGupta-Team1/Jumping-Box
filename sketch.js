var canvas;
var music;
var box1, box2, box3, box4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(100, 580, 180,20);
    box2 = createSprite(300, 580, 180,20);
    box3=createSprite(500,580,180,20);
    box4=createSprite(700,580,180,20);
    ball = createSprite(400,300,30,30);
    ball.velocityX = 5;
    ball.velocityY = 3;
    
    box1.shapeColor = "red";
    box2.shapeColor  = "green";
    box3.shapeColor = "skyblue";
    box4.shapeColor = "orange";
    ball.shapeColor = "white";


   edges = createEdgeSprites();
    

    
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    
    ball.bounceOff(edges);
    if (ball.isTouching(box1)){
        ball.shapeColor = "red";
        music.play();
        
    }

    if (ball.isTouching(box2)){
        ball.shapeColor = "green";
        music.play();
        
    }

    if (ball.isTouching(box3)){
        ball.shapeColor = "skyblue";
        music.play();
        

    }
    if (ball.isTouching(box4)){
        ball.shapeColor = "orange";
        music.play();
        
    }
    


    drawSprites();
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
