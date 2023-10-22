let burger=document.querySelector(".burger");
let list=document.querySelector('.item-list')

burger.addEventListener('click',()=>{
    list.classList.toggle('active')
})