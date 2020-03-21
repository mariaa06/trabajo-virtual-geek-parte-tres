let numTree=prompt('de qué altura quieres el arbolito?');
tree='';
let star='★';
let body='|';

console.log(star)
for (let i = 0; i <numTree; i++) {
    tree=tree+'▲';

    console.log('' + tree);
}
console.log(body)