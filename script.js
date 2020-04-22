/*Create a PrintMaсhine class that consists of font size, font color, font-family, 
and print() method that accepts text and prints it to the webpage using document.write(). 
The text should be displayed using the font properties of the class. 
Create an instance of that class and call the print() method.*/

class PrintMachine {
    constructor(size, color, family) {
        this.size = size; 
        this.color = color; 
        this.family = family; 
    }
    print(){
        document.write(`<div><p style="font-size:${this.size}; color:${this.color}; font-family:${this.family}">${this.size} ${this.color} ${this.family}</p></div>`); 
    }
}


let printer = new PrintMachine(14, 'orange', 'Roboto'); 

printer.print(); 

/*Create a Shape class that consists of name, number of sides, and side length. 
Add getter that returns the shape perimeter. Create a new instance of Shape called square. 
Get the perimeter to check whether it works correctly. 
Create a new instance of Shape called triangle, get the perimeter to check that it works OK.*/

class Shape {
    constructor(name, sides, sidelenght) {
        this.name = name; 
        this.sides = sides; 
        this.sidelength = sidelenght; 
    }
    get perimeter() {
        return this.sidelength * this.sides;  
    }
}


let square = new Shape('square', 4, 10); 
let triangle = new Shape('triangle', 3, 10); 

console.log(square.perimeter); 
console.log(triangle.perimeter); 

/*Create a Square class that inherits from the Shape class you created in the last assignment. 
Add calculateArea() method that calculates the square’s area. Also set up the constructor so that the name
property of Square class is automatically set to “square”, and the “sides” property is automatically set to 4. 
When invoking the constructor, you should therefore just need to provide the side length property.*/

class Square2 extends Shape {
    constructor(sidelength) {
        super('square', 4, sidelength); 
    }
    calculateArea() {
        return this.sidelength*this.sidelength; 
    }
}

let square3 = new Square2(7);
console.log(square3.calculateArea()); 

/*Create an Animal class. Animal has a name and can eat. The eat() method should display a string “The animal called NAME is eating”. 
Create a Bird class that inherits from the Animal class. Bird accepts a number of wings and has a method fly() that just displays some message. 
Create an instance of Bird class and call eat() and fly() methods of it.*/

class Animal {
    constructor(name) {
        this.name = name; 
    }
    eat() {
        console.log(`The animal called ${this.name} is eating`); 
    }
}


class Bird extends Animal {
    constructor (name, wings) {
        super(name);
        this.wings = wings;  
    }
    fly() {
        console.log(`I can fly with ${this.wings} wings`); 
    }
}

let bird1 = new Bird('cat', 2); 

bird1.eat(); 
bird1.fly(); 