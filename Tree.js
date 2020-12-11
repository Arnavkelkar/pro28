class Tree{
    constructor(width,height){
        this.width = width;
        this.height = height;
        this.image = loadImage("images/tree.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image, 600, 490, 300,400);
    }
}