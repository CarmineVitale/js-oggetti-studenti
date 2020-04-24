$(document).ready(function () {
    var input = $('.input');
    var button = $('.button');
    
    //ottengo html 
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);

    var prevChat = [
        {
            text: 'Buongiorno',
            hour: '07:55'
        },
        {
            text: 'Oggi si fa lezione?',
            hour: '07:56'
        },
        {
            text: 'Aspetto una tua risposta.',
            hour: '07:57'
        },
    ];
    for (var i = 0; i < prevChat.length; i++) {
        var mess = prevChat[i];
        var dati1 = {
            testo: mess['text'],
            orario: mess['hour'],
            class: 'inviati'
        }
        var output = template(dati1);
        $('.sms').append(output);
    }
    

    


    //invio alla pressione di Enter
    input.keypress(function(e) {
        
        if (e.which == 13) {
            aggiungiChat();
        }
        
    });
    //invio al click del bottone
    button.click(function (){
        
        aggiungiChat();
    });
    
function oraAttuale() {
    var data = new Date();
    
    var ora = data.getHours();
    var minuti = data.getMinutes();

    if (minuti < 10) {
        minuti = '0' + minuti;
    }
    
    return ora + ':' + minuti;
   
}

function aggiungiChat() { 
    var mex = input.val();

        var chat = {
        testo: mex,
        orario: oraAttuale(),
        class: 'inviati'
        };

        var html = template(chat);
        
        

        $('.sms').append(html);
        input.val('');

        setTimeout(function() {
            var chat = {
                testo: 'ok',
                orario: oraAttuale(),
                class: 'ricevuti'
                }
        
                var html = template(chat);
        
                $('.sms').append(html);
            
        }, 1500)

 }



}); //<--- End ready