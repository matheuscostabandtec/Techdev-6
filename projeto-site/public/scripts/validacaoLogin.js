
  function entrar(){

    // || senha.value == ''
    
    if (email.value == '' && senha.value == ''){
 
      alert ('Verifique os campos de e-mail e senha e tente novamente!');

    }

    else{

      // validação e-mail **************************************************************************
      if (email.value.indexOf('@')>= 0){  // se o email.value possui algum @ em algum caractere (maior ou igual a 0)

          var splitzinho = email.value.split('@');
          var emailzinho = splitzinho[0];
          var dominio = splitzinho[1];

          if (dominio == '' || emailzinho == ''){ // se o email (antes do @) e o dominio (dps do @) estão vazios

            alert('Insira um e-mail válido para acessar');

          }
          else{


            if (dominio.endsWith('.com' || dominio.endsWith('.com.br'))){

              // alert('SUCESSO E-MAIL');
              var validacaoEmail = 1;

            }

            else{

              alert('Insira um e-mail válido para acessar!');

            }

        }
    } // if .indexOf
    else {

        alert('O e-mail inserido não possui "@"! \nInsira um e-mail válido e tente novamente!')

    }

    // validação senha ********************************************************************************
    if (senha.value != '' && senha.value.length >= 4){

      // alert('SUCESSO SENHA!');
      var validacaoSenha = 1;

    }

    else{

      alert('Insira uma senha válida! \nA senha deve conter ao menos 4 caracteres!');

    }

    if (validacaoEmail == 1 && validacaoSenha == 1){

      alert('Usuário cadastrado com sucesso!');

    }

  }

}
