$ = (queryString) => document.querySelector(queryString);

const shifthue = (hue) => (hue + 1) % 360;
const shiftcol = (hue) => (hue + 2) % 300;


let hue = 0;
let col = 0;



const animate = () =>{
    hue =  shifthue(hue); 
    const color = `hsl(${shifthue(hue)}, 100%, 50%)`;
    $('a-sphere').setAttribute('color', color);

    col =  shiftcol(col); 
    const colr = `hsl(${shiftcol(col)}, 100%, 50%)`;

    $('a-plane').setAttribute('color', colr);


    const position = `0 ${Math.sin(Date.now()/200)} -6`;
    $('a-sphere').setAttribute('position', position);

    requestAnimationFrame(animate);
};


requestAnimationFrame(animate);

