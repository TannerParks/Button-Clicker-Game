
var list = [] // Global variable

function userGuess() {
    var guess = document.getElementById("letter").value;
    var len = guess.length;
    var contains = list.includes(guess);
    var err = "This isn't a letter";
    var err2 = "You've already guessed this letter"

    if (len != 1) { // Checks to make sure the guess is a letter and not a word
        alert(err);
    }
    else {
        if (!contains) {    // Checks to see if letter is already used
            list.push(guess); // Puts guess in the array
            document.getElementById("guessDiv").innerHTML = guess; 
            document.getElementById("graveyard").innerHTML = list;
        }
        else{
            alert(err2)
        }
        //document.getElementById("graveyard").innerHTML = list;
    }

}

function say_hi() {
    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;

    var html = "Hello <b>" + fname + "</b> " + lname;

    document.getElementById("result").innerHTML = html;
  }

  //document.getElementById("say").addEventListener("click", say_hi)