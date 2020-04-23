$(document).ready(function () {
    /*
    Creare un oggetto che descriva uno studente
    lo studente avrà  le seguenti proprietà: nome, cognome e età.
    Stampare attraverso il for..in tutte le proprietà (chiavi e valori).
    */

    var studente = {
        name: 'Carmine',
        surname: 'Vitale',
        age: 30 ,
    }
    for (var key in studente) {

        console.log(key + ': ' + studente[key]);
        
        
    }
    
    




}); //<--- End ready