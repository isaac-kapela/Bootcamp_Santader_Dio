// criando no component na mão

class Cardnews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    // isso é a mesma coisa que isso  <div class="card">
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    // isso é a mesma coisa que isso  <div class="card_left">
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    // esta dizendo que  o autor,link e o paragrafo são filhos do card_left
    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const paragrafo = document.createElement("p");
    paragrafo.textContent = this.getAttribute("contet");
    // esta dizendo que autor,link e paragarfo são filhos de card__left
    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(paragrafo);

    // isso é a mesma coisa que isso  <div class="card_right">
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const imagem = document.createElement("img");
    imagem.src = this.getAttribute("foto") || "assets/img_default.png";
    imagem.alt = "Foto da Noticia";
    // esta dizendo que imagem é filho da card_right
    cardRight.appendChild(imagem);

    //Esta dizendo que a card left e right são filhos da componentRoot ou melhor divs dentro de div
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  // Aqui esta a estlização do componente so se aplica para esse componente
  styles() {
    const style = document.createElement("style");
    style.textContent = `
          .card {
            width: 80%;
            box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          
          .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
          }
          
          .card__left > span {
            font-weight: 400;
          }
          
          .card__left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
          }
          
          .card__left > p {
            color: rgb(70, 70, 70);
          }
      `;

    return style;
  }
}

customElements.define("card-news", Cardnews);
