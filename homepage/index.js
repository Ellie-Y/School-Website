// homepage js

(function() {
    $('.dropBtn').click(function() {
        $('#activeNav').css('display') == 'none' ? $('#activeNav').css({'display': 'flex'}) : $('#activeNav').css({'display': 'none'})
    });

    $('.studyButton').click(function() {
        window.location.href='../studyPage/index.html';
    });

})()
