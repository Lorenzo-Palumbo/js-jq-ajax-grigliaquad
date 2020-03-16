$(document).ready(function(){
    $('.square').click(function(){
        var elementoCliccato = $(this);
        // console.log('quadrato cliccato!', elementoCliccato)
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',
            success: function (data) {
                var numeroRandom = data.response;
                // console.log(numeroRandom);
                $(elementoCliccato).text(numeroRandom);
                if (numeroRandom <= 5) {
                    $(elementoCliccato).addClass('yellow')
                } else {
                    $(elementoCliccato).addClass('green')
                }
            },
            error: function () {
                alert('ERRORE');
            }
        });
    })
});
