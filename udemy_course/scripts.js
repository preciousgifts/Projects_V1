function getMilk(bottles) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
function bmiCalculator(weight, height){
    var bmi = weight / (Math.pow(height, 2));
    return Math.round(bmi);
}

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

bmi should equal 20 when it's rounded to the nearest whole number.

*/
var bmi = bmiCalculator(70, 1.8); 
console.log(bmi)



  