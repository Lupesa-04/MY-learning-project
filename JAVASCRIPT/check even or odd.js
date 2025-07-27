function checkEvenorOdd() {
    //get the input value from user
    const numb1 = document.getElementById("numb1").value;
    
    // check if the input is a valid number
    if (isNaN(numb1) || numb1 ==="") {
        alert("please enter valid number")
        return
    }

    //check if the number is even or odd
    if (numb1 % 2 === 0) {
        document.getElementById("result").innerHTML = `${numb1} is an even number`;
        return;
    } 
    
    if (numb1 % 2 !== 0) {
        document.getElementById("result").innerHTML = `${numb1} is an odd number`;
        return;
    }
}