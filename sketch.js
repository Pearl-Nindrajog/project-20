var wall,car;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  var speed = random(45,100);
  var weight = random(380,1550);

  car = createSprite(55,200,50,50);
 car.shapeColor="blue";
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor="white";
  car.velocityX=speed;
 
 }

function draw() {
  background(0);  
  drawSprites();

 if (wall.x-car.x < (car.width+wall.width/2)){
   car.velocityX=0;
   
   }
   var deformation = 0.5 * weight * speed * speed/22500;
   console.log(deformation);

    if (deformation <100===0)
   {
    //car.shapeColor="green";
    car.shapeColor=color(225,0,0);
   }
   if (deformation < 180 && deformation >100===0)
   {
   // car.shapeColor="yellow";
    car.shapeColor=color(230,230,0);
   }
   if (deformation >180===0) 
   {
    car.shapeColor=color(225,0,0);
    //car.shapeColor="red";
   }

   }
