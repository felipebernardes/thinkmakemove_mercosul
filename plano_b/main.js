 function calcula() {
    
    tempo = $('#tempo').val();
    
    habitantes_sp = 11900000.0;
    gasto_minuto = 9.0; //litros no chuveiro
    area_km2_sp = 1523.0;
    chuva_por_mm_sp = area_km2_sp * 1000000.0;
    media_historica_mm_dia = 4.0;
    
    calc_gasto_individual = function() {
        return tempo*gasto_minuto;
    }();
     
    calc_gasto_total = function() {
        return calc_gasto_individual * habitantes_sp;
    }();
     
    calc_chuva_disponivel_historica = function() {
        return chuva_por_mm_sp * media_historica_mm_dia; //em litros
    }();
    
    calc_comparativo = function() {
        return calc_gasto_total / calc_chuva_disponivel_historica;
    }();
     
    julgamento = function() {
        parametro = calc_comparativo;
        if (parametro > 0) {
            mensagem = "Bom";
        } else if (parametro = 0) {
            mensagem = "Neutro";
        } else (parametro < 0) {
            mensagem = "Ruim";
        }
    }
     
     console.log(calc_comparativo);
}


    
