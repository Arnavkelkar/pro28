class Elastic{
    constructor(BodyA,PointB){
         var Elastic_options ={
            bodyA:BodyA,
            pointB:PointB,
            stiffness:0.04,
            length:10
        }
        this.bodyA=BodyA
        this.pointB=PointB
        this.Elastic=Constraint.create(Elastic_options);
        World.add(world, this.Elastic)
    }
    display(){
        if(this.Elastic.bodyA){
        strokeWeight(5);
        line(this.Elastic.bodyA.position.x,this.Elastic.bodyA.position.y,this.Elastic.pointB.x,this.Elastic.pointB.y)
        }
    }
    fly(){
        this.Elastic.bodyA = null;
    }
    
    attach(){
        this.Elastic.bodyA = body;
    }
}