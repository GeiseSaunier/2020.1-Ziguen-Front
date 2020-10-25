const assert = require('assert');
const Rectangle = require('../');

describe('Rectangle', function(){

  it('should be a function', function(){
    assert.equal(typeof Rectangle, 'function');
  });

  it('should take four arguments', function(){
    assert.equal(Rectangle.length, 4);
  });

  it('should instantiate an instance', function(){
    var rect = new Rectangle(0, 0, 10, 10);
    assert.equal(typeof rect, 'object')
  });

  it('should throw an error if new is omitted', function(){
    assert.throws(function(){
      Rectangle();
    }, 'You cannot call this function without the "new" keyword');
  });

  describe('instance', function(){

    beforeEach(function(){
      this.rect = new Rectangle(1, 2, 3, 4);
    });

    it('should have an "x" property based on the first argument', function(){
      assert(this.rect.x, 'Instance does not have an "x" property.');
      assert(this.rect.x, 1);
    });

    it('should have an "y" property based on the first argument', function(){
      assert(this.rect.y, 'Instance does not have an "y" property.');
      assert(this.rect.y, 2);
    });

    it('should have an "width" property based on the first argument', function(){
      assert(this.rect.width, 'Instance does not have an "width" property.');
      assert(this.rect.width, 3);
    });

    it('should have an "height" property based on the first argument', function(){
      assert(this.rect.height, 'Instance does not have an "height" property.');
      assert(this.rect.height, 4);
    });

    describe('#perimeter', function(){

      it('should have a perimeter method', function(){
        assert(Rectangle.prototype.perimeter);
      });

      it('should return the perimeter of the rectangle', function(){
        var rect = new Rectangle(0, 0, 10, 10);
        assert.equal(rect.perimeter(), 40);
      });
    });

    describe('#area', function(){

      it('should have a area method', function(){
        assert(Rectangle.prototype.area);
      });

      it('should return the area of the rectangle', function(){
        var rect = new Rectangle(0, 0, 10, 10);
        assert.equal(rect.area(), 100);
      });
    });

  })
});
