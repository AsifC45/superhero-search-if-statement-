// Superhero Lookup

// Add event listeners
document.getElementById("search").addEventListener("click", setSuperhero);

// Event Function
function setSuperhero() {
    // Set the main pic based of search input

    // get user input
    let supername = document.getElementById("superhero").value;
    supername = supername.toLowerCase();
    console.log(supername);

    // Test variable name
    if (supername == "black panther") {
        document.getElementById("superimg").src = "images/black-panther.png";
    } else if (supername == "thor") {
        document.getElementById("superimg").src = "images/thor.jpg";
    } else if (supername == "hulk" || supername == "incredible hulk") {
        document.getElementById("superimg").src = "images/hulk.jpg";
    } else if (supername == "spiderman" || supername == "amazing spiderman") {
        document.getElementById("superimg").src = "images/spiderman.jpg";
    } else {
        document.getElementById("superimg").src = "images/question-mark.png";
    }

}