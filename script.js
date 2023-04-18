import { tablazatbanMegjelenit} from "./megjelenit.js";
import { OBJEKTUMLISTA, kulcsLista} from "./lista.js";
import { rendezesObjektum } from "./rendezes.js";
import { szurKorSzerint, szurNevSzerint} from "./szures.js";

$(function(){

    const tablazat = $(".tabla");
    let txt = tablazatbanMegjelenit(OBJEKTUMLISTA);

    tablazat.html(txt)

    let szuresiFeltetel = "d";
    var szurtLista = szurNevSzerint(OBJEKTUMLISTA, szuresiFeltetel);
    const szurFelt = "<12";
    var szurtLista = szurKorSzerint(OBJEKTUMLISTA, szuresiFeltetel);

    const nevELEM = $("#nev");
    nevELEM.on("keyup", function(){
        szuresiFeltetel = nevELEM.val();
        szurtLista = szurNevSzerint(OBJEKTUMLISTA, szuresiFeltetel);

    });
    nevSzerint();

});

export function nevSzerint(){
    const tabla = $(".tabla");
    let t = tablazatbanMegjelenit(OBJEKTUMLISTA);
    tabla.html(txt);
    $("#nev").click(function(){
        rendezesObjektum(OBJEKTUMLISTA, "nev");
        nevSzerint();

    });
}