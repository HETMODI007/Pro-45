var bgImg, asteriodImg, misslieImg, rocketImg, earthImg;
var bg, player, asteriods, earth;
var asteriodsGroup;

function preload(){
bgImg = loadImage("Images/Background.jpg");
asteriodImg = loadImage("Images/Asteriod.jpg");
misslieImg = loadImage("Images/Misslie.png");
rocketImg = loadImage("Images/spaceshuttle.png");
earthImg = loadImage("Images/Earth.png");
}

function setup() {
createCanvas(windowWidth,windowHeight);

bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg);
bg.scale = 6.2 

//creating the player sprite
player = createSprite(400,300,20,20);
player.addImage(rocketImg);
player.scale = 0.7
player.debug = false
player.setCollider("rectangle",0,0,300,300)

earth = createSprite(90,300,20,20);
earth.addImage(earthImg);
earth.scale = 0.6
earth.debug = false
earth.setCollider("rectangle",0,0,300,300)

//creating group for asteriods    
asteriodsGroup = new Group();
}

function draw() {
background(0); 

//moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
player.y = player.y+30
}

//calling the function to spawn asteriods
enemy();

//destroy asteriods when player touches it
if(asteriodsGroup.isTouching(player)){
for(var i=0;i<asteriodsGroup.length;i++){        
if(asteriodsGroup[i].isTouching(player)){
asteriodsGroup[i].destroy()
} 
}
}

drawSprites();
}

//creating function to spawn asteriods
function enemy(){
if(frameCount%50===0){
//giving random x and y positions for asteriods to appear
asteriods = createSprite(random(500,1100),random(100,500),40,40) 
asteriods.addImage(asteriodImg)
asteriods.scale = 0.30
asteriods.velocityX = -3
asteriods.debug= false
asteriods.setCollider("rectangle",0,0,400,400)    
asteriods.lifetime = 400
asteriodsGroup.add(asteriods)
}  
}
