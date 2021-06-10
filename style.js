function makeColor(){
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`
}

// range of r g b in rgb is 0-255

const box = document.querySelectorAll('button');

for(let btn of box){
    btn.addEventListener('click', colourize)
      
}

const h1s = document.querySelectorAll('h1');

for(let h1 of h1s){
    h1.addEventListener('click', colourize)
      
}


 
function colourize(){
    this.style.backgroundColor = makeColor();
    this.style.color = makeColor();
}