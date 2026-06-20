function openGift() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("giftContent").classList.remove("hidden");
    document.getElementById("bgMusic").play();
}

function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}