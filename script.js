const gallery = document.getElementById("gallery");

// Load gallery images
for (let i = 1; i <= 4; i++) {
    const img = document.createElement("img");

    img.src = `assets/gallery ${i}.jpg`;

    gallery.appendChild(img);
}

// =========================
// Gallery Popup
// =========================

const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup-image");
const closePopup = document.querySelector(".close-popup");

document.addEventListener("click", (e) => {
    if (e.target.matches(".artworks img")) {
        popupImage.src = e.target.src;
        popup.classList.add("show");
    }
});

function closeGallery() {
    popup.classList.remove("show");
}

closePopup.addEventListener("click", closeGallery);

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        closeGallery();
    }
});

// =========================
// Music Player
// =========================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
    if (music.paused) {
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

    if (music.duration) {

        music.currentTime =
            (clickX / width) * music.duration;

    }

});

music.addEventListener("play", () => {
    musicBtn.textContent = "⏸";
});

music.addEventListener("pause", () => {
    musicBtn.textContent = "▶";
});

// Update Progress Bar
music.addEventListener("timeupdate", () => {

    if (music.duration) {

        const progressPercent =
            (music.currentTime / music.duration) * 100;

        document.querySelector(".progress-bar").style.width =
            `${progressPercent}%`;
    }

});

// =========================
// FAQ Popup
// =========================

const aboutBtn = document.getElementById("aboutBtn");
const popupInfo = document.getElementById("popupInfo");
const closeInfo = document.querySelector(".close-info");

aboutBtn.addEventListener("click", () => {
    popupInfo.classList.add("show");
});

closeInfo.addEventListener("click", () => {
    popupInfo.classList.remove("show");
});

popupInfo.addEventListener("click", (e) => {
    if (e.target === popupInfo) {
        popupInfo.classList.remove("show");
    }
});