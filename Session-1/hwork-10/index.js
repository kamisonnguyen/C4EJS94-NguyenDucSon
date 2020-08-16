console.log("Write a script to calculate the BMI (Body Mass \
Index) of a person, the formula is as follows")
mass1 = prompt("Your weight in kg?")
mass = parseFloat(mass1);
height1 = prompt("your height in cm?")
height = parseFloat(height1);
var BMI = mass / (height*height)
if(BMI > 30){
    alert("You are Obese")
}else if(BMI < 30){
    alert("you are Overweight")
}else if(BMI < 25){
    alert("you are Normal")
}else if(BMI < 18.5){
    alert("you are Underweight")
}else{
    alert("you are Severely underweight")
}