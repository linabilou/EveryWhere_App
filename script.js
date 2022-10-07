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
    constructor(nbPieces, prix){
        //nbPieces represente le nombre de pieces de la maison
        this.nbPieces = nbPieces;
        //description est un objet contenant la description des pièces detailles de la maison
        this.description = new Description;
        //prix de la maison
        this.prix = prix;
    }


}

class Salle extends Hse{
    constructor(){

    }
}

class Terrain extends Hse{
    constructor()
}

class Local extends Hse{
    constructor()
}


class User{
    constructor(type, nom, prenom){
        this.type = type;
        this.nom = nom;
        this.prenom = prenom;
    }
}

class Owner extends User{
    constructor()
}

class Customer extends User{
    constructor()
}

class Locataire extends Customer {
    constructor()
}

class Acheteur extends Customer{
    constructor()
}