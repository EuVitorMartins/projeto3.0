const div = document.querySelector('.texto-span');
const textos = ['Web.', 'Front-end.', 'Full Stak.'];

function escrever(str, done) {
    const char = str.split('').reverse();
    const typer = setInterval(function () {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 500);
        }
        const next = char.pop();
        div.innerHTML += next;
    }, 200);
}

function limpar(done) {
    const char = div.innerHTML;
    let nr = char.length;
    const typer = setInterval(function () {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        div.innerHTML = char.slice(0, nr);
    }, 200);
}

function rodape(conteudos, el) {
    let atual = -1;
    function prox(cb) {
        if (atual < conteudos.length - 1) atual++;
        else atual = 0;
        let str = conteudos[atual];
        escrever(str, function () {
            limpar(prox);
        });
    }
    prox(prox);
}
rodape(textos);

// CARDS DO SOBRE

const cards = document.querySelectorAll('.card-sobre')

cards.forEach((card) => {
    card.addEventListener('click', (e) => {
        card.classList.toggle('flip')
    })
})


// CARDS PROJETOS

const container = document.querySelector('.projetos');
const btn = document.querySelector('.projeto-botao');
let vermais = true

const conteudoCard = (dados) => (`
    <div class="card-projeto_imagem">
        <img class="img" src="${dados.imagem}" alt="${dados.titulo}">
    </div>
    <div class="card-projeto_textos">
        <h3>${dados.titulo}</h3>
        <p>
        ${dados.descricao}
        </p>
        <ul class="lista-tecn">
        ${dados.techs.map((tech) => (`
            <li> ${tech } </li>
        `))}
        </ul>
        <div class="projeto-btns">
            <a href="${dados.linkCodigo}" target="_blank" class="primeiro">Codigo</a>
            <a href="${dados.linkAcessar}" target="_blank" class="segundo">Acessar</a>
        </div>
    </div>
`)

btn.addEventListener('click', (e) => {
    e.preventDefault()
    container.innerHTML = ''
    //container.classList.toggle('rolagem')
    if (!vermais) {
        carregarProjeros()
        return vermais = true;
    }

    vermais = false
    carregarProjeros()
})

carregarProjeros()
function carregarProjeros() {
    fetch('assets/projetos.json').then((res) => res.json()).then((dados) => {

        if (vermais) {
            const primeirosCard = dados.slice(0, 3);
            primeirosCard.map((dado) => {
                const card = document.createElement('div');
                card.classList.add('card-projeto');
                card.innerHTML = conteudoCard(dado)

                container.appendChild(card)
                btn.textContent = 'Ver Todos os Projetos'
            });
        } else {

            dados.map((dado) => {
                const card = document.createElement('div');
                card.classList.add('card-projeto');
                card.innerHTML = conteudoCard(dado)

                container.appendChild(card)
                btn.textContent = 'Ver menos os Projetos'
            });
        }

    })
}

// ROLAGEM HEADER 

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("ativar", window.scrollY > 0)
})


//MENU MOBILE

const menuMobile =document.querySelector(".icon-menu");

menuMobile.addEventListener("click", () => {
    const menu = document.querySelector(".menu-mobile");
    menu.classList.toggle("ativo")
    
    const nav = document.querySelector(".nav");
    nav.classList.toggle("ativo")

})
