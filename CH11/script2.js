class person{
    constructor(position){
        this.species = "human";
        this.position = position;
    }
}
class Co extends person{
    constructor(work,position){
        super(position); // helps in passing parameter to parent class
        this.work = work;
    }
    showinfo(){
        console.log(this.species);
        console.log(this.work);
        console.log(this.position);
    }
}
let obj = new Co("software engineer","banglore");
obj.showinfo();
// here i have given the attribute position to the parent class through the child using super