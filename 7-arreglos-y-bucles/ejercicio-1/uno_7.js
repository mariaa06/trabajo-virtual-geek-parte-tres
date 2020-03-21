const movies = [
    'First man',
    'Interstellar',
    'Origins',
];
movies[3] = ('The code');
movies[0] = ('The code');


const nuevaLongitud = movies.push('The code');
const elementosEliminados = movies.splice(0, 1);

console.log(movies);
console.log(movies.length);
console.log(nuevaLongitud);
console.log(elementosEliminados);
console.log(movies.length);
console.log(movies);
