import { tablazatbanMegjelenit } from "./megjelenit.js";
import { OBJEKTUMLISTA, kulcsLista } from "./lista.js";
import { rendezesObjektum } from "./rendezes.js";
import { szurKorSzerint, szurNevSzerint } from "./szures.js";

$(function() {
  const tablazat = $(".tabla");
  let txt = tablazatbanMegjelenit(OBJEKTUMLISTA);
  tablazat.html(txt);

  let szuresiFeltetel = "";
  let szurtLista = szurNevSzerint(OBJEKTUMLISTA, szuresiFeltetel);

  const nevELEM = $("#nev");
  nevELEM.on("keyup", function() {
    szuresiFeltetel = nevELEM.val();
    szurtLista = szurNevSzerint(OBJEKTUMLISTA, szuresiFeltetel);
    tablazat.html(tablazatbanMegjelenit(szurtLista));
  });

  nevSzerint();
});

export function nevSzerint() {
  const tabla = $(".tabla");
  let t = tablazatbanMegjelenit(OBJEKTUMLISTA);
  tabla.html(t);

  $("#nev").click(function() {
    rendezesObjektum(OBJEKTUMLISTA, "nev");
    nevSzerint();
  });
}
