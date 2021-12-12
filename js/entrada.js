$(document).ready(function() {
    $('#empezar').on('click', function(e){
        e.preventDefault()
        let audio = $('#player')
        audio[0].play()

        $('.modal').css('opacity', 0)
        $('.modal').css('display', 'none')
    })
})
