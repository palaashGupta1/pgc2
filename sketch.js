const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var divider1;

var engine, world;
var devisionHeight=300;

var particle = [];
var pinkos = [];
var divisions = [];
function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  ground1=new Ground(240,790,480,10);
  divider1=new Divisions(240,780,480,10);


}



function draw() {
  background(0);  
  Engine.update(engine);
  
  ground1.display();
  divider1.display();
  drawSprites();
}

for (var k=0;k<=10;k=k+80){
  divisions.push(new Divisions(k,height-devisionHeight/2,10,devisionHeight));
}

for (var j=40;j<=10;j=j+50){
plinkos.push(new Pinco(j,75));

}