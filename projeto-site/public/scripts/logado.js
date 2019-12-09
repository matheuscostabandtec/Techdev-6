window.onload = logado;

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

