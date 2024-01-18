const tiles = document.querySelectorAll(".tiles");

let allKeys = [];
let audio = new Audio("tunes/A.wav");

const playSound = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();
    let tile = document.querySelector(`[data-key="${key}"]`);
    tile.classList.add("active");
    setTimeout(() => {
        tile.classList.remove("active");
    }, 150);
};

tiles.forEach((tile) => {
    allKeys.push(tile.dataset.key);
    tile.addEventListener("click", () => playSound(tile.dataset.key));
    console.log(tile.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if (allKeys.includes(e.key.toUpperCase())) {
        playSound(e.key.toUpperCase());
    }
});