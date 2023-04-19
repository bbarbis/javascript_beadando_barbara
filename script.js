import { tablazatbanMegjelenit } from "./megjelenit.js";
import { OBJEKTUMLISTA, kulcsLista } from "./lista.js";
import { rendezesObjektum } from "./rendezes.js";
import { szurKorSzerint, szurNevSzerint } from "./szures.js";


$(function(){

    const tablazat = $(".tabla");
    let txt = tablazatbanMegjelenit(OBJEKTUMLISTA);

    tablazat.html(txt)

    let szuresiFeltetel = "d";
    let szurtLista = szurNevSzerint(OBJEKTUMLISTA, szuresiFeltetel);

    const nevELEM = $("#neve");
    nevELEM.on("keyup", function(){
        szuresiFeltetel = nevELEM.val();
        szurtLista = szurNevSzerint(OBJEKTUMLISTA, szuresiFeltetel);
        tablaMegjelenitese(szurtLista);
    });

    tablaMegjelenitese(OBJEKTUMLISTA);
});

function tablaMegjelenitese(lista){
    const tabla = $(".tabla");
    let t = tablazatbanMegjelenit(lista);
    tabla.html(t);
    $("#neve").click(function(){
        rendezesObjektum(lista, "nev");
        tablaMegjelenitese(lista);
    });
}
