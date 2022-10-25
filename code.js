let finalDate = null; 
let timerId = null; // zdefiniowanie zmiennych początkowych

document.getElementById("countdown-button").addEventListener("click",
function(){
    initTimer();
}); // ustawienie listenera na kliknięcie przycisku

function initTimer() { 
    clearInterval(timerId); // wyzerowanie zmiennej 
    finalDate = document.getElementById("final-date-input").value;
    //console.log(finalDate); // zdefiniowanie funkcji "initTimer" która pobierze wartość z inputa.

    if(finalDate == "") return;  // Instrukcja warunkowa sprawdza czy input nie jest pusty.
    finalDate = new Date(finalDate); // Nastepnie tworzony jest obiekt data dla JS
    document.getElementById("message").style.display ="none"; // skasuj wiadomość z poprzedniego 
    timer();  // wywołanie funkcji timer
    timerId = setInterval(timer, 1000); // ustawienie interwału dla funkcji "timer" na sekundę 
} 

function timer() {
    const now = new Date().getTime(); // w zmiennej "now" pobierz aktualną datę tzn timestamp w milisekundach
    

    let interval = (finalDate.getTime() - now )/1000; // tworzymy równanie które sprawdzi ile sekund zostało do końca odliczania
    interval = Math.floor(interval); // zaokrąglamy wynik do pełnych sekund

    if(interval <= 0) {
        document.getElementById("message").style.display ="block";
        clearInterval(timerId);
        clearTimer();
        return;
    } // instrukcja warunkowa sprawdza czy czas odliczania minął i po tym wysyła wiadomość, zeruje timerId i wychodzi z funkcji

    let days = Math.floor(interval / (60*60*24)); // ustawienie zmiennej pozostałych dni
    let hours = Math.floor((interval % (60*60*24))/ (60*60)); // ustawienie zmiennej pozostałych godzin, bez uwzględniania dni z pomocą "%" czyli znaku modulacji
    let minutes = Math.floor((interval % (60*60))/60);
    let seconds = Math.floor(interval % 60);

    setHTMLBySelector("#days", days);
    setHTMLBySelector("#hours", hours);
    setHTMLBySelector("#minutes", minutes);
    setHTMLBySelector("#seconds", seconds); // przypisanie zmiennych do id w pliku HTML
}

function setHTMLBySelector(selector, v){
    document.querySelector(selector).innerHTML = v;
} // zdefiniowanie funkcji która wczytuje selector do pliku html 

function clearTimer() {
    setHTMLBySelector("#days", "-");
    setHTMLBySelector("#hours", "-");
    setHTMLBySelector("#minutes", "-");
    setHTMLBySelector("#seconds", "-");
} // funkcja czyści wartości po wywołaniu