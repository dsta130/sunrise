const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var sunrise1, sunrise2, sunrise3, sunrise4, sunrise5, sunrise6
var sunset1, sunset2, sunset3, sunset4, sunset5, sunset6
var bg ;
var hour

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
    sunrise1 = loadImage("sunrise1.png")
    sunrise2 = loadImage("sunrise2.png")
    sunrise3 = loadImage("sunrise3.png")
    sunrise4 = loadImage("sunrise4.png")
    sunrise5 = loadImage("sunrise5.png")
    sunrise6 = loadImage("sunrise6.png")
    sunset1 = loadImage("sunset7.png")
    sunset2 = loadImage("sunset8.png")
    sunset3 = loadImage("sunset9.png")
    sunset4 = loadImage("sunset10.png")
    sunset5 = loadImage("sunset11.png")
    sunset6 = loadImage("sunset12.png")
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
   if(backgroundImg)
   background(backgroundImg)
    // add condition to check if any background image is there to add
   

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    
    // write code to fetch time from API
    var responseJSON = await response.json()
    //change the data in JSON format
    var datetime = responseJSON.datetime
    // write code slice the datetime
    hour = datetime.slice(11,13)

    // add conditions to change the background images from sunrise to sunset
    if(hour >= 4 && hour<=6){
        bg=sunrise1
    }
    if(hour >= 6 && hour <= 8){
        bg=sunrise2
    }
    if(hour >= 8 && hour <= 10){
        bg=sunrise3
    }
    if(hour >= 10 && hour <= 12){
        bg=sunrise4
    }
    if(hour >= 12 && hour <= 14){
        bg=sunrise5
    }
    if(hour >= 14 && hour <= 16){
        bg=sunrise6
    }
    if(hour >= 16 && hour <= 18){
        bg=sunset1
    }
    if(hour >= 18 && hour <= 20){
        bg=sunset2
    }
    if(hour >= 20 && hour <= 22){
        bg=sunset3
    }
    if(hour >= 22 && hour <= 24){
        bg=sunset4
    }
    if(hour >= 24 && hour <= 2){
        bg=sunset5
    }
    if(hour >= 2 && hour <= 4){
        bg=sunset6
    }
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg)
}
