(function() {

    //variables
    var character = $('.character'),
    obstacle = $('.obstacle'),
    container = $('.container'),
    obup = $('#up'),
    obdown = $('#down'),
    start = $('#start'),
    cWidth = $(window).width(),
    cheight = $(window).height(),
    count = $('#counter').val(),
    endValue = true;
    $('.allin').height(cheight);

    start.click(function() {
        start.fadeOut(200);
        character.animate({
            top: '-=25%'
        }, 1000, function() {
            character.animate({
                top: '100%'
            }, 3000);
        });
        if (endValue === true){
            animObs();
        }
    });

    container.on('click', function(e) {
        e.preventDefault();
        //character part
        character.stop();
        character.animate({
            top: '-=25%'
        }, 1000, function() {
            character.animate({
                top: '100%'
            }, 3000,checkTop());
        });

    });

    function animObs() {
        obstacle.animate({
            right: '100%'
        }, 6000, function() {
            obstacle.css('right', '-200px');
            animObs();
        });
    }

    function checkTop() {
        var windowHeight = $(window).height();
        if (character.offset().top < -200) {
            console.log('out of bounds');
            loser();
        }
        if (character.offset().top > windowHeight) {
            console.log('out of bounds');
            loser();
        }
        if (obup.offset().right >= '294px' && character.offset().top <= '122px') {
            console.log('touch up');
            loser();
        }
        if (obdown.css('right') <= '304px' && character.css('top') >= '43%') {
            console.log('touch down');
            loser();
        }

        //if character touch something

    }

    function loser() {
        $('.loser').css('display', 'block');
        obstacle.hide();
        character.stop();
        endValue = false;
    }

    $('.again').click(function() {
        location.reload();
    });



})();
