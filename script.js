class Localisation {
    constructor(ville, quartier){
        this.ville = ville;
        this.quartier = quartier;
    }

    static getLocalisation(){
       
    }
}

class Description{
    constructor(nbSalon, nbCuisine, nbChambres, autres ){
        this.nbSalon = nbSalon;
        this.nbCuisine = nbCuisine;
        this.nbChambres = nbChambres;
        this.autres = autres; // autres informations supplementaires
    }

    static setDescription(nbSalon, nbCuisine, nbChambres, autres){
        let description = {}
        description.nbSalon = nbSalon;
        description.nbCuisine = nbCuisine;
        description.nbChambres = nbChambres;
        description.autres = autres;
    }

    static getDescription(){

    }
}

class Hse {
    constructor(type, etat) {
        //type peut-etre maison, local, salle, terrain
        this.type = type;

        //etat peut-etre soit à vendre soit à louer
        this.localisation = Localisation.getLocalisation();
    }

    
}

class Maison extends Hse{
    constructor(nbPieces, price){
        //nbPieces represente le nombre de pieces de la maison
        this.nbPieces = nbPieces;
        //description est un objet contenant la description des pièces detailles de la maison
        this.description = new Description;
        //price de la maison
        this.price = price;
    }

}

class Salle extends Hse{
    constructor(price){
        //price de la salle
        this.price = price;
    }

    getPrice(){

        return `Le price du local est ${this.price}.`
    }
}

class Terrain extends Hse{
    constructor(size, priceUnitaire){
        //size est le nombre total de metre carré
        this.size = size;

        //price par unité de metre carré
        this.priceUnitaire = priceUnitaire;

    }

    getPrice(){

        return `Le price total du terrain est ${this.size * this.priceUnitaire} .`
    }
}

class Local extends Hse{
    constructor(nbPieces, price){
        //nbPieces represente le nombre de pieces du local
        this.nbPieces = nbPieces;
        //description est un objet contenant la description des pièces detailles du local
        this.description = new Description;
        //price du local
        this.price = price;
    }

    getPrice(){

        return `Le price du local est ${this.price}.`
    }
}


class User{
    constructor(type, nom, prenom){
        this.type = type;
        this.nom = nom;
        this.prenom = prenom;
    }
}

class Owner extends User{
    constructor(){

    }

    postHse(){

    }
}

class Customer extends User{
    constructor(){
        
    }
}

class Locataire extends Customer {
    constructor()
}

class Acheteur extends Customer{
    constructor()
}