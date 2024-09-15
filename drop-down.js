document.querySelector(".dropbtn").addEventListener("click",function(){
    document.querySelector(".dropdown-content").classList.toggle("show");

});
document.addEventListener("click",function(event){
    if(!event.target.matches(".dropbtn")&&!event.target.matches(".dropdown-content")){
        document.querySelector(".dropdown-content").classList.remove("show");
    }
});