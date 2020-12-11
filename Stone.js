class Stone{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0,
            density:1.2,
            friction:1
        }

        this.body = Bodies.rectangle(x,y,20,20,options);
        World.add(world, this.body);
        this.image = loadImage('images/stone.png')
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);  
    }
}