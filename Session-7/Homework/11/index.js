//11.2 Get (Read) the ‘Upper it!!’ button
var btn = document.getElementById("upper_btn");
console.log(btn);

//11.3, 5, 6, 8
btn.addEventListener("click", (e) => {
    var name = document.getElementById("name_input").value;
    var upperName = name.toUpperCase();
    text.innerText = upperName;
});

//11.4 Get (Read) ‘Enter your name’ input
var input = document.getElementById("name_input");
console.log(input);

//11.7 Get (Read) the ‘Your result will appear here’ tag
var text = document.getElementById("result_div");
console.log(text);

