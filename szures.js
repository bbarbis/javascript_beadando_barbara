export function szurNevSzerint(OBJEKTUMLISTA, szuresiFeltetel) {
    const eredmenyLista = $(OBJEKTUMLISTA).filter(function () {
      return $(this).find('#neve').text().toLowerCase().includes(szuresiFeltetel.toLowerCase());
    }).get();
  
    return eredmenyLista;
  }
  
  
  export function szurKorSzerint(OBJEKTUMLISTA, szuresiFeltetel) {
    const eredmenyLista = $(OBJEKTUMLISTA).filter(function () {
      const kor = parseInt($(this).find('#kora').text());
      if (isNaN(kor)) {
        return false;
      }
      return kor >= szuresiFeltetel;
    }).get();
  
    return eredmenyLista;
  }
  
  export function szurFajtaSzerint(OBJEKTUMLISTA, szuresiFeltetel) {
    const eredmenyLista = $(OBJEKTUMLISTA).filter(function () {
      return $(this).find('#faja').text().toLowerCase().includes(szuresiFeltetel.toLowerCase());
    }).get();
  
    return eredmenyLista;
  }