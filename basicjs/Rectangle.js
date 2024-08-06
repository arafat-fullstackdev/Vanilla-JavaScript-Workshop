function Rectangle(width, height){
    this.width = width;
    this.height = height;

    this.area = function(){
        return this.width * this.height;
    };

    this.perimeter = function(){
        return 2*(width + height);
    };
}

const rect_one = new Rectangle(10 ,5);
console.log(rect_one.area());
console.log(rect_one.perimeter());