assert = require('chai').assert;

describe('bubble sort', function () {
  it('recognizes an array', function (){
    array = [1,2,3];
    assert.deepEqual(array, [1,2,3]);
  })
  it('can swap two numbers in the array', function (){
    array = [1,2];
    function swapPosition (array) {
      var x = 0;
      var y = 1;
      var placeholder = array[x]
      array[x] = array[y];
      array[y] = placeholder;
      return array;
    }
    assert.deepEqual(swapPosition(array), [2,1]);
  })
  it('can sort small array', function () {
    array = [7,5];
    function swapPosition (array, x, y) {
      var placeholder = array[x]
      array[x] = array[y];
      array[y] = placeholder;
      return array;
    }

    function bubbleSort(array) {
      for(var x = 0; x < array.length; x += 1) {
        for(var y = 1; y < array.length; y += 1) {
          if(array[y - 1] > array[y]) {
            swapPosition(array, y - 1, y);
          }
        }
      }
      return array;
    }
    assert.deepEqual(bubbleSort(array), [5,7]);
  })
  it('can sort a big array', function () {
    array = [5,7,6,2,3,1,4]
    function swapPosition (array, x, y) {
      var placeholder = array[x]
      array[x] = array[y];
      array[y] = placeholder;
      return array;
    }

    function bubbleSort(array) {
      for(var x = 0; x < array.length; x += 1) {
        for(var y = 1; y < array.length; y += 1) {
          if(array[y - 1] > array[y]) {
            swapPosition(array, y - 1, y);
          }
        }
      }
      return array;
    }
    assert.deepEqual(bubbleSort(array), [1,2,3,4,5,6,7]);
  })
})
