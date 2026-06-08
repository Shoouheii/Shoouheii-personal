const gallery = document.getElementById("gallery");

// otomatis load gambar 1-4

for(let i = 1; i <= 4; i++){

    const img = document.createElement("img");

    img.src = `assets/gallery ${i}.jpg`;

    gallery.appendChild(img);
}

// popup

const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup-image");
const closePopup = document.querySelector(".close-popup");

document.addEventListener("click",(e)=>{

    if(e.target.matches(".artworks img")){

        popupImage.src = e.target.src;

        popup.classList.add("show");

    }

});

function closeGallery(){

    popup.classList.remove("show");

}

closePopup.addEventListener("click",closeGallery);

popup.addEventListener("click",(e)=>{

    if(e.target === popup){

        closeGallery();

    }

});

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if(music.paused){

        music.play();
        musicBtn.textContent = "⏸";

    } else {

        music.pause();
        musicBtn.textContent = "▶";

    }

});

const progress = document.querySelector(".progress");

progress.addEventListener("click", (e) => {

    const width = progress.clientWidth;
    const clickX = e.offsetX;

    const duration = music.duration;

    music.currentTime =
        (clickX / width) * duration;

});
