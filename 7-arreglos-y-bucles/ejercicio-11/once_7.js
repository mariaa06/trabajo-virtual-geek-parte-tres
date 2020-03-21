let numTree=0,tree=1,str=' ',trg='▲';
numTree=prompt('¿De qué altura quieres el arbolito?');
let star='★'
let body='|';
console.log(str.repeat(numTree)+star);
for (let i = numTree; i >=0; i--) {    
    console.log(str.repeat(i)+trg.repeat(tree));
    tree+=2;
}
console.log(str.repeat(numTree)+body);
