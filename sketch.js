const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  
  //polygon = createSprite(130, 520);
	//polygon.addAnimation("TOWER-SIEGE-1",polygon_img);  
	//polygon.scale = 0.25;

  //level one of tower 1
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two of tower 1
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three of tower 1
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top of tower 1
  block16 = new Block(390,155,30,40);

  
  //level 1  of tower 2
  block17 = new Block(625,180,30,40);
  block18 = new Block(655,180,30,40);
  block19 = new Block(685,180,30,40);
  block20 = new Block(715,180,30,40);
  block21 = new Block(745,180,30,40);
  block22 = new Block(775,180,30,40);
  //level 2 of tower 2
  block23 = new Block(655,140,30,40);
  block24 = new Block(685,140,30,40);
  block25 = new Block(715,140,30,40);
  block26 = new Block(745,140,30,40);
  //level 3 of tower 2
  block27 = new Block(685,100,30,40);
  block28 = new Block(715,100,30,40);
  //top of tower 2
  block29 = new Block(715,60,30,40);

  ball = Bodies.circle(50 , 200 , 20);
  World.add(world , ball);

  slingShot = new SlingShot(this.ball , {x:100 , y:200});


}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  


  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  fill("pink");
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  fill("turquoise");
  block27.display();
  block28.display();
  fill("grey");
  block29.display();

  imageMode(CENTER);
  image(polygon_img , ball.position.x , ball.position.y , 40 , 40);

  slingShot.display();


}

function mouseDragged(){

    Matter.Body.setPosition(this.ball , {x:mouseX , y:mouseY});

}

function mouseReleased(){

    slingShot.fly();


}


