export function tablazatbanMegjelenit(OBJEKTUMLISTA) {
    let text = "<table>";
  
    text += "<tr><th id ='nev'>Név⇅</th><th>Kor⇅</th><th>Fajta⇅</th></tr>";
  
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
        "</<tr>";
    }
  
    // jQuery append metódus használata
    text += "</table>"; 
  
    return text;
  }
  
  