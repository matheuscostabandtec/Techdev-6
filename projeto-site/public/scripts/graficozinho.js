

var n1;
var n2;
var n3;
var n4;

    window.onload = testezinho();
    
    var exibiu_grafico = false;

    verificar_autenticacao();


    // só mexer se quiser alterar o tempo de atualização
    // ou se souber o que está fazendo!
    function atualizarGrafico() {
        obterDadosGrafico();
        setTimeout(atualizarGrafico, 5000);
    }

    // altere aqui as configurações do gráfico
    // (tamanhos, cores, textos, etc)
    function configurarGrafico() {
        var configuracoes = {
            responsive: true,
            animation: exibiu_grafico ? false : {duration: 1500},
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Histórico recente de temperatura'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-temperatura',
                }],
            }
        };

        exibiu_grafico = true;

        return configuracoes;
    }
    function configurarGrafico2() {
        var configuracoes = {
            responsive: true,
            animation: exibiu_grafico ? false : {duration: 1500},
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Histórico recente de temperatura'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-temperatura',
                }],
            }
        };

        exibiu_grafico = true;

        return configuracoes;
    }
    function configurarGrafico3() {
        var configuracoes = {
            responsive: true,
            animation: exibiu_grafico ? false : {duration: 1500},
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Histórico recente de temperatura'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-temperatura',
                }],
            }
        };

        exibiu_grafico = true;

        return configuracoes;
    }
    function configurarGrafico4() {
        var configuracoes = {
            responsive: true,
            animation: exibiu_grafico ? false : {duration: 1500},
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Histórico recente de temperatura'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-temperatura',
                }],
            }
        };

        exibiu_grafico = true;

        return configuracoes;
    }

    // altere aqui como os dados serão exibidos
    // e como são recuperados do BackEnd
    function obterDadosGrafico() {

        // neste JSON tem que ser 'labels', 'datasets' etc, 
        // porque é o padrão do Chart.js
        var dados = {
            labels: [],
            datasets: [
                {
                    yAxisID: 'y-temperatura',
                    label: 'Temperatura',
                    borderColor: window.chartColors.red,
                    backgroundColor: window.chartColors.red,
                    fill: false,
                    data: []
                },
               
            ]
        };
        var dados2 = {
            labels: [],
            datasets: [
                {
                    yAxisID: 'y-temperatura',
                    label: 'Temperatura',
                    borderColor: window.chartColors.red,
                    backgroundColor: window.chartColors.red,
                    fill: false,
                    data: []
                },
               
            ]
        };
        var dados3 = {
            labels: [],
            datasets: [
                {
                    yAxisID: 'y-temperatura',
                    label: 'Temperatura',
                    borderColor: window.chartColors.red,
                    backgroundColor: window.chartColors.red,
                    fill: false,
                    data: []
                },
               
            ]
        };
        var dados4 = {
            labels: [],
            datasets: [
                {
                    yAxisID: 'y-temperatura',
                    label: 'Temperatura',
                    borderColor: window.chartColors.red,
                    backgroundColor: window.chartColors.red,
                    fill: false,
                    data: []
                },
               
            ]
        };

        fetch('/leituras/ultimas', { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    resposta.reverse();

                    for (i = 0; i < resposta.length; i++) {
                        var registro = resposta[i];
                    
                        // aqui, após 'registro.' use os nomes 
                        // dos atributos que vem no JSON 
                        // que gerou na consulta ao banco de dados
                        n1 = registro.temperatura;
                        n2 = (n1 * Math.random()*2) - 2;
                        n3 = (n1* Math.random()*1) + 3;
                        n4 = (n1 * Math.random()*1.2);

                        dados.labels.push(registro.momento_grafico);
                        dados.datasets[0].data.push(n1);
                        
                        dados2.labels.push(registro.momento_grafico);
                        dados2.datasets[0].data.push(n2);

                        dados3.labels.push(registro.momento_grafico);
                        dados3.datasets[0].data.push(n3);

                        dados4.labels.push(registro.momento_grafico);
                        dados4.datasets[0].data.push(n4);
                        
                        if (n1 >= 2 && n1 <= 3.5 || n1 >= 6.5 && n1 <= 8){
                            but1.style.backgroundColor = "yellow";    
                            temp_real.style.color = "yellow";                        
                        }
                        else if (n1 > 8 || n1 < 2 ){
                            but1.style.backgroundColor = "red";
                            temp_real.style.color = "red";
                        }
                        else{
                            but1.style.backgroundColor = "#73ccfc";
                            temp_real.style.color = "white";
                        }

                        if (n2 <= 3.5 && n2 >= 2 || n2 >= 6.5 && n2 <= 8){
                            but2.style.backgroundColor = "yellow";
                            temp_real2.style.color = "yellow";
                        }
                        else if (n2 > 8 || n2 < 2 ){
                            but2.style.backgroundColor = "red";
                            temp_real2.style.color = "red";
                        }
                        else{
                            but2.style.backgroundColor = "#73ccfc";
                            temp_real2.style.color = "white";
                        }

                        if (n3 >= 2 && n3 <= 3.5 || n3 >= 6.5 && n3 <= 8){
                            but3.style.backgroundColor = "yellow";
                            temp_real3.style.color = "yellow";
                        }
                        else if (n3 > 8 || n3 < 2 ){
                            but3.style.backgroundColor = "red";
                            temp_real3.style.color = "red";
                        }
                        else {
                            but3.style.backgroundColor = "#73ccfc";
                            temp_real3.style.color = "white";
                        }
                        
                        if (n4 >= 2 && n4 <= 3.5 || n4 >= 6.5 && n4 <= 8){
                            but4.style.backgroundColor = "yellow";
                            temp_real4.style.color = "yellow";
                        }
                        else if (n4 > 8 || n4 < 2 ){
                            but4.style.backgroundColor = "red";
                            temp_real4.style.color = "red";
                        }
                        else{
                            but4.style.backgroundColor = "#73ccfc";
                            temp_real4.style.color = "white";
                        }


                    }

                    console.log(JSON.stringify(dados));
                    div_aguarde.style.display = 'none';
                    temp_real.innerHTML = `${n1.toFixed(2)} graus`;
                    temp_real2.innerHTML = `${n2.toFixed(2)} graus`;
                    temp_real3.innerHTML = `${n3.toFixed(2)} graus`;
                    temp_real4.innerHTML = `${n4.toFixed(2)} graus`;
                    plotarGrafico(dados);
                    plotarGrafico2(dados2);
                    plotarGrafico3(dados3);
                    plotarGrafico4(dados4);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });

    }

    // só altere aqui se souber o que está fazendo!
    function plotarGrafico(dados) {
        console.log('iniciando plotagem do gráfico...');

        var ctx = canvas_grafico.getContext('2d');
        window.grafico_linha = Chart.Line(ctx, {
            data: dados,
            options: configurarGrafico()
        });
    }
    function plotarGrafico2(dados2) {
        console.log('iniciando plotagem do gráfico...');

        var ctx = canvas_grafico2.getContext('2d');
        window.grafico_linha = Chart.Line(ctx, {
            data: dados2,
            options: configurarGrafico2()
        });
    }
    function plotarGrafico3(dados3) {
        console.log('iniciando plotagem do gráfico...');

        var ctx = canvas_grafico3.getContext('2d');
        window.grafico_linha = Chart.Line(ctx, {
            data: dados3,
            options: configurarGrafico3()
        });
    }
    function plotarGrafico4(dados4) {
        console.log('iniciando plotagem do gráfico...');

        var ctx = canvas_grafico4.getContext('2d');
        window.grafico_linha = Chart.Line(ctx, {
            data: dados4,
            options: configurarGrafico4()
        });
    }

    function logado(){

    if (sessionStorage.logado == 1){
        
        homezinho.style.display = 'block';
        produtinho.style.display = 'block';
        contatinho.style.display = 'block';
        nodezinho.style.display = 'block';
        calculadorinha.style.display = 'none';
        cadastrinho.style.display = 'none';
        loginzinho.style.display = 'none';

    }

    else{

        homezinho.style.display = 'block';
        produtinho.style.display = 'block';
        contatinho.style.display = 'block';
        nodezinho.style.display = 'none';
        calculadorinha.style.display = 'block';
        cadastrinho.style.display = 'block';
        loginzinho.style.display = 'block';

    }

    document.getElementById('tudo').style.display = 'block'; 

}
