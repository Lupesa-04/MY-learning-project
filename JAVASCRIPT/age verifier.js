

function ageVerifier() {
const age1 = document.getElementById("birthday").value;
const result = document.getElementById("result");
const box = document.getElementById("birthday");

if (age1 === "" || isNaN(age1)) {
    birthday.style.border = "2px solid red";
    result.style.color = "red";
    result.fontSize = "25px";
    result.textContent = "Please enter a valid age";
    return;
}

if (age1 <= 18) {
    result.textContent = "You are not eligible to vote since your age is " + age1;
    birthday.style.border = "2px solid green";
    result.style.color = "green";
}else if (age1 >= 18) {
    result.textContent = "You are eligible to vote since your age is " + age1;
    birthday.style.border = "2px solid green";
    result.style.color = "green";
}else {
    result.style.color = "red";
    result.textContent = "Please enter a valid age";

}
}
