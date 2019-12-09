
var aprovacao = 0;

// função para limpar os campos do formulário
    function limpar(){

    email.value = '';
    senha.value = '';
    nome.value = '';
    cpf.value = '';
    idHosp.value = '';
    email.focus();
    }

    function verificarID(e){
    
        if (idHosp.value == 1){

        alert('Hospital verificado com sucesso!');
        idHosp.value = 'Hospital Israelita Albert Einstein';

        }
        
        else if (idHosp.value == 2){
        
        alert('Hospital válido!');
        idHosp.value = 'Hospital Sírio Libanês'

        }

        else{

        alert('Selecione um Hospital válido!')

        }


    }

    function entrar(){

        
    if (email.value != '' || senha.value != '' || nome.value != '' || cpf.value != '' || idHosp.value != ''){
    
        if (email.value == ''){

        alert('Insira um e-mail válido!');
        
        }
        else if (senha.value == ''){

        alert('Insira uma senha válido!');
        
        }
        else if (nome.value == ''){

        alert('Insira um nome válido!');
        
        }
        else if (cpf.value == ''){

        alert('Insira um CPF válido!');
        
        }
        else if (idHosp.value == ''){

        alert('Insira um hospital válido!');
        
        }
        else{

        if (email.value.endsWith('@bandtec.com.br') && senha.value.length >= 5){
            
            alert('Usuário cadastrado com sucesso!');

        }
        else{

            alert('Insira um e-mail válido!');

        }


        }
    }

    else{
    
        alert('Preencha todos os campos para poder se cadastrar!');

    }

    }  
