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

