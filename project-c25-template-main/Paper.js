class Paper extends BaseClass{
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("sprites/Paper.png");
    }
    display(){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2,
        }
    
    }
  }