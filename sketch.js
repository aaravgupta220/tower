const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var night_image;
var day_image;
var backgroundImage;

var engine, world;
var pol_image, polygon;
var score = 0;
var bg, bc;

function preload(){
    pol_image = loadImage("polygon.png");
    //night_image = loadImage("bg2.png");
    //day_image = loadImage("bg1.png");

    getTime();
}

function setup(){

    var canvas = createCanvas(1200, 600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 500, 400, 20);

    ground1 = new Ground(600, 590, 1200, 20);

    box1 = new Box(600, 485, 30, 30);
    box2 = new Box(585, 485, 30, 30);
    box3  = new Box(570, 485, 30, 30);
    box4 = new Box(615, 485, 30, 30);
    box5 = new Box(630, 485, 30, 30);
    box6 = new Box(645, 485, 30, 30);
    box7 = new Box(660, 485, 30, 30);
    box8 = new Box(555, 485, 30, 30);
    box9 = new Box(540, 485, 30, 30);

    box10 = new Box(600, 470, 30, 30);
    box11 = new Box(615, 470, 30, 30);
    box12 = new Box(630, 470, 30, 30);
    box13 = new Box(645, 470, 30, 30);
    box14 = new Box(585, 470, 30, 30);
    box15 = new Box(570, 470, 30, 30);
    box16 = new Box(555, 470, 30, 30);

    box17 = new Box(600, 455, 30, 30);
    box18 = new Box(615, 455, 30, 30);
    box19 = new Box(630, 455, 30, 30);
    box20 = new Box(585, 455, 30, 30);
    box21 = new Box(570, 455, 30, 30);

    box22 = new Box(600, 440, 30, 30);
    box23 = new Box(615, 440, 30, 30);
    box24 = new Box(585, 440, 30, 30);

    box25 = new Box(600, 425, 30, 30);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);

    sling = new Slingshot(this.polygon, {x:100, y:200});

}

function draw(){

    if(backgroundImage)

    background(backgroundImage);
    
    console.log(bg, bc);

    Engine.update(engine);
    strokeWeight(4);

    ellipseMode(RADIUS);
    ellipse(polygon.position.x, polygon.position.y, 10, 10);

    imageMode(CENTER);
    image(pol_image, polygon.position.x, polygon.position.y, 40, 40);

    ground.display();
    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    sling.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box5.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();

    textSize(30);
    fill("red");
    text("SCORE : "+score, 750, 40);

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(this.polygon);
    }
}

async function getTime(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseType = await response.json();
    var dt = responseType.datetime;
    var hour = dt.slice(11,13);

    console.log(hour);

    if(hour <= 18 && hour >= 6){
        bg = "bg1.png"
    }else{
        bg = "bg2.jpg"
    }

    backgroundImage = loadImage(bg);
}