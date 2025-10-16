var selectInput = document.getElementById("pickpick");
var imageHolder = document.getElementById("hawakkamay");

function changepic(value) {
    if (value == "1") {
        imageHolder.src = "/assets/rock.png"
    } else if (value == "2") {
        imageHolder.src = "/assets/paper.png"
    } else if (value == "3") {
        imageHolder.src = "/assets/scissors.png"
    }

}

function play() {
    var user = document.getElementById("hawakkamay");
    var compute = document.getElementById("imageHolder2");
    var kalaban = document.getElementById("enemy");
    var userInput = selectInput.value;
    var computerInput = Math.floor(Math.random() * 3) + 1;

    if (computerInput == 1) {
        compute.src = "/assets/rock.png"
    } else if (computerInput == 2) {
        compute.src = "/assets/paper.png"
    } else if (computerInput == 3) {
        compute.src = "/assets/scissors.png"
    }

    if (userInput == computerInput) {
        alert("TABLA RAMO E");
    }
    else if ((userInput == 1 && computerInput == 3) || (userInput == 2 && computerInput == 1) || (userInput == 3 && computerInput == 2)) {
        alert("CHAMBAAAA PERO SGE DAOG");
    }
    else {
        alert("PILDI BUGO MAN");
    }
}
