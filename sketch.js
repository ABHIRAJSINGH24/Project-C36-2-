var Engine = Matter.Engine,World = Matter.World,Events = Matter.Events,Bodies = Matter.Bodies;
 
var balls = [];
var plinkos = [];
var divisions = [];
var ball;

var divisionHeight=300;
var score = 0;
var count = 0;
var gameState = "pause";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  ground2 = new Ground(-5,height/2,1,height);
  ground3 = new Ground(width+5,height/2,1,height);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    mousePressed();
}
 


function draw() {
  background("black");
  textSize(20)
  //text("Score : "+score,20,30);

  textSize(25);
  fill("white");
  text("Score:"+score,30,30);
  text("500",20,height-275);
  text("200",100,height-275);
  text("400",180,height-275);
  text("100",260,height-275);
  text("600",340,height-275);
  text("300",420,height-275);
  text("1000",490,height-275);
  text("100",580,height-275);
  text("300",660,height-275);
  text("800",740,height-275);
  
  Engine.update(engine);

  ground.display();

  if(gameState == "end"){
    textSize(100);
    text("Game Over",150,250);
  }

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   if(gameState!=="end"){
     ball.display();
   }
   if(gameState==="play"){
   if(ball.body.position.y>770){
     if(ball.body.position.x<80){
       score = score + 500;
       gameState = "pause"
       if(count>=5){
         gameState="end"
       }
     }
     if(ball.body.position.x>80 && ball.body.position.x<160){
       score = score + 200;
       gameState = "pause"
       if(count>=5){
         gameState="end"
       }
     }
     if(ball.body.position.x>160 && ball.body.position.x<240){
       score = score + 400;
       gameState = "pause"
       if(count>=5){
         gameState="end"
       }
     }
     if(ball.body.position.x>240 && ball.body.position.x<320){
       score = score + 100;
       gameState = "pause"
       if(count>=5){
        gameState="end"
       }
    }
     if(ball.body.position.x>320 && ball.body.position.x<400){
      score = score + 600;
      gameState = "pause"
      if(count>=5){
       gameState="end"
      }
     }
     if(ball.body.position.x>400 && ball.body.position.x<480){
      score = score + 300;
      gameState = "pause"
      if(count>=5){
       gameState="end"
      }
     }
     if(ball.body.position.x>480 && ball.body.position.x<560){
      score = score + 1000;
      gameState = "pause"
      if(count>=5){
       gameState="end"
      }
     }
     if(ball.body.position.x>560 && ball.body.position.x<640){
      score = score + 100;
      gameState = "pause"
      if(count>=5){
       gameState="end"
      }
     }
     if(ball.body.position.x>640 && ball.body.position.x<720){
      score = score + 300;
      gameState = "pause"
      if(count>=5){
       gameState="end"
      }
     }
     if(ball.body.position.x>720 && ball.body.position.x<800){
      score = score + 800;
      gameState = "pause"
      if(count>=5){
       gameState="end"
      }
     }
    }      
   }

   //if(frameCount%60===0){
   //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   //}
 
  //for (var j = 0; j < particles.length; j++) {
   
     //particles[j].display();
   //}
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  }

function mousePressed(){
  if(gameState==="pause")
  {
     count++;
     ball=new Ball(mouseX, 10, 10, 10); 
     gameState="play";
  } 
}