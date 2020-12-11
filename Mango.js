class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.body = Bodies.rectangle(x,y,20,20,options);
        World.add(world, this.body);
        this.image = loadImage('images/mango.png')
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);  
    }
}