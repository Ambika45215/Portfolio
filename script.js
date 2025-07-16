let card = document.querySelectorAll(".cards");
card.forEach((e) => {
    e.addEventListener("click", () => {
        e.classList.toggle("rotate");
    });
});

function sidebar(){
       let side=document.body.querySelector(".sidebar")
       side.style.display="flex";
   }
   function hidesidebar(){
       let hide=document.body.querySelector(".sidebar")
       hide.style.display="none";
   }