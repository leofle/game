
$(document).ready(function() {

//variables
var character = $('.character');
var obstacle = $('.obstacle');
var container = $('.container');
var obup = $('#up');
var obdown = $('#down');
var start = $('#start');
var count = 0;
var cWidth = $(window).width();
var cheight = $(window).height();

$('.count').html(count);

start.click(function() {
	start.fadeOut(200);
		character.animate({top:'-=25%'}, 1000,function(){
		character.animate({top: '100%'}, 3000);
	});
	animObs();
});

container.on('click', function(event) {
event.preventDefault();
//character part

	character.stop();
	character.animate({top:'-=25%'}, 1000,function(){
		character.animate({top: '100%'}, 3000);
	});

//if character touch something
checkTop();

});

function animObs(){
	count++;
	obstacle.animate({right:cWidth}, 6000,function(){
	obstacle.css('right','-200px');
	$('.count').html(count);
	animObs();
	});
}

function checkTop(){
	if((character.css('top') > '724px') == true){
loser();
}
 if(obup.css('right') >= '298px' && character.css('top') <= '163px' ){
loser();
 }
 if(obdown.css('right') >= '298px' && character.css('top') >= '376px' ){
loser();
 }

//if character touch something

}

function loser(){
	$('.loser').css('display','block');
	obstacle.stop();
 	character.stop();
}

$('.again').click(function() {
location.reload();
});

});