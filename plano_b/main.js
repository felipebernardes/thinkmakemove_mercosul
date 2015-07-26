calculadora = $('#calculator');
tempo = calculadora.$('#tempo');

habitantes_sp = 12000000; //
gasto_minuto = 9; //litros

form.submit = function(e) {
    e.preventDefault;
    
    gasto_individual = tempo * gasto_minuto;
    gasto_total = gasto_individual * habitantes_sp;
    
    return gasto_total;
    
}



    
