// Initializing the required variables

let link_lists=document.querySelectorAll(".link-list")
let icon=document.querySelector(".navbar li i");
let body=document.body;
let greetings=document.querySelector("#Hero");
let hexagons=document.querySelectorAll(".hexagon");

//=======================================================================

// When the mouse hovers overs the links remove the glayscale, indicating that it works.
link_lists.forEach((x)=>{
    x.addEventListener("mouseover", ()=>{
        let images=x.querySelectorAll("img");
        images.forEach((x)=>{
            x.style.filter="grayscale(0%)";
        })
    })
})
link_lists.forEach((x)=>{
    x.addEventListener("mouseout", ()=>{
        let images=x.querySelectorAll("img");
        images.forEach((x)=>{
            x.style.filter="grayscale(100%)";
        })
    })
})

// LIGHT MODE AND DARK MODE FOR JUST THE HERO SECTION.

icon.addEventListener("click", ()=>{
    if (icon.classList.contains("fa-sun")){
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        body.style.backgroundColor="#fff";
        greetings.classList.toggle("dark-mode");
        hexagons.forEach((x)=>{
            x.classList.toggle("dark-mode")
        })
    }
    else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        body.style.backgroundColor="#000";
        greetings.classList.toggle("dark-mode");
        hexagons.forEach((x)=>{
            x.classList.toggle("dark-mode")
        })
    }
})

// ======================================================================


