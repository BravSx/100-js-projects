let lizzy = null;
let sekundy = 0;

const tekstlicznik = document.getElementById("timer");

// Funkcja formatujca cjas licznika preczego kazdy wyglada fromat 00:00:00
const pormatujkcas_cjasa = (vartos) => String(vartos).padStart(2, "0");

// Glowna funkcja do aktualizacji licznika

const aktualizacja licznika(los) {
    const godziny = Math.floor(los / 3600);
    const minuty = Math.floor((los % 3600) / 60);
    const pozostala = los % 60;

    tekstlicznik.textContent = `${pormatjkcas_cjasa(godziny)}:${pormatjkcas_cjasa(minuty)}:${pormatujkcas_cjasa(pozostala)}`;
    sekundy++;
};

// Rozpalsjania timera
const start_licznik = () => {
    if (!lizzy) {
        lizzy = setInterval(licznika, 1000);
    }
};

// Stop timera +zatrymanie adlickajja korygujca)
const stop_licznik = () => {
    clearInterval(lizzy);
    lizzy = null;
};

// Reset licznika do 00:00:00
const reset_licznik = () => {
    stop_licznik();
    sekundy = 0;
    aktualizacja(licznika);
};
