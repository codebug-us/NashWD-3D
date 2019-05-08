document.addEventListener('DOMContentLoaded', function() {
//////////////////////////////////////////////////////////////////////////
  // Write the `hotdogNotHotdog` function below.


  // Uncomment the line below, and look in the console to see if your function worked!
  // console.log(hotdogNotHotdog("hotdog"));
  // Expected output: hotdog
  // console.log(hotdogNotHotdog("peyton manning"));
  // Expected output: not hotdog

//////////////////////////////////////////////////////////////////////////
  // Write the `helloWorld` function below.
  function helloWorld (){
    return "Hello World";
  }


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(helloWorld());
  // Expected output: Hello World!

//////////////////////////////////////////////////////////////////////////
  // Write `yell` below. 
  function yell (myString){
    return myString.toUpperCase();
  }



  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(yell("Party!"));
  // Expected output: PARTY!

//////////////////////////////////////////////////////////////////////////
  // Write `makeMoreExciting` below.
  function makeMoreExciting(myString){
    return (myString+"!!!");
  }


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(makeMoreExciting("It's Tuesday"));
  // Expected output: It's Tuesday!!!

//////////////////////////////////////////////////////////////////////////
  // Write `getLength` below.
  function getLength(myString){
    return myString.length;
  }



  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(getLength("How long am I? Too long? Too short?"));
  // Expected output: 35

//////////////////////////////////////////////////////////////////////////
  // Write `rockstarNamer` below.
  function rockstarNamer(firstPet, myStreet){
    return "Your rockstar name is "+ firstPet + " " + myStreet +".";
  }


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(rockstarNamer("Snickers", "Cloverdale"));
  // Expected output: Your rockstar name is Snickers Cloverdale.

//////////////////////////////////////////////////////////////////////////
  // Write `combinedLength` below.
  function combinedLength (string1, string2){
    var temp = string1 +string2;
    return temp.length;
  }



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(combinedLength("Blueberry", "Muffins are my homies"));
  // Expected output: 30

//////////////////////////////////////////////////////////////////////////
  // Write `bigDaddy` below.
  function bigDaddy (num1, num2){
    if(num1>num2){
      return num1;
    }
    else{
      return num2;
    }
  }



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(bigDaddy(17, 10));
  // Expected output: 17
  console.log(bigDaddy(100, 200));
  // Expected output: 200
  console.log(bigDaddy(-4, 4));
  // Expected output: 4
  console.log(bigDaddy(21, 21));
  // Expected output: 21
  
//////////////////////////////////////////////////////////////////////////
  // Write `babyDaddy` below.
  function babyDaddy (num1, num2){
    if(num1<num2){
      return num1;
    }else{
      return num2;
    }
  }



  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(babyDaddy(17, 10));
  // Expected output: 10
  console.log(babyDaddy(100, 200));
  // Expected output: 100
  console.log(babyDaddy(-4, 4));
  // Expected output: -4
  console.log(babyDaddy(21, 21));
  // Expected output: 21
  
//////////////////////////////////////////////////////////////////////////
  // Write `hBookEnds` below.
  function hBookEnds (myString){
    myString = myString.toLowerCase();
    var tempLength = myString.length;
    return (myString[0]=='h'&&myString[tempLength-1]=='h');
  }



  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(hBookEnds("hello sarah"));
  // Expected output: true
  console.log(hBookEnds("Hype for savannah"));
  // Expected output: true
  console.log(hBookEnds("I love coding"));
  // Expected output: false
//////////////////////////////////////////////////////////////////////////
  // Write `breakfastChef` below.
  function breakfastChef(wantsSalty, wantsSweet){
    if(wantsSweet&&wantsSalty){
      return "chicken and waffles";
    }else if(wantsSalty){
      return "ham and cheese omlette";
    }else if(wantsSweet){
      return "chocolate chip pancakes";
    }else{
      return "water";
    }
  }



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(breakfastChef(true, true));
  // Expected output: "chicken and waffles"
  console.log(breakfastChef(true, false));
  // Expected output: "ham and cheese omelette"
  console.log(breakfastChef(false, true));
  // Expected output: "chocolate chip pancakes"
  console.log(breakfastChef(false, false));
  // Expected output: "water"

//////////////////////////////////////////////////////////////////////////
  // Write `tweener` below.
  function tweener(num1, num2){
    var large;
    var small;
    if(num1>num2){
      large=num1;
      small=num2;
    }else{
      large=num2;
      small=num1;
    }
    var difference = large-small;

    return Math.floor(small+difference*Math.random());
  }



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(tweener(1, 4));
  // Expected output: Your output should be between 1 and 4
  console.log(tweener(30, 2));
  // Expected output: Your output should be between 2 and 30
  console.log(tweener(-10, -4));
  console.log(tweener(10, 5));

  // Expected output: Your output should be between -4 and -10

//////////////////////////////////////////////////////////////////////////
  // Write `countingInNickels` below.
  function countingInNickels(myNum){
    return(Math.floor(myNum/5)==(myNum/5));
  }

  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(countingInNickels(20));
  // Expected output: true
  console.log(countingInNickels(23));
  // Expected output: false
  console.log(countingInNickels(0));
  // Expected output: true

//////////////////////////////////////////////////////////////////////////
  // Write `capitalPolice` below.
  function capitalPolice(myString){
    return((myString)!=(myString.toLowerCase()));
  }



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(capitalPolice("hey there, how are you doing?"));
  // Expected output: false
  console.log(capitalPolice("Howdy Folks!"));
  // Expected output: true

//////////////////////////////////////////////////////////////////////////
  // Write `isNum` below.
  function isNum(myString){
    if(isNaN(myString)){
      return false;
    }else{
      return true;
    }
  }



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(isNum("I am not a number"));
  // Expected output: false
  console.log(isNum("11"));
  // Expected output: true
  
//////////////////////////////////////////////////////////////////////////
  // Write `lastFour` below.
  function lastFour(myString){
    var length=myString.length;
    if(length<4){
      return "Word is too short!";
    }else{
      return myString.substr((length-4),(length-1));
    }
  }



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(lastFour("My last four digits are all fours. 4444"));
  // Expected output: 4444
  console.log(lastFour("What are my last 4 digits?"));
  // Expected output: "its?"
  console.log(lastFour("Hey"));
  // Expected output: "Word is too short!"

//////////////////////////////////////////////////////////////////////////
  
  // Write `lastNamer` below.
  function lastNamer(fullName){
    var lastSpaceIndex = fullName.lastIndexOf(" ");
    var myLength=fullName.length;
    return(fullName.substr(lastSpaceIndex+1));
  }



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(lastNamer("Sarah Betack"));
  // Expected output: "Betack"
  console.log(lastNamer("Lebron James"));
  // Expected output: "James"
  console.log(lastNamer("Mary Lou Retton"));
  // Expected output: "Retton"

//////////////////////////////////////////////////////////////////////////
  
  // Write `changeTheT` below.
  function changeTheT(myString){
    return myString.replace(/t/gi,"s")
  }



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(changeTheT("whats up"));
  // Expected output: "whass up"
  console.log(changeTheT("Ting!"));
  // Expected output: "sing!"
  console.log(changeTheT("thanks to the chef!"));
  // Expected output: "shanks so she chef!"

//////////////////////////////////////////////////////////////////////////

  /*write a function called myTest that accepts one string 
  parameter. It then replaces all vowels (a,e,i,o,u) with 
  question mark (?)*/
  
  function myTest(myString){
    return myString.replace(/a|e|i|o|u/gi,"?");
  }

  //testing
  console.log(myTest("supercAlifragilisticexpialidocious"));
  //expect: s?p?rc?l?fr?g?l?st?c?xp??l?d?c???s
  console.log(myTest("qthrb"));
  //expect: qrthrb
  console.log(myTest("?alice"));
  //expect: ??l?c?
});

///////////////////////////////////////////////////////////

//Sam's function: make a function to connect two strings

function connectTwoStrings(string1, string2){
  return string1+string2;
}

//testing
console.log(connectTwoStrings("pig","latin"));
//expect: piglatin
console.log(connectTwoStrings("banana","split"));
//expect: bananasplit




