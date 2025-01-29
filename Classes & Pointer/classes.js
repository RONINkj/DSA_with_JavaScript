class Cookies{
    constructor(color){
        this.color=color;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color=color;
    }
}

const cookies1=new Cookies('red');
const cookies2=new Cookies("blue");
console.log(cookies1.getColor());
cookies2.setColor('yellow');
console.log(cookies2.getColor());  
