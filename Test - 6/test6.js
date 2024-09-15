const navbar = document.getElementById("navbar");

navbar.addEventListener("click",()=>{
  navbar.classList.toggle("active"); 
});
const currentPage = window.location.hash;
const links = navbar.querySelectorAll("a");

links.forEach((link)=>{
    if(link.getAttribute("href")===currentPage){
        link.classList.add("active");
    }
});
