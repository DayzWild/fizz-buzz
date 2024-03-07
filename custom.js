function getNumber() {

    let answer = document.getElementById("number").value;
    let solution = document.getElementById("solution");

    for(i = 1; i <= answer; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            solution.innerHTML += " FizzBuzz - ";
        } else if (i % 3 === 0) {
            solution.innerHTML += " Fizz - ";
        } else if (i % 5 === 0) {
            solution.innerHTML += " Buzz - ";
        } else {
            solution.innerHTML += i + " - ";
        }

    }

    solution.innerText = solution.innerText.slice(0, -2);

}

