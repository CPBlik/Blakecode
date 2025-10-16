var mynode = document.querySelector("#colorswapper");

function turnColors() {
    var turnColors = mynode.children[1].value;
    mynode.children[0].style.color = turnColors;
}

