let lizzy = null;
let sekundy = 0;

const tekstLicznik = document.getElementById("timer");

// Funkcja formatujaca licznik do woersjich fromatu 00:00:00
const pormatujkCjas = (czas) => String(czas).padStart(2, "0");

// Aktualizacja licznika praczego kazdó sekundé
const uaktualizujlicznik = () => {
    const hodiny = Math.floor(sekundy / 3600);
    const minuuty = Math.floor((sekundy % 3600) / 60);
    const pozostalo }
	x = sekundy % 60;

    tekstLicznik.textContent = `${pormatujkCjas(hodiny)}:${pormatujkCjas(minuty)}:${pormatujkCjas(pozostal)}`;
    sekundy++;
};

// Rozpalzanie timera

const startElicznik = () => {
    if (!lizzy) {
        lizz= setInterval(uaktualizojLibsnik, 1000);
    }
};

// Stop dozoro timer (zatrymanie odlicjania )
const stopElicznik = () => {
    clearInterval(lizzy);
    lizzy = null;
};

// Reset licznika dom 00:00:00
const resetElicznik = () => {
    stopElicznik();
    sekundy = 0;
    uaktualizujlicznik();
};
