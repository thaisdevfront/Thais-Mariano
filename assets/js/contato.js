const contato = document.getElementById('contato')

contato.innerHTML=`

<div class="container">
                
    <div class="content-text">
        <span>
            <p>
                Formulário de contato
            </p>
        </span>
        <h1>
            Começe algo 
            novo agora mesmo     
        </h1>
        
        <span>
            <p>
                Email : thais.devfrontend@gmail.com
            </p>
        </span>
        <span>
            <p>
                 CNPJ: 45.056.613/0001-89 - 45056613000189
            </p>
        </span>
        
       
    </div>
    <div class="form">
        <form action="#" method="get" onsubmit="abrirWhatsapp()">
            <input type="text" name="nome" id="nome" placeholder="Nome" required /><br />
            <input type="tel" name="telefone" id="telefone" placeholder="Telefone" required /><br />
            <input type="email" name="email" id="email" placeholder="E-mail" required /><br />
            <textarea class="msg" name="msg" id="msg" placeholder="Digite sua Mensagem.." rows="2" required></textarea><br />
            <button type="submit">Enviar</button>
        </form>
    </div>
 </div>

`

function abrirWhatsapp() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;
    var url = "https://wa.me/5512981021517?text=" // Seu numero
    + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
    + "%0a" // Quebra de linha
    + "*Nome*: " + nome + "%0a" // Dados do formulário
    + "*Telefone*: " + telefone + "%0a"
    + "*E-mail*: " + email + "%0a"
    + "*Mensagem*: " + msg;
    window.open(url, '_blank').focus();
}