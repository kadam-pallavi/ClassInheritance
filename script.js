// import using require
var Shape = require('./index.js');
// declare class
class Circle extends Shape {
     constructor(color) {
          super();
     }
     calculateArea() {

     }
}

// export class using module.exports
module.exports = Circle;