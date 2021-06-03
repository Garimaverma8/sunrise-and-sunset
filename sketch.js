const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bgimg ;
var Hour;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
  if(bgimg)
  background(bgimg);

    Engine.update(engine);

    // write code to display time in correct format here
    text("HOUR: " + hour,100,100)
    textSize(32);
    fill ("white");


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')

    //change the data in JSON format
    var responseJSON = await response.json()


    // write code slice the datetime

    var dateTime = responseJSON.datetime

    hour = dateTime.slice(11,13)


    // add conditions to change the background images from sunrise to sunset
    if (hour>=02 && hour<=06){
        bg= "sunrise1.png";
    }
    else if(hour>=06 && hour<= 08){
        bg = "sunrise2.png";
    }

    else if(hour>=08 && hour<=11){
        bg = "sunrise4.png";
    }
    else if(hour>= 11 && hour<=15){
        bg = "sunrise5.png"
    }
    else if(hour>=20 && hour==2){
        bg = "sunset12.png";
    }
    else if(hour==0 && hour<=01){
        bg= "sunset11.png";
    }
    else{
        bg= "sunset8.png";
    }

    //load the image in backgroundImg variable here
   bgimg = loadImage(bg);
}

