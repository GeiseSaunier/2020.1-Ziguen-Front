function Rectangle(x, y, width, height) {

  if(!(this instanceof Rectangle)) {
    throw new Error('You cannot call this function without the "new" keyword');
  };

  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

}

Rectangle.prototype.perimeter = function(){
  return (this.width * 2) + (this.height * 2);
}

Rectangle.prototype.area = function(){
  return this.width * this.height;
}

module.exports = Rectangle;
