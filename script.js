function changeText(){
    document.getElementById("title").innerHTML =
    "به دنیای برنامه‌نویسی خوش اومدی 🚀";
}
function contactme(){
  window.open("https://t.me/@itxxabolfazl" , "_blank");
}
function openMenu(){
    const menu = document.getElementById("menu");
    menu.style.display = "flex";

    setTimeout(()=>{
        menu.classList.add("show");
    },10);
}

function closeMenu(){
    const menu = document.getElementById("menu");
    menu.classList.remove("show");

    setTimeout(()=>{
        menu.style.display = "none";
    },300);
}
function outsideClick(event){
    closeMenu();
}