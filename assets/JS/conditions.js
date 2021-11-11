const x = 1;
const y = 4;
const z = -1;

if ( x < 2 ) {
    (document.querySelector('#d1')).innerHTML = "X est strictement inférieur à 2"
}
else{
    (document.querySelector('#d1')).innerHTML = "X est supérieur ou égal à 2"
}


if ( y > 3 ) {
    (document.querySelector('#d2')).innerHTML = "Y est strictement supérieur à 3"
}
else{
    (document.querySelector('#d2')).innerHTML = "Y est inférieur ou égal à 2"
}


if ( z <= 0 ) {
    (document.querySelector('#d3')).innerHTML = "Y est inférieur ou égal à 0"
}
else{
    (document.querySelector('#d3')).innerHTML = "Y est strictement supérieur à 0"
}


if ( (z <= 0) + (y > 3) + ( x < 2 ) ) {
    (document.querySelector('#d4')).innerHTML = "Les trois conditions sont vrais"
}
else{
    (document.querySelector('#d4')).innerHTML = "Au moins une des trois conditions n'est pas vraie"
}


if ( (z <= 0) + (y > 3) + ( x < 2 ) ) {
    (document.querySelector('#d4')).innerHTML = "Les trois conditions sont vrais"
}
else{
    (document.querySelector('#d4')).innerHTML = "Au moins une des trois conditions n'est pas vraie"
}


if ( (z === -1) || (y > 3) + ( x < 2 ) ) {
    (document.querySelector('#d5')).innerHTML = "Les trois conditions sont vrais"
}
else{
    (document.querySelector('#d5')).innerHTML = "Z n'est pas strictement égal à -1 et Y n'est pas strictement supérieur à 3 et/ou X n'est pas strictement inférieur à deux"
}