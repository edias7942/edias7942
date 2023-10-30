function hoverInitialImages(image) {
    let title = document.getElementById("container3Title");
    let paragraph = document.getElementById("container3Paragraph");

    let content = [
        {
            title: "Bem-vindo ao meu portfólio!",
            text: ` Aqui, revelo minha paixão pela programação. Como um dedicado
                    desenvolvedor fullstack, expresso meu amor através de linhas
                    de código. Explore e descubra como transformo ideias em
                    realidade.`,
        },
        {
            title: "Emerson Dias Machado",
            text: ` Sou programador com 3 anos de experiência, focado em
                    desenvolvimento Full Stack, desde o Backend (Python, NodeJS,
                    GO) até o Frontend (HTML, CSS, JavaScript). Clique no
                    card para saber mais sobre mim.`,
        },
        {
            title: "Projetos e Trabalhos realizados",
            text: "Nesses últimos anos tenho estudado novas linguagens de programação, ferramentas de design.",
        },
        {
            title: "Entre em contato comigo",
            text: "Deixo aqui algumas de minhas redes sociais caso deseje entrar em contato comigo. Aqui você encontra também meu GitHub para ver mais de meus trabalhos.",
        },
    ];
    title.innerHTML = content[image].title;
    paragraph.innerHTML = content[image].text;
}
