var trex, trex_running, edges;
var groundImage;

function preload(){
  trex_running = loadAnimation("uno.PNG","dos.png","tres.png","cuatro.png","cinco.png","seis.png");
  groundImage = loadImage("ground2.png")
  ground.x = ground.width /2; 

}

function setup(){
  createCanvas(600,200);


  //crear sprite de Trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //agregar tamaño y posición al Trex
  trex.scale = 0.5;
  trex.x = 50
  ground = createSprite(200,180,400,20);
 
}




function draw(){
  //establecer color de fondo.
  background("white");
  
  //cargar la posición Y del Trex
  console.log(trex.y)
  ground.velocityX = -2;
  
  trex.collide(ground)
  drawSprites();
}
