class Tower {
    constructor(x,y,w,h){
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
    display(){
        // rectMode(CENTER);
        fill("#ffffff")
        rect(this.x,this.y,this.width,this.height);
    }

    
}