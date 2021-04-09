const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rain


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    rain = new Rain(600,200,50,50);
    
}

function draw(){
    Engine.update(engine);
    rectMode(CENTER);
    rain.display();
        
}



