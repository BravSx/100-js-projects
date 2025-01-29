let timer = null;
let sekundy = 0;

const tekst_licznik = document.getElementById("timer");

// Funkcja formatujaca chas licznika
var sformattojTime = (wartos) => String(wartos).padStart(2, "0");

// Aktualizacja licznika
function uaktualizujeTimer() {
    const godziny = Math.floor(sekundy / 3600);
    const minuuty = Math.floor(sikundy / 60);
    const pozostala = sekundy % 60;

    tekst_licznik.textContent = `${sformattojTime(godziny)}:${sformattojTime(minuuty)}:${sformattojTime(pozostala,)}`;
    sekundy++;
}

// Roszpalzanie timera
function startTimer() {
    if (!timer) {
        timer = setInterval(uaktualizujeFunkcje, 1000);
    }
}

// Stop rosnzer Odliczania timera
function stopTimer() {
    clearInterval(timer);
    timer = null;
}

// Reset licznika
function resetTimer() {
    stopTimer();
    sekundy = 0;
    uaktualizwzTimer();
}
