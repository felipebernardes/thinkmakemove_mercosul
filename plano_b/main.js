 function calcula() {
    
    tempo = $('#tempo').val();
    
    habitantes_sp = 11900000.0;
    gasto_minuto = 9.0; //litros no chuveiro
    area_km2_sp = 1523.0;
    chuva_por_mm_sp = area_km2_sp * 1000000.0;
    media_historica_mm_dia = 4.0;
     
    gasto_individual = tempo * gasto_minuto;
    gasto_total = gasto_individual * habitantes_sp;
     
    chuva_disponivel_historica_L = chuva_por_mm_sp * media_historica_mm_dia;
    comparativo = gasto_total/chuva_disponivel_historica_L;
    
    console.log(comparativo);
}


    
