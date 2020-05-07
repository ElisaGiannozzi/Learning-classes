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


/*Create a class that describes a regular marker. It should contain the following components: 
1.A field that stores the color of the marker;
2.A field that stores the amount of ink in the marker (in percentage);
3.A method for input. The method takes a string and displays the text in the given color on the webpage. 
The text appears as long as the marker has ink. One non-space character takes 0,5% ink from the marker.
4.Create a class that describes a refillable marker. The class should inherit from the regular marker. 
Also add a method that refills the marker. Demonstrate the work of these methods.*/

class Marker {
    constructor(markerColor, inkAmount) {
        this.markerColor = markerColor; 
        this.inkAmount = inkAmount; 
    }
    input(inputString) {
    let outputString = ""; 
    for(let i = 0; i < inputString.length && this.inkAmount > 0; i++){
        if (inputString[i] != " ") {
            this.inkAmount = this.inkAmount - 0.5; 
        }
        outputString += inputString[i]; 
    }
    console.log(this.inkAmount); 
    return `<div><p style="color:${this.markerColor}">${outputString}</p></div>` ; 
}
}

let marker1 = new Marker('green', 10); 
document.write(marker1.input('I am sitting in front of the computer and drinking coffee')); 


class refillableMarker extends Marker {
    constructor(markerColor, inkAmount) {
        super(markerColor, inkAmount); 
    }
    refill(inputNumber) {
        if (this.inkAmount < 100){
            this.inkAmount += inputNumber; 
        }
    }
}

let marker2 = new Marker('blue', 10); 
console.log(marker2.refill(20)); 
