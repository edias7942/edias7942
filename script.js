let title = document.getElementById("container3Title");
let subtitle = document.getElementById("container3Subtitle");
let paragraph = document.getElementById("container3Paragraph");
let changePageTransitionDiv = document.getElementById("changingPageTransition");
let circles = [
    "",
    document.getElementById("circle1"),
    document.getElementById("circle2"),
    document.getElementById("circle3"),
];

let iniciado = false

setInterval(() => {
    iniciado = true
}, 1600);

let content = [
    {
        title: "Bem-vindo ao meu portfólio!",
        text: ` Aqui, revelo minha paixão pela programação. Como um dedicado
                desenvolvedor fullstack, expresso meu amor através de linhas
                de código. Explore e descubra como transformo ideias em
                realidade.`,
    },
    {
        class: "minWidth",
        title: "Emerson Dias Machado",
        text: ` Sou programador há 3 anos, focado e determinado a ser o melhor que eu puder, iniciei meus estudos com Backend (Python, NodeJS,
                GO). No último ano tenho adquirido mais habilidades com o Frontend (HTML, CSS, JavaScript, React JS). Clique no card para saber mais sobre mim.`,
        link: "whoiam",
    },
    {
        class: "minWidth",
        title: "Projetos e Trabalhos",
        text: "Nesses últimos anos tenho estudado novas linguagens de programação, ferramentas de design.",
        link: 'projects'
    },
    {
        class: "minWidth",
        title: "Entre em contato comigo",
        text: "Deixo aqui algumas de minhas redes sociais caso deseje entrar em contato comigo. Aqui você encontra também meu GitHub para ver mais de meus trabalhos.",
        link: 'contact'
    },
];

function hoverInitialImages(image) {
    if (!iniciado) return
    title.innerHTML = content[image].title;
    paragraph.innerHTML = content[image].text;
    // title.style.animation = "none"
    if (image === 0) {
        title.classList.remove("minWidth");
        return;
    }
    title.classList.add(content[image].class);
}

function clickInitialImages(image) {
    // RETIRANDO TEXTO DA DIREITA
    title.style.animation =
        "text-pop-up-top 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    subtitle.style.animation =
        "text-pop-up-top 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    paragraph.style.animation =
        "text-pop-up-top 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both";

    circles[image].classList.add("main");

    if (image !== 1)
        circles[1].style.animation = "circleDisappearing 1000ms forwards";
    if (image !== 2)
        circles[2].style.animation = "circleDisappearing 1000ms forwards";
    if (image !== 3)
        circles[3].style.animation = "circleDisappearing 1000ms forwards";

    document.body.style.overflow = "hidden";
    changePageTransitionDiv.style.animation = "changingPage 900ms forwards";
    setTimeout(() => {
        window.open(content[image].link, "_self");
    }, 700);
}
