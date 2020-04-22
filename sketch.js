var tower1;
var roof1;
function setup() {
  createCanvas(800,400);
  
  // tower
  tower1 = new Tower(200,200,70,300);
  tower2 = new Tower(270,225,70,175);
  tower3 = new Tower(340,250,90,200);
  tower4 = new Tower(430,225,70,175);
  tower5 = new Tower(500,200,70,300);

  // roof
  roof1 = new Roof(188,199,281,199,236,127) 
  roof2 = new Roof(341,253,430,253,384,159) 
  roof3 = new Roof(493,199,577,199,533,127) 

  
}

function draw() {
  background(0,0,0);  
  tower1.display();
  tower2.display();
  tower3.display();
  tower4.display();
  tower5.display();

  roof1.display();
  roof2.display();
  roof3.display();
}

function mouseClicked(){
  console.clear();
  console.log(mouseX+","+mouseY);
}