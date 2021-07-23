//document.write("check!");

//Question 01
function question01(){

    let n = prompt("Please enter the number:");
    let num = parseInt(n);
    let result_square = num ** 2;
    //alert("Square value of " + n + " is " + result_square );
    document.getElementById("q1").innerHTML = "Square value of " + n + " is " + result_square;
}//Question 01 END

// ------------------------------------------------------------------------------------------------------------//

//Question 02
function question02(){
    let num1 = prompt("Please enter the number 01:");
    let num2 = prompt("Please enter the number 02:");
    let operation = prompt("Please select operation you wish to do: 'add','multiply','subtract','divide'?");

    switch(operation){
        
        case("add"):
        addNum(num1,num2);
        break;

        case("multiply"):
        multiNum(num1,num2);
        break;

        case("subtract"):
        subtractNum(num1,num2);
        break;

        case("divide"):
        divideNum(num1,num2);
        break;

        default:
            alert("please enter a valid operation!");

    }

    function addNum(num1,num2){
        let n1 = parseInt(num1);
        let n2 = parseInt(num2); 
        let sum = n1 + n2;
        //alert("Summation of " + num1 + " and " + num2 + " is " + sum );
        document.getElementById("q2").innerHTML = "Summation of " + num1 + " and " + num2 + " is " + sum;
    }
    function multiNum(num1,num2){
        let n1 = parseInt(num1);
        let n2 = parseInt(num2); 
        let mul = n1 * n2;
        //alert("Multiplicaion of " + num1 + " and " + num2 + " is " + mul );
        document.getElementById("q2").innerHTML = "Multiplicaion of " + num1 + " and " + num2 + " is " + mul;
    }
    function subtractNum(num1,num2){
        let n1 = parseInt(num1);
        let n2 = parseInt(num2); 
        let sub = n1 - n2;
        //alert("Subtraction of " + num1 + " and " + num2 + " is " + sub );
        document.getElementById("q2").innerHTML = "Subtraction of " + num1 + " and " + num2 + " is " + sub;
    }
    function divideNum(num1,num2){
        let n1 = parseInt(num1);
        let n2 = parseInt(num2); 
        let div = n1 / n2;
        //alert("Division of " + num1 + " and " + num2 + " is " + div );
        document.getElementById("q2").innerHTML = "Division of " + num1 + " and " + num2 + " is " + div;
    }
    
}//Question 02 END

// ------------------------------------------------------------------------------------------------------------//

//Question 03
function question03(){
    window.alert("Hello World!");
}//Question 03 END

// ------------------------------------------------------------------------------------------------------------//

//Question 04
function question04(){
    let length = prompt("Input the length of cuboid:");
    let width = prompt("Input the length of cuboid:");
    let height = prompt("Input the length of cuboid:");

    let l = parseInt(length);
    let w = parseInt(width);
    let h = parseInt(height);

    let volume = l * w * h;
    //alert("Volume of cuboid is: " + volume);
    document.getElementById("q4").innerHTML = "Volume of cuboid is: " + volume;   

}//Question 04 END

// ------------------------------------------------------------------------------------------------------------//

//Question 05
function question05(){
    const person = {
        firstName: "Nimal",
        lastName:   "Raj",
        age:        15,
        city:       "Kandy"       
    };

    document.getElementById("q5").innerHTML = "My name is " + person.firstName + " " + person.lastName + ". " + "I'm " + person.age + " years old. I live in " + person.city;
    }//Question 05 END

// ------------------------------------------------------------------------------------------------------------//

//Question 06
function question06(){
    const course = {
        courseName: "BIT",
        courseFee:  "Rs 150 000",
        startDate:  "12.06.2018",
        center:     "Our Office"       
    };
    const newArticle = document.createElement("article");
    newArticle.innerHTML =`
    <p>Course Name: ${course.courseName}</p>
    <p>Fee: ${course.courseFee}</p>
    <p>Start Date: ${course.startDate}</p>
    <p>Center: ${course.center}</p>
    `
    
    const article = document.querySelector("article");
    article.append(newArticle);

}//Question 06 END

// ------------------------------------------------------------------------------------------------------------//

//Question 07
function question07(){
    let num1 = prompt("Enter number 1:");
    let num2 = prompt("Enter number 2:");

    let n1 = parseInt(num1);
    let n2 = parseInt(num2);

    greaterNum(n1, n2);

    function greaterNum(n1, n2){
        if(n1 > n2){
            document.getElementById("q7").innerHTML = "The greater number is " + n1;
        }
        else if(n2 > n1){
            document.getElementById("q7").innerHTML = "The greater number is " + n2;
        }
        else{
            document.getElementById("q7").innerHTML = "Both are equal!";
        }
    }
}//Question 07 END

// ------------------------------------------------------------------------------------------------------------//

//Question 08
function question08(){
    let n1 = parseInt(prompt("Enter number 1:"));
    let n2 = parseInt(prompt("Enter number 2:"));
    let n3 = parseInt(prompt("Enter number 3:"));
    let n4 = parseInt(prompt("Enter number 4:"));
    let n5 = parseInt(prompt("Enter number 5:"));

    if (n1>n2 && n1>n3 && n1>n4 && n1>n5){
        alert("The greater number is " + n1);
    }
    else if (n2>n1 && n2>n3 && n2>n4 && n2>n5){
        alert("The greater number is " + n2);
    }
    else if (n3>n1 && n3>n2 && n3>n4 && n3>n5){
        alert("The greater number is " + n3);
    }
    else if (n4>n1 && n4>n3 && n4>n2 && n4>n5){
        alert("The greater number is " + n4);
    }
    else{
        alert("The greater number is " + n5);
    }

}//Question 08 END

// ------------------------------------------------------------------------------------------------------------//

//Question 09
function question09(){

    let marks = parseInt(prompt("Enter your marks:"));

    asssignGrade(marks);
    
    function asssignGrade(marks){

        if(marks <= 100 && marks >= 75){
            document.getElementById("q9").innerHTML = "Your result is A";
        } else if(marks <= 100 && marks >= 60){
            document.getElementById("q9").innerHTML = "Your result is B";
        } else if(marks <= 100 && marks >= 45){
            document.getElementById("q9").innerHTML = "Your result is C";
        } else if( marks < 45 && marks >= 0 ){
            document.getElementById("q9").innerHTML = "Your result is F";
        } else{
            document.getElementById("q9").innerHTML = "Plase Enter a valid input!";
        }
    }

}//Question 09 END

// ------------------------------------------------------------------------------------------------------------//

//Question 10
function question10(){
    
    let option = parseInt(prompt("Enter Colour option(0 - 30):"));

    if(option < 10 && option >= 0 ){
        document.getElementById("q10").innerHTML = `<p style = 'color:blue'> BLUE </p>`;
    }else if(option < 20 && option >= 10 ){
        document.getElementById("q10").innerHTML = `<p style = 'color:red'> RED </p>`;
    }else if(option < 30 && option >= 20 ){
        document.getElementById("q10").innerHTML = `<p style = 'color:green'> GREEN </p>`;
    }else{
        document.getElementById("q10").innerHTML = `<p> Wrong Colour Option! </p>`;
    }
}//Question 10 END

// ------------------------------------------------------------------------------------------------------------//

//Question 11
function question11(){

    let num = parseInt(prompt("Enter the numer of month:"));

    switch (num){

        case 1:
        document.getElementById("q11").innerHTML = "Months is January";
        break;

        case 2:
        document.getElementById("q11").innerHTML = "Months is February";
        break;

        case 3:
        document.getElementById("q11").innerHTML = "Months is March";
        break;

        case 4:
        document.getElementById("q11").innerHTML = "Months is April";
        break;

        case 5:
        document.getElementById("q11").innerHTML = "Months is May";
        break;

        case 6:
        document.getElementById("q11").innerHTML = "Months is June";
        break;

        case 7:
        document.getElementById("q11").innerHTML = "Months is July";
        break;

        case 8:
        document.getElementById("q11").innerHTML = "Months is August";
        break;

        case 9:
        document.getElementById("q11").innerHTML = "Months is September";
        break;

        case 10:
        document.getElementById("q11").innerHTML = "Months is October";
        break;

        case 11:
        document.getElementById("q11").innerHTML = "Months is November";
        break;

        case 12:
        document.getElementById("q11").innerHTML = "Months is December";
        break;

        default:
        document.getElementById("q11").innerHTML = "Enter month number between 1 - 12 !";
        
        
    }
}//Question 11 END

// ------------------------------------------------------------------------------------------------------------//

//Question 12
function question12(){
    document.getElementById("q12").innerHTML = 
    `<p> 01. Literal method</p>
     <p> Eg. const cars = ["Saab", "Volvo", "BMW"]; </p>
     <p> 02. Using newArray() method</p>
     <p> Eg. const cars = new Array("Saab", "Volvo", "BMW"); </p>
     `;
}//Question 12 END

// ------------------------------------------------------------------------------------------------------------//

//Question 13
function question13(){

    let n = parseInt(prompt("Enter num of elemenets in your array:"));
    let i = 0;
    const nums = []; 

    for(i=0; i <= (n-1); i++){
        nums[i] = parseInt(prompt("Enter num" + (i+1) ));
    }

    nums.sort(function(a, b){return a-b});
    document.getElementById("q13_max").innerHTML = "Max value is " + nums[n-1];
    document.getElementById("q13_min").innerHTML = "Min value is " + nums[0];

}//Question 13 END

// ------------------------------------------------------------------------------------------------------------//

//Question 14
function question14(){
   var fruits = ["Apple", "Banana"];

   fruits.splice(1, 0, "Lemon", "Kiwi", "Mango", "Pineapple", "Watermelon");
   document.getElementById("q14").innerHTML ="Array after inserting some fruits: " + fruits; 

   document.getElementById("q14_1").innerHTML = fruits[3];

   document.getElementById("q14_2").innerHTML = "length of your array is: " + fruits.length;

   fruits.sort();
   fruits.reverse();
   document.getElementById("q14_3").innerHTML = fruits;

}//Question 14 END

// ------------------------------------------------------------------------------------------------------------//

//Question 15
function question15(){
    const num = [4, 1, 8, 3, 9, 12];
    document.getElementById("q15_1").innerHTML ="Array before sorting: " + num;

    num.sort(function(a, b){return a - b});
    document.getElementById("q15_2").innerHTML ="Array after sorting: " + num;
}//Question 15 END

// ------------------------------------------------------------------------------------------------------------//

//Question 16
function question16(){
    var foods = ["rice", "pizza", "sandwich", "rolls"];
    document.getElementById("q16").innerHTML = "Current Array : " + foods;

    foods.pop();
    document.getElementById("q16_a").innerHTML = "Array after removing 'rolls': " + foods;

    foods.push("cake");
    document.getElementById("q16_b").innerHTML = "Array after adding 'cake': " + foods;

    delete foods[0];
    document.getElementById("q16_c").innerHTML = "Array after deleting 'rice': " + foods;

}//Question 16 END

// ------------------------------------------------------------------------------------------------------------//

//Question 17
function question17(){

    var fruits = ["apple"];
    document.getElementById("q17").innerHTML = "Current Array : " + fruits;

    fruits.splice(0, 0, "Pineapple", "Lemon");
    document.getElementById("q17_1").innerHTML = "Array after adding Pineapple, Lemon before 'Apple' : " + fruits;

    fruits.splice(3, 0, "Orange", "Peach");
    document.getElementById("q17_2").innerHTML = "Array after adding Orange, Peach after 'Apple' : " + fruits;


}//Question 17 END
