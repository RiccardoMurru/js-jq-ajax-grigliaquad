/**
 * Griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX 
 * che prende un numero random da 1 a 9 (scegliere API opportuna).
 * Se è <= 5 il quadrato diventa giallo, 
 * se è > di 5 il quadrato diventa verde.
 * Il numero ottenuto appare al centro del quadrato
 */

$(document).ready(function () {

    var box = $('.box');

    box.click(function() {
        // referenza a this box
        var self = $(this);
    
        if (self.hasClass('clicked')) {
            alert('Casella già selezionata');
        } else {
            // chiamata AJAX ad API
            $.ajax({
                url: 'https://flynn.boolean.careers/exercises/api/random/int', // api per numero random da 1 a 9
                method: 'GET',
                success: function(data) {
                    var number = data.response;
                    //stampa del numero nella casella
                    self.text(number);
    
                    // se numero <= 5 sfondo giallo, se > 5 sfondo verde
                    if (number <= 5) {
                        self.addClass('yellow clicked');
                    } else {
                        self.addClass('green clicked');
                    }  
                },
                error: function() {
                    console.log('errore in chiamata api');
                    
                }
            });
        }
    });

}); // end doc ready