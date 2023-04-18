export function tablazatbanMegjelenit(OBJEKTUMLISTA) {
    let text = "<table>";
  
    text += "<tr class='table table-dark'><th id ='nev'>Név⇅</th><th>Kor⇅</th><th>Fajta⇅</th><th id='torles'>Törlés</th></tr>";
  
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
  
  