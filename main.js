
let div = document.querySelector( 'div' );
console.log( div );
div.onclick =function ()
{
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    div.style.backgroundColor = `rgb(${ a },${ b },${ c })`;
};