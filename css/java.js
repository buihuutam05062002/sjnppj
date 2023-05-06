const bar =document.getElementById('nav');
const nav =document.getElementById('navbar');
if (bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
