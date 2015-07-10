(function ($,window,document,undefined) {

    //variables
    var character = $('#character'),
    obstacle = $('.obstacle') ,
    container = $('.container'),
    obup = document.getElementById('up'),
    obdown = document.getElementById('down'),
    start = document.getElementById('start'),
    cWidth = window.innerWidth,
    cheight = window.innerHeight,
    count = document.getElementById('counter').value,
    endValue = true;
    var allin = document.querySelector('.allin');
    allin.style.height = cheight;

    start.addEventListener('click',jumpFn,false);

    function jumpFn() {

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
    }

    container.click(function(e) {
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
        console.log(obup);
        if (character.offsetTop < -200) {
            console.log('out of bounds');
            loser();
        }
        if (character.offsetTop > windowHeight) {
            console.log('out of bounds');
            loser();
        }
        if (obup.offsetLeft >= '294px' && character.offsetTop <= '122px') {
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
      var looser = document.getElementsByClassName('loser');
        looser.style.display = 'block';
        obstacle.hide();
        character.stop();
        endValue = false;
    }

    function locReload() {
        location.reload();
    }

    var againEl = document.getElementsByClassName('again')[0];
    againEl.addEventListener('click',locReload ,false );


})(jQuery,this,this.document);
