var star=document.getElementsByClassName('fa-star')
var value= document.getElementById('value_container')
var curr_rating=0;
for (let i=0 ; i<star.length ; i++){
    star[i].addEventListener('mouseenter',()=>{
        for (let j =0 ; j<=i ; j++){
            star[j].classList.replace('fa-regular','fa-solid')
        }
    })
    star[i].addEventListener('mouseleave',()=>{
        star[i].classList.replace('fa-solid','fa-regular')
        for (let j =0 ; j<=curr_rating ; j++){
            star[j].classList.replace('fa-regular','fa-solid')
        }
       
    })
    star[i].addEventListener('click',()=> {
        for (let j =0 ; j<=i ; j++){
            star[j].classList.replace('fa-regular','fa-solid')
        }
        curr_rating=i;
        value.innerText=i+1
    })
}
