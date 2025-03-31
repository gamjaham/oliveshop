let img_NavBar;
let img_AdBanner;
let img_Product;
let img_gnb;
let img_ai_icon;
let img_Green;
let img_Textbox;
let state=0;

function preload(){
  img_NavBar=loadImage('01_NavBar.png');
  img_AdBanner=loadImage('02_AdBanner.png');
  img_Product=loadImage('03_Product.png');
  img_gnb=loadImage('04_GNB.png');
  img_ai_icon=loadImage('05_ai_icon.png');
  img_Green=loadImage('06_green.png');
  img_Textbox=loadImage('07_textbox.png');
}

function setup() {
  createCanvas(393,852);
}

function draw() {
  background(255);  
  if(state==0){
  image(img_NavBar,0,0,393,128);
  image(img_AdBanner,0,128,393,284);
  image(img_Product,0,412,393,440);
  image(img_gnb,0,764,393,88);
  image(img_ai_icon,320,688,60,60);
    
  }else if(state==1){
  image(img_NavBar,0,0,393,128);
  image(img_AdBanner,0,128,393,284);
  image(img_Product,0,412,393,440);
  image(img_gnb,0,764,393,88);
  image(img_ai_icon,320,688,60,60);
  image(img_Green,0,612,393,152);
    
  }

}

function mouseClicked(){
  if (mouseX >=320 && mouseX<=380){
    if(mouseY>=688 &&mouseY<=748){
      if(state==0){
        state=1;
      }else if(state==1){
        state=0;
      }
    }
  }
}