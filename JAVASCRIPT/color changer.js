function changeColor() {
    // gennerate random color value for RGB

    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);


    // create a color string 
     let randomColor = `rgb(${r}, ${g}, ${b})`;

    // apply color to body background
    document.body.style.backgroundColor = randomColor;
}