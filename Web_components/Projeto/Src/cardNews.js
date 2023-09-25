// criei uma tag

class cardNews extends HTMLElement {

    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
         // isso é a mesma coisa que isso  <div class="card">
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        // isso é a mesma coisa que isso  <div id="card_left">
        const cardleft = document.createElement("div");
        componentRoot.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || " anonimo");
        const link = document.createElement("a");
        link.textContent = this.getAttribute("title");
        const paragrafo = document.createElement("p");
        paragrafo.textContent = this.getAttribute("contet");
        

        // esta dizendo que  o autor,link e o paragrafo são filhos do card_left 
        cardleft.appendChild(autor);
        cardleft.appendChild(link);
        cardleft.appendChild(paragrafo);

        // isso é a mesma coisa que isso  <div id="card_right">
        const cardright = document.createElement("div");
        componentRoot.setAttribute("class", "card_right");
        const imagem = document.createElement("img");
        // esta dizendo que imagem é filho da card_right
        cardright.appendChild(imagem)


        



         //Esta dizendo que a card left e right são filhos da componentRoot ou melhor divs dentro de div
        componentRoot.appendChild(cardleft);
        componentRoot.appendChild(cardright);
        return componentRoot;
    }

    styles(){}
}  
customElements.define('card-news',cardNews);