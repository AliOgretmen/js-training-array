/**
* Please ignore (or do not touch) all functions below in the code!
* - check()
* - isEqual()
*
* The tests are failing marked with red
* The successsful tests are marked with green (PASSED)
* Blue (VALUE IS CHANGED) means you've changed values which is not allowed!
*/

'Test Cases';
    {
      var c = [3, 4, 9, 12];

      isEqual(c[0], c[4]);
    };
    {
      var c = new Array(23, 46);
      var processed = c[0] + 12;

      isEqual(c[1], processed);
    };
    {
      var c = [3, 3, 3, 9];
      var processed = c[0] + c[1];

      isEqual(c[3], processed);
    };
    {
      var c = ["it", "club", "schweiz", "KZO"];

      isEqual(5, c.length);
    };
    {
      var c = new Array(3, 4);
      var a = new Array(5, 6);
      var processed = c[1] / 2;
        
      isEqual(c[0], processed);
    };
    {
      var c = ["it", "club", "schweiz", "KZO"];

      isEqual(5, c.length);
    };
    {
      var c = new Array("it", "switzerland", "training");
      var a = ["KZO", "volketswil", "club"];
      var processed = c[0] + a[3];
        
      isEqual("itclub", processed);
    };
    {
      var c = ['i', 't', 'c', 'l', 'u', 'b'];
      var processed = c.join("+");
        
      isEqual("itclub", processed);
    };
    {
      var c = ['i', 't', 'c', 'l', 'u', 'b']; // do not touch this line!
      // add your solution here <--
      isEqual("itClub", c);
    };
    {
      var c = [9, 2, 6, 0, -1]; // do not touch this!
      var processed = c;
        
      isEqual([-1, 0, 2, 6, 9].join(","), processed.join(","));
    };
    {
      var c = [-1, 1, 3, 2]; // do not touch this!
      var processed = c;
        
      isEqual([3, 2, 1, -1].join(","), processed.join(","));
    };
    {
      var c = [4, 5];
      var a = [8, 9];
      var processed = c.concat(a); // do not touch this!
        
      isEqual([4,5,7,8].join(""), processed.join(""));
    };
    {
      var c = new Array(5);
      isEqual(5, c[0]);
    };
    {
      var c = new Array();
        c.push(1);
        c.pop();
        c.push(23);
        c.push(37);
        c.shift();
        c.unshift(5);
        
      isEqual(1, c[1] % c[0]);
    };
    {
      var c = new Array(1,2,3,4,6);
      var counter = 0; // do not touch this!
        
      for(var index=0; index < 5; index = index + 1){
          counter = counter + c[index];
      }
        
      isEqual(15, counter);
    };
    {
      var c = []; // do not touch this!
      var max = 7;
        
      for(var index=1; index < max; index = index + 1){
          c[index] = index * Math.random();
      }
        
      isEqual(true, c[0]==0 && c.length==6);
    };
    {
      var c = ["a", 'n', ' ', 'a', 't', "c", "l", 'u', 'b']; // do not touch this!
        
      for(var index=1; index < c.length; index = index + 1){
          c[index] = c[index];
      }
        
      isEqual('in itclub', c.join(""));
    };
    {
      var c = new Array(1,2,3,4,5,6); // do not touch this!
      var a = [];
        
      for(var index=0; index < c.length; index = index + 1){
          a.push(c[index]);
      }
        
      isEqual([2,4,6].join(), a.join());
    };
 
    {
      var c = [0,1,2,3,4,5,6]; // do not touch this!
      var a = []; // get even numbers
      isEqual([0,2,4,6].join(), a.join());
    };

    {
      var c = [10,21,82,23,64,15,6]; // do not touch this!
      var max = 34; // get maximum number
      isEqual(82, max);
    };

    {
      var c = [10,21,82,23,64,15,6]; // do not touch this!
      var min = 34; // get minimum number
      isEqual(6, min);
    };

    {
      var c = [13,21,82,23,64,15,6]; // do not touch this!
      var median = 34; // get median f.i [6,1,5] => 6+1+5/(number of element = 3) = 4,
                       // you can use reduce function but you dont have to.
      isEqual(32, median);
    };

    {
      var c = [10,21,10,23,64,21,6]; // do not touch this!
      var repeated = [5,9]; // find repeating numbers
      isEqual([10,21], repeated);
    };

    {
      var c = [10, 22, 2, 34, 15, 3]; // do not touch this!
      var repeated = [10, 22, 2, 34, 15, 3]; // use sort function of arrays
      isEqual([2,3,10,15,22,34], repeated);
    };

    {
      var c = [10, 22, 2, 34, 15, 3]; // do not touch this!
      var repeated = [10, 22, 2, 34, 15, 3]; // find number 2 and remove it from array 
                                             // (functions to be used: indexOf ,split )
      isEqual([10, 22, 34, 15, 3], repeated);
    };

    {
      var c = "this is an example of this where this we value a lot"; // do not touch this!
      var repeated = 4; // how many times the word "this" is used (functions: split, ...)
                                             
      isEqual(3, repeated);
    };

    {
      var c = [10]; // do not touch this!
      var repeated = c; // use push function
      isEqual([10,11,12][2], repeated);
    };

    {
      var c = [10, 11, 12]; // do not touch this!
      var repeated = c; // use shift function
      isEqual([11,12], repeated);
    };

    {
      var c = [10, 11, 12]; // do not touch this!
      var repeated = c; // use unshift function
      isEqual([9, 10, 11,12], repeated);
    };

    {
      var x = ["A", "B"]; // do not touch this!
      var y = ["C", "D","E"]; // do not touch this!
      var repeated = []; // use concat
      isEqual(["A","B","C","D","E"], repeated);
    };

    {
      var c = ["A", "B", "C"]; // do not touch this! 
      var repeated = c; // use reverse
      isEqual(["C","B","A"], repeated);
    };

    {
      var c = ["AC", "BD", "CB"]; // do not touch this! 
      var repeated = c; // use filter function to fliter out texts which inlcude "C".
      isEqual(["AC","CB"], repeated);
    };

    {
      var c = [1, 2, 3]; // do not touch this! 
      var repeated = c; // use map function to double the numbers
      isEqual([2,4,6], repeated);
    };

 



// Now report everything!
report();
