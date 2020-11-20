class Ball{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(40,670,70,options);
        this.image = loadImage("sprites/paperObject-1"); 
        this.image.scale = 0.2;

        World.add(world,this.body);
    }
     display(){
        var pos = this.body.position
       
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,70);
     }
}
