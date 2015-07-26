 function calcula() {
    
    tempo = $('#tempo').val();
    resposta = $('#resposta');
    
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
        parametro = calc_gasto_individual;
        
        if (parametro < 150) {
            mensagem = "PARABÉNS. Se todos fizessem como você estariam contribuindo para um mundo melhor.";
        } else if (150 > parametro > 250) {
            mensagem = "SATISFATÓRIO, mas disperdiça muita água. Você pode fazer melhor.";
        } else {
            mensagem = "PÉSSIMO. VOCÊ PRECISA REVER OS SEUS CONCEITOS";
        }
        
        $('.titulo-resposta').text(mensagem);
        $('.texto-resposta').text(mensagem);
        
    }();
}


    
