document.addEventListener("DOMContentLoaded", (e) => {

    let icn = document.querySelector("#fa-cog")
    
    icn.addEventListener("mouseover", (e) => {
        e.target.setAttribute("class", "far fa-cog fa-spin");
    });
    icn.addEventListener("mouseout", (e) => {
        e.target.setAttribute("class", "far fa-cog");
    });
});