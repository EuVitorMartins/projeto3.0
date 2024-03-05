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
            <li> ${tech} </li>
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

const menuMobile = document.querySelector(".icon-menu");

menuMobile.addEventListener("click", () => {
    const menu = document.querySelector(".menu-mobile");
    menu.classList.toggle("ativo")

    const nav = document.querySelector(".nav");
    nav.classList.toggle("ativo")

})

// SCROLL REVEAL CONFIG.
eventos()
function eventos() {
    ScrollReveal().reveal('.evento-titulo', {
        duration: 1000,
        distance: '50px',
        opacity: 0.8
    });
    ScrollReveal().reveal('.evento-top', {
        delay: 500,
        duration: 1500,
        distance: '50px',
    });
    ScrollReveal().reveal('.evento-top-2', {
        delay: 1000,
        duration: 1500,
        distance: '50px',
    });
    ScrollReveal().reveal('.evento-top-3', {
        delay: 1500,
        duration: 1500,
        distance: '50px',
    });
    ScrollReveal().reveal('.evento-top-4', {
        delay: 1800,
        duration: 1500,
        distance: '50px',
    });

    ScrollReveal().reveal('.evento-right', {
        delay: 800,
        duration: 2000,
        distance: '50px',
        origin: 'right'
    });

    //REVEAL EVENTO LEFR
    ScrollReveal().reveal('.evento-left', {
        delay: 100,
        duration: 2000,
        distance: '50px',
        origin: 'left'
    });
    ScrollReveal().reveal('.evento-left-2', {
        delay: 300,
        duration: 2000,
        distance: '50px',
        origin: 'left'
    });
    ScrollReveal().reveal('.evento-left-3', {
        delay: 500,
        duration: 2000,
        distance: '50px',
        origin: 'left'
    });
    ScrollReveal().reveal('.evento-left-4', {
        delay: 800,
        duration: 2000,
        distance: '50px',
        origin: 'left'
    });
    ScrollReveal().reveal('.evento-left-5', {
        delay: 1000,
        duration: 2000,
        distance: '50px',
        origin: 'left'
    });
    ScrollReveal().reveal('.evento-left-6', {
        delay: 1200,
        duration: 2000,
        distance: '50px',
        origin: 'left'
    });
    ScrollReveal().reveal('.evento-left-7', {
        delay: 1400,
        duration: 2000,
        distance: '50px',
        origin: 'left'
    });
    ScrollReveal().reveal('.evento-left-8', {
        delay: 1600,
        duration: 2000,
        distance: '50px',
        origin: 'left'
    });
    ScrollReveal().reveal('.evento-left-9', {
        delay: 1800,
        duration: 2000,
        distance: '50px',
        origin: 'left'
    });
    ScrollReveal().reveal('.evento-left-10', {
        delay: 2000,
        duration: 2000,
        distance: '50px',
        origin: 'left'
    });
    ScrollReveal().reveal('.evento-left-11', {
        delay: 2200,
        duration: 2000,
        distance: '50px',
        origin: 'left'
    });
    ScrollReveal().reveal('.evento-left-12', {
        delay: 2400,
        duration: 2000,
        distance: '50px',
        origin: 'left'
    });
    ScrollReveal().reveal('.evento-left-13', {
        delay: 2600,
        duration: 2000,
        distance: '50px',
        origin: 'left'
    });
    ScrollReveal().reveal('.evento-left-14', {
        delay: 2800,
        duration: 2000,
        distance: '50px',
        origin: 'left'
    });
    ScrollReveal().reveal('.evento-left-15', {
        delay: 3000,
        duration: 2000,
        distance: '50px',
        origin: 'left'
    });
    ScrollReveal().reveal('.evento-left-16', {
        delay: 3200,
        duration: 2000,
        distance: '50px',
        origin: 'left'
    });
    ScrollReveal().reveal('.evento-left-17', {
        delay: 3400,
        duration: 2000,
        distance: '50px',
        origin: 'left'
    });

}


// SCROLL DO MENU 
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
    sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        console.log(top);

        if (top + 200 >= offset && top < offset + height ) {
            navLinks.forEach((links) => {
                links.classList.remove('ativo');
                const secAtual = document.querySelector(`nav ul li a[href="#${id}"]`)
                secAtual.classList.add('ativo')
            })
        }
    })
};