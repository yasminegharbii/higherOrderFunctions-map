// ex 1

function each(tab, func) {
  for (var i = 0; i < tab.length; i++) {
    func(tab[i], i);
  }
}

function map(array, func) {
  var result = [];
  each(array, function (el, i) {
    result.push(func(el, i));
  });
  return result;
}

function doublerNombres(nombres) {
  return map(nombres, function (el, i) {
    return el * 2;
  });
}

// ex 2

function carreNombres(nombres) {
  return map(nombres, function (el, i) {
    return el * el;
  });
}

// ex 3

function nombresEnTexte(nombres) {
  return map(nombres, function (el) {
    return String(el);
  });
}

// ex 4

function nomsEnMajuscules(noms) {
  return map(noms, function (nom) {
    return nom.toUpperCase();
  });
}

// ex 5

function premiereLettreMajuscule(mots) {
  return map(mots, function (el) {
    return el[0].toUpperCase() + el.slice(1);
  });
}

// ex 6

function troisPremieresLettres(pays) {
  return map(pays, function (el) {
    return el.slice(0, 3).toUpperCase();
  });
}

// ex 7

function obtenirNoms(utilisateurs) {
  return map(utilisateurs, function (el) {
    return el.nom;
  });
}

// ex 8

function agesPlusTen(utilisateurs) {
  return map(utilisateurs, function (el) {
    return el.age + 10;
  });
}

//  ex 9

function utilisateursEnTexte(utilisateurs) {
  return map(utilisateurs, function (el) {
    return el.nom + " a " + el.age + " ans ";
  });
}

utilisateursEnTexte([
  { nom: "Ali", age: 20 },
  { nom: "Sara", age: 25 },
]);

// ex 10

function ajouterTaxe(prix) {
  return map(prix, function (el) {
    return el * 0.2;
  });
}
// ex 11

function formaterPrix(prix) {
  return map(prix, function (el) {
    return {
      prix: "Prix: " + el + " DT",
    };
  });
}

// ex 12
function reductionProduits(produits) {
  return map(produits, function (el) {
    return {
      nom: el.nom,
      prix: el.prix * 0.9
    };
  });
}

reductionProduits([
  { nom: "Phone", prix: 1000 },
  { nom: "PC", prix: 2000 }

  //  ex 13

function etiquettesProduits(produits) {
    return map(produits, function (el) {
      return el.nom + " - " + el.prix + " DT";
    });
  }

// EX 14

function prixAvecDevise(products) {
    return map(products, function (el) {
      return el.prix + " " + "TND"
    })

  }

  // ex 15

function notesSur20(notes) {
  return map(notes, function (el) {
    return el + "/20";
  });
}


// ex 16 

function notesAvecMention(notes) {
  return map(notes, function (el) {
    if (el < 10) {
      return el + " : Insuffisant";
    } else if (el < 14) {
      return el + " : Passable";
    } else if (el < 16) {
      return el + " : Bien";
    } else if (el < 18) {
      return el + " : Très Bien";
    } else {
      return el + " : Excellent";
    }
  });
}
