var mynode2 = document.getElementById("namegenerator")
var mynode3 = document.getElementById("namegenerator2")

function addElement() {
    var Name = mynode2.children[1].value;
    var Age = mynode2.children[2].value;
    var Date = mynode2.children[3].value;

    var concat = "My name is " + Name + " " + "I am " + Age + " " + "Years old " + "My Birthday is in " + Date + "."
    document.getElementById("textconcat").innerHTML = concat;

}

// function hider() {
//     var nodebruh = 
// }