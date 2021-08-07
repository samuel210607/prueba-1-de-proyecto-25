"use strict";

var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;
var Render = Matter.Render;
var world;
var engine;
var dustbinObj, groundObject, basura;

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;
  groundObject = new ground(width / 2, 670, width, 20);
  dustbinObj = new dustbin(1200, 650);
  basura = new bola(500, 650, 30, 30);
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(230);
  groundObject.display();
  dustbinObj.display();
  basura.display();
}