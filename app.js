
function createParagraph(){

var input1 = document.getElementById("input1").value;
var input2 = document.getElementById("input2").value;
var input3 = document.getElementById("input3").value;
var input4 = document.getElementById("input4").value;
var input5 = document.getElementById("input5").value;
var input6 = document.getElementById("input6").value;
var input7 = document.getElementById("input7").value;
var input8 = document.getElementById("input8").value;
var input9 = document.getElementById("input9").value;
var input10 = document.getElementById("input10").value;
var input11 = document.getElementById("input11").value;
var input12 = document.getElementById("input12").value;
var input13 = document.getElementById("input13").value;
var input14 = document.getElementById("input14").value;

var paragraph = "<p> This might sound " + input1 + " , but my " + input2 + " friend is a ghost. We met in " + input3 +" grade at school while they were " + input4 + " the " + input5 + ". Their name is " + input6 + " and they were " + input7 + " years old when they died. No one can " +input8 + " my friend but me. They have " + input9 + " hair and " + input10 + " " + input11 + ", and their clothes are " + input12 + ". Having an invisible friend is " + input13 + ", but they always win at " + input14 + " and seek.</p>";


console.log(paragraph);

document.getElementById("answer").innerHTML = paragraph;
}

