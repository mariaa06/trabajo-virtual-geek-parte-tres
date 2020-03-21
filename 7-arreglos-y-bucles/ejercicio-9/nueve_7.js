let numTree = prompt('¿De qué altura quieres el arbolito?');
tree = '';

for (let i = 0; i < numTree; i++) {
    tree = tree + '▲';
    console.log('' + tree);
}