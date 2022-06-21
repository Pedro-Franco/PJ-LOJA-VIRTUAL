var lista_usuario = [];

// função que recebe os dados do usuário e passa para o login
cadastro = () => {

    // Recebe os dados do usuario para cadastrar como um usuario válido
    var email_cadastro = document.getElementById('email-cadastro').value
    var nome_cadastro = document.getElementById('nome-cadastro').value
    var senha_cadastro = document.getElementById('senha-cadastro').value

    // Mensagem para preenchimento de todos os campos obrigatórios
    if (email_cadastro === '' || nome_cadastro === '' || senha_cadastro === '') {
        alert('Preencha todos os campos corretamente');
    } 
    // Caso não retorne a mensagem irá repassar os dados para a constante lista_usuario
    else {
        lista_usuario.push({nome: nome_cadastro, email: email_cadastro, senha: senha_cadastro})
    }

    // Transformar o objeto em string e salvar em localStorage
    localStorage.setItem('lista_usuario', JSON.stringify(lista_usuario));

    // redirecionar o usuario para a tela de login
    location.href = '../public/login.html'
    return true;
}

// Receber a string
let usuarioString = localStorage.getItem('lista_usuario');

// transformar em objeto novamente
let usuarioObj = JSON.parse(usuarioString);

// função para validar o login de "login.html" e redirecionar a página principal
login = () => {

    // RECEBE O QUE VEM DO "LOGIN.HTML"
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value

    // Estrutura de decisão que irá validar o login do usuário
    for (var us in usuarioObj) {
        var user = usuarioObj[us];
        if (user.email===email && user.senha===senha) {

            //redireciona o usuario para a index principal do projeto caso todos os parametros estejam certos
            window.location.href = '../public/index.html'
            return true;
        }
    }
    
    // aqui retorna um erro caso o usuario insira os dados incorretos
    alert('Email ou senha inseridos estão incorretos, digite novamente');
    return false;
}
