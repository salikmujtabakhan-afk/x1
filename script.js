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
// ======================================================
// SCROLL REVEAL
// ======================================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},

{

    threshold:.15

}

);

revealElements.forEach(item=>{

    revealObserver.observe(item);

});

// ======================================================
// GALLERY MODAL
// ======================================================

const galleryItems = document.querySelectorAll(".gallery-item");

const imageModal = document.getElementById("imageModal");

const modalImage = document.getElementById("modalImage");

const modalCaption = document.getElementById("modalCaption");

const closeModal = document.getElementById("closeModal");

galleryItems.forEach(item=>{

    item.addEventListener("click",()=>{

        const image = item.querySelector("img");

        const caption = item.querySelector(".gallery-caption");

        modalImage.src = image.src;

        modalCaption.textContent = caption.textContent;

        imageModal.classList.add("active");

        document.body.style.overflow="hidden";

    });

});

closeModal.addEventListener("click",()=>{

    imageModal.classList.remove("active");

    document.body.style.overflow="";

});

imageModal.addEventListener("click",(e)=>{

    if(e.target===imageModal){

        imageModal.classList.remove("active");

        document.body.style.overflow="";

    }

});

// ======================================================
// TYPEWRITER LETTER
// ======================================================

const letter = document.getElementById("typedLetter");

const letterSection = document.getElementById("letter");

const text =

`Dear Sofia,

Sometimes words never feel enough.

Thank you for every smile,
every laugh,
and every memory we created together.

You make ordinary days feel extraordinary.

I hope today reminds you how deeply loved you are.

Happy Birthday ❤️

I Love You.

— Salik`;

let index = 0;

let typed = false;

function typeLetter(){

    if(typed) return;

    typed = true;

    function write(){

        if(index < text.length){

            letter.textContent += text.charAt(index);

            index++;

            setTimeout(write,45);

        }

    }

    write();

}

const letterObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            typeLetter();

        }

    });

},

{

    threshold:.35

}

);

letterObserver.observe(letterSection);
// ======================================================
// MUSIC FADE IN
// ======================================================

music.volume = 0;

function fadeMusic(){

    let volume = 0;

    const fade = setInterval(()=>{

        volume += 0.02;

        if(volume >= 0.4){

            volume = 0.4;

            clearInterval(fade);

        }

        music.volume = volume;

    },150);

}

// ======================================================
// REPLACE THE PREVIOUS MUSIC PLAY CODE
// ======================================================
//
// In unlockJourney(), replace:
//
// music.volume = 0.4;
// music.play().catch(()=>{});
//
// with:
//
// music.play().catch(()=>{});
// fadeMusic();
//
// ======================================================


// ======================================================
// FALLING PETALS
// ======================================================

const petals = document.querySelector(".petals");

for(let i=0;i<40;i++){

    const petal = document.createElement("div");

    petal.className = "petal-fall";

    petal.style.left = Math.random()*100+"%";

    petal.style.animationDuration =
    8 + Math.random()*8 + "s";

    petal.style.animationDelay =
    Math.random()*8 + "s";

    petal.style.opacity =
    .4 + Math.random()*.6;

    petal.style.transform =
    `rotate(${Math.random()*360}deg)`;

    petals.appendChild(petal);

}


// ======================================================
// REMOVE CURSOR AFTER LETTER
// ======================================================

const cursor = document.querySelector(".cursor");

function hideCursor(){

    if(cursor){

        cursor.style.display = "none";

    }

}


// ======================================================
// MODIFY TYPEWRITER
// ======================================================
//
// Replace the end of write() with:
//
// else{
//
//     hideCursor();
//
// }
//
// ======================================================


// ======================================================
// IMAGE PRELOAD
// ======================================================

const images = document.querySelectorAll("img");

images.forEach(img=>{

    const preload = new Image();

    preload.src = img.src;

});


// ======================================================
// SMALL BUTTON RIPPLE
// ======================================================

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",function(){

        this.animate(

        [

            {

                transform:"scale(1)"

            },

            {

                transform:"scale(.96)"

            },

            {

                transform:"scale(1)"

            }

        ],

        {

            duration:250

        });

    });

});


// ======================================================
// END
// ======================================================

console.log("The Journey To July 19 loaded successfully.");


