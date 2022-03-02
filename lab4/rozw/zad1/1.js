tablica = new Array(5)
tablica[0] = "nda"
tablica[1] = "aaaa"
tablica[2] = "fegesa"
tablica[3] = "drg"
tablica[4] = "jngajnaf"

tablica.push("PAW")
function makeUpperCase(v) {
    return v.toUpperCase();
}
var uppers = tablica.map(makeUpperCase);
var lens = []

tablica.forEach(element => {
    lens.push(element.length);
});


console.table()