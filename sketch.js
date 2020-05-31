 const Engine=Matter.Engine;
 const World=Matter.World
 const Bodies=Matter.Bodies;

 var engine,world;

 var pillar;
  var pillar1;

  var inner_wall;
  var inner_wall1;

  var wall;
  var wall1;

  var mandapika;

function setup() {

  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;

  pillar= new Log(50,20,50,700);
  inner_wall= new Log(95,20,40,500);
  wall=new Log(130,20,30,400);

  mandapika=new Log(165,50,45,300);

  pillar1= new Log(270,20,50,700);
  inner_wall1= new Log(230,50,40,500);
  wall1=new Log(195,50,30,400);

}  

function draw() {
  background(0);  
Engine.update(engine);
 
pillar.display();
            pillar1.display();

inner_wall.display();
inner_wall1.display();

wall.display();
wall1.display();

mandapika.display();
  drawSprites();
}