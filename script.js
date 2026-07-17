// ==========================================================
// THE JOURNEY TO JULY 19
// script.js
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {

    // ======================================================
    // ELEMENTS
    // ======================================================

    const loader = document.getElementById("loader");

    const puzzle = document.getElementById("puzzle");

    const hero = document.getElementById("hero");

    const unlockBtn = document.getElementById("unlockBtn");

    const yearInput = document.getElementById("yearInput");

    const message = document.getElementById("message");

    const beginJourney = document.getElementById("beginJourney");

    const music = document.getElementById("backgroundMusic");

    // ======================================================
    // LOADER
    // ======================================================

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.remove();

        },1000);

    },3000);

    // ======================================================
    // PUZZLE
    // ======================================================

    function unlockJourney(){

        const answer = yearInput.value.trim();

        if(answer === "2018"){

            message.textContent =
            "Exactly. Some memories never fade. ❤️";

            message.style.color = "#D4AF37";

            unlockBtn.disabled = true;

            yearInput.disabled = true;

            music.volume = 0.4;

            music.play().catch(()=>{});

            setTimeout(()=>{

                hero.classList.remove("hidden");

                hero.scrollIntoView({

                    behavior:"smooth"

                });

            },1200);

        }

        else{

            message.textContent =
            "Think a little harder ❤️";

            message.style.color = "#ffb3b3";

            yearInput.animate([

                {transform:"translateX(-8px)"},

                {transform:"translateX(8px)"},

                {transform:"translateX(-8px)"},

                {transform:"translateX(8px)"},

                {transform:"translateX(0)"}

            ],{

                duration:500

            });

        }

    }

    unlockBtn.addEventListener(

        "click",

        unlockJourney

    );

    yearInput.addEventListener(

        "keydown",

        e=>{

            if(e.key==="Enter"){

                unlockJourney();

            }

        }

    );

    // ======================================================
    // HERO BUTTON
    // ======================================================

    beginJourney.addEventListener(

        "click",

        ()=>{

            document

            .getElementById("timeline")

            .scrollIntoView({

                behavior:"smooth"

            });

        }

    );

    // ======================================================
    // FLOATING PARTICLES
    // ======================================================

    const particles = document.querySelector(".particles");

    for(let i=0;i<30;i++){

        const dot = document.createElement("span");

        dot.style.left =

        Math.random()*100+"%";

        dot.style.animationDuration =

        8+Math.random()*8+"s";

        dot.style.animationDelay =

        Math.random()*6+"s";

        dot.style.opacity =

        Math.random();

        particles.appendChild(dot);

    }

});
