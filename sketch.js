const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ball1;
var ground;
var rope1;



function setup(){
    var canvas = createCanvas(1200,800);
     engine=Engine.create();
     world=engine.world;
     ball1=new Ball(200,100,50);
     var options={
         isStatic:true
     }
     ground=Bodies.rectangle(600,750,1200,50,options);
     World.add(world,ground);
     rope1=new Rope(ball1.body,{x:200,y:20})
}
function draw(){
    background("grey");
    Engine.update(engine);
ball1.display();
rectMode(CENTER);
rect(ground.position.x,ground.position.y,1200,50);
rope1.display();
}