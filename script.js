document.addEventListener('DOMContentLoaded', () => {
    let moon = document.getElementById("moon");
    let text = document.getElementById("text");
    let train = document.getElementById("train");
    let desertMoon = document.getElementById("desert-moon");
    let man = document.getElementById("man");
    let scrollProgress = document.getElementById("progress");

    // Fungsi untuk menghitung dan memperbarui nilai scroll
    const calcScrollValue = () => {
        let pos = document.documentElement.scrollTop;
        let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);

        if (scrollProgress) {
            if (pos > 100) {
                scrollProgress.style.display = "grid";
            } else {
                scrollProgress.style.display = "none";
            }

            // Mengatur background gradient scrollProgress
            scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%, #67ccff ${scrollValue}%)`;
        }
    };

    // Event listener untuk scroll
    window.addEventListener("scroll", () => {
        let value = window.scrollY;

        // Mengatur posisi elemen moon
        if (moon) {
            moon.style.top = value * 0.9 + "px";
        }

        // Mengatur posisi elemen text
        if (text) {
            text.style.top = 600 - value + "px"; // Perbaikan: mengurangi value untuk bergerak ke atas saat scroll
        }

        // Mengatur posisi elemen train
        if (train) {
            train.style.left = value * 1.5 + "px";
        }

        // Mengatur posisi elemen desert-moon
        if (desertMoon) {
            desertMoon.style.top = value * 0.3 + "px";
        }

        // Mengatur posisi elemen man
        if (man) {
            man.style.left = value * 0.6 + "px";
        }

        // Memanggil fungsi untuk memperbarui nilai scroll
        calcScrollValue();
    });

    // Event listener untuk klik pada scrollProgress
    if (scrollProgress) {
        scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });
    }

    // Memanggil fungsi calcScrollValue saat halaman dimuat
    calcScrollValue();
});
