// const citation est un objet contenant deux clefs: mythologie et heros

const citations = {

    mythologie : [['Il y a fort fort longtemps, ', 'Au coeur d\'une sombre forêt, ', 'Dans une lugubre grotte, '],
                ['la licorne', 'le griffon', 'le kraken', 'la sirène', 'Baba Yaga', 'le basilic', 'la manticore'],
                ['a dévoré', 'a mâchouillé', 'a pétrifié', 'a combattu', 'a maudit', 'a écrasé', 'a secoué'],
                ['un cyclope !', 'le minotaure !', 'une valkyrie !', 'un wendigo !', 'un chupacabra !', 'une chimère !', 'un dullahan !']],

    heros : [['Le petit chaperon rouge', 'Flash Gordon', 'Jon Snow', 'Wonder Woman', 'Dracula', 'Buttercup', 'Daisy Buchanan'],
            ['a surfé', 'a avalé', 'a fait tournoyer', 'a couru plus vite que', 'a combattu', 'a gravi'],
            ['un tsunami !', 'un terrible loup !', 'son lasso de Vérité !', 'la vitesse de la Lumière !', 'un marcheur blanc !', 'les falaises de la Folie !']]
}

// La fonction prend liste en argument
// On définit deux variables (citation et aleatoir)
// la condition for crée une boucle qui ajoute des elements de la liste jusqu'à être égale à la liste length
// variable aleatoir = renvoie un entier < ou = à x (nombre flottant compris entre 0 & 1 * liste [element].length)
// la variable citation est la concatenation de citation, un element de la liste (prit au hasard par aleatoir) et un espace entre chaque element

function creationCitation(liste){
    let citation = '';
    let aleatoir; 
    for (i = 0; i < liste.length; i++){
        aleatoir = Math.floor(Math.random() * liste[i].length);
        citation += liste[i][aleatoir] + ' ';
    }    
    return citation;
}

// la condition while crée une boucle qui fonctionne tant que celle-ci est vraie (true)
// nbRepetition est un prompt qui renvoi un nombre entier 
// theme est un prompt qui demande de choisir un objet entre mythologie et heros (key)
// la condition try déclenche la fonction checkUserValues, si elle ne renvoie aucune erreur, displayNCitation est déclenchée
// si une erreur est détectée, cela declenche le catch qui retourne un message d'erreur 
// lorsque la fonction genererCitation est terminée, la fonction menu se declenche ensuite

function genererCitation() {
    let nbRepetition = 0;
    let theme = "";
    while(true){
        nbRepetition = parseInt(prompt ('Choisir un nombre de citation (compris entre 1 et 5):', [1]));
        theme = prompt('Choisir le type de citation entre mythologie et heros :', ['mythologie']);
        try {
           checkUserValues(nbRepetition, theme);
           displayNCitation(nbRepetition, citations[theme]);
           break;

        } catch (error) {
            console.error(error);
        }
    }

      menu();
      return 0;
}

// la fonction prend en arguments les variables nbRepetition et theme
// la condition for crée une boucle qui prend en compte la valeur de nb repetition 
// elle repete la fonction creationCitation pour creer le nombre de citation désirée dans le theme choisi

function displayNCitation(nbRepetition, theme){
    for (let i = 0; i < nbRepetition; i++){
        console.log(creationCitation(theme));
    }
}

// la fonction prend en argument les variables nbRepetition et theme
// la confiction if verifie à tour de rôle si l'une des conditions est vraie et renvoie le throw si c'est le cas
// la fonction s'arrete au moment ou l'une des conditions est vraie sans tester les autres 

function checkUserValues(nbRepetition, theme){
    if (isNaN(nbRepetition) || !citations[theme] || (nbRepetition < 1 || nbRepetition > 5)) {
        throw new Error("Erreur: veuillez saisir un chiffre compris entre 1 et 5, ou un theme héros ou mythologie.");
    }
}

// la fonction menu se déclenche lorsque la fonction genererCitation est terminée
// un prompt demande a l'utilisateur de choisir entre continuer ou quitter
// si 0, la fonction break et quitte en affichant un message d'arret
// si 1, la fonction break et genererCitation est appelée pour recommencer 

function menu(){
    console.log("1 : Générer de nouvelles citations");
    console.log("0 : Quitter\n\n");
    let choix;
    while(true){
      choix = parseInt(prompt("Choisissez une option ( 1 pour continuer ou 0 pour quitter):"));
      if (choix === 0) {
        console.log("Au revoir !");
        break ;
      }
      if (choix === 1){
        genererCitation();
        break ;
      }
    }
}

//Le code commence ici par l'appel de la fonction

genererCitation();
