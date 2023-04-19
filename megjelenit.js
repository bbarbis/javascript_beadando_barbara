export function tablazatbanMegjelenit(OBJEKTUMLISTA) {
    let text = "<table class='table'>";
  
    text += "<thead class='table-dark'><tr><th id='neve'>Név⇅</th><th id='kora'>Kor⇅</th><th id='faja'>Fajta⇅</th><th id='torles'>Törlés</th></tr></thead>";
  
    for (let i = 0; i < OBJEKTUMLISTA.length; i++) {
      text +=
        "<tr>" +
        "<td>" +
        OBJEKTUMLISTA[i].nev +
        "</td>" +
        "<td>" +
        OBJEKTUMLISTA[i].kor +
        "</td>" +
        "<td>" +
        OBJEKTUMLISTA[i].fajta +
        "</td>" +
        "<td>❌</td></tr>";
    }
  
    // jQuery append metódus használata
    text += "</table>"; 
  
    return text;
  }
  
  