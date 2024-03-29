//querySelectAll = seleciona todos os elementos que tiverem a mesma class
const personagens = document.querySelectorAll('.personagem');
 

personagens.forEach((personagem) =>{
    // addEventListener = fica ouvindo por eventos no objeto especificado, nesse caso o objeto será o personagem 
    personagem.addEventListener('mouseenter', () => {
        if(window.innerWidth < 450){
            window.scrollTo({top:0, behavior:'smooth'});
        }

        removerSelecaoDoPersonagem();
        personagem.classList.add('selecionado');
        
       

        alterarImagemPersonagemSelecionado(personagem);
        alterarNomePersonagemSelecionado(personagem);
        alterarDescricaoPersonagem(personagem);

        alterarCorPersonagemSelecionado(personagem);
        
    })

})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem){
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem){
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./assets/images/card-${idPersonagem}.png`;
}


function removerSelecaoDoPersonagem (){
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
