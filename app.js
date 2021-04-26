// ---------------- GENERATION DE COULEUR
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function activeRefresh() {
    // CHANGE LA COULEUR
    numb = getRandomInt(255);
    numb2 = getRandomInt(255);
    numb3 = getRandomInt(255);
    let colorTitle = `rgb(${numb}, ${numb2}, ${numb3})`;
    // maintitle.style.color = colorTitle;
    back.style.backgroundColor = colorTitle;
    maintitle.style.borderColor = colorTitle;
    maintitle.style.color = colorTitle;
    he_says.style.color = colorTitle;
    bouton.style.backgroundColor = colorTitle;
    // console.log(colorTitle);

    // Liste + Choix random de l'index 
    let citations =["Quand Chuck Norris se regarde dans un miroir, son reflet baisse les yeux.",
                    "Chuck Norris peut voir l'homme invisible.",
                    "C'est Chuck Norris qui a pris les photos pour Google Earth",
                    "Walker Texas Ranger n'existe pas en cassette , on embobine pas Chuck Norris",
                    "Chuk Norris est capable de suivre quelqu'un qui se trouve derrière lui.",
                    "Quand Chuck Norris ouvre un carambar il y a un fact dedans.",
                    "Quand Chuck Norris a frotté la lampe magique, le Génie a demandé à Chuck de lui rendre un ou deux services",
                    "Chuck Norris peut ressusciter un angle mort.",
                    "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.",
                    "Chuck Norris a déjà fait une erreur. Juste pour voir.",]
    let randCitation = citations[Math.round(Math.random()*9)];
    console.log(randCitation);

    he_says.textContent = randCitation;

}
// Recupere les element HTML
let bouton = document.querySelector("#submit");
let maintitle = document.querySelector("#chuckTitle");
let he_says = document.querySelector("#chuckCitation");
let back = document.querySelector("body");


// Evenement qui recupre la fonction
bouton.addEventListener("click", activeRefresh);

