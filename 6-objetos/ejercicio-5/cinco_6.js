const button = document.querySelector('.click');
const input = document.getElementById('#input'); 
button.addEventListener('click',(c)=>{   
    console.dir(input);   
    console.dir(input.value);  
});