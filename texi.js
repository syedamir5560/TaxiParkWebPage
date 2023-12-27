const hambergerIcon=document.querySelector(".fa-bars");

function toggleHamberger(){
    hambergerIcon.classList.toggle('fa-xmark')
}

hambergerIcon.addEventListener("click",toggleHamberger);