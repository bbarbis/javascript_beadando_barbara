export function szurNevSzerint(OBJEKTUMLISTA, szuresiFeltetel) {
    const eredmenyLista = $(OBJEKTUMLISTA).filter(function () {
      return $(this).find('.nev').text().toLowerCase().includes(szuresiFeltetel.toLowerCase());
    }).get();
  
    return eredmenyLista;
  }
  
  export function szurKorSzerint(OBJEKTUMLISTA, szuresiFeltetel) {
    const eredmenyLista = $(OBJEKTUMLISTA).filter(function () {
      return ($(this).find('.kor').text() + szuresiFeltetel);
    }).get();
  
    return eredmenyLista;
  }