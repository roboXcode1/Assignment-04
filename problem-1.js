function calculateVAT( price ) {
    if(typeof price   !== 'number' || price < 0 ){
        return ' "Invalid" '
    }
    else{
    let vat = price * 7.5 / 100;
    return vat;
    }

}

  console .log(calculateVAT(-434))
  console .log(calculateVAT('rgr'))
   console .log(calculateVAT(54))
