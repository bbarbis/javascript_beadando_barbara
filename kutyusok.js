export function KutyusAdatMegjelen(OBJEKTUMLISTA2, kulcsLista2) {
    let cards = ""; // inicializáljuk a változót, amiben a kártyákat tároljuk
    for (let i = 0; i < OBJEKTUMLISTA2.length; i++) {
      cards +=
        '<div class="col-sm-4">' +
        '<div class="card">' +
        '<div class="card-header">' +
        OBJEKTUMLISTA2[i].nev +
        '</div>' +
        '<div class="card-body">' +
        OBJEKTUMLISTA2[i].kor +
        '</div>' +
        '<div class="card-footer"><button type="button" class="btn btn-default">Mutat</button></div>' +
        OBJEKTUMLISTA2[i].fajta +
        '</div>' +
        '</div>'; // zárjuk le a div elemeket
    }
    cards = '<div class="row">' + cards + '</div>'; // hozzáadjuk a row elemet a kártyákhoz
    return cards; // visszatérünk a kártyákkal
  }
  