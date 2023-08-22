
function esBisiesto(anio){
    if(anio == 4 || anio % 400 == 0){
        return true;
    }
    return false;
  }

export default esBisiesto;