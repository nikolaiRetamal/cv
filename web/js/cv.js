var sectionQuiSuisJe, barreChrono, containerExperiences, containerFormations;

function setHeightBarreChrono(){
	var height = containerExperiences.height()
					+ containerFormations.height() - 50;
	barreChrono.css('height', height);
}
function setPaddingAPropos(){
	sectionQuiSuisJe
}
$(function(){
	sectionQuiSuisJe = $("#quiSuisJe");
	barreChrono = $('#barreChrono');
	containerExperiences = $('.container-experiences');
	containerFormations = $('.container-formations');
	//Section pleine page
	$("section").css("min-height", $(window).height() - 30 );
	//Chart JS
	var ctx1 = $('#myChart1');
	var ctx2 = $('#myChart2');
	Chart.defaults.global.animation.duration = 2000;
	Chart.defaults.global.animation.easing = 'easeInOutCubic';
	Chart.defaults.global.tooltips.enabled = false;
	var myChart1 = new Chart(ctx1, {
		type: 'bar',
		data: competences1,
		options: {
			legend: { display: false },
			responsive:false,
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					},display : false
				}],
				xAxes: [{
					gridLines : {
						display : false
					}
				}]
			}
		}
	});
	var myChart2 = new Chart(ctx2, {
		type: 'bar',
		data: competences2,
		options: {
			legend: { display: false },
			responsive:false,
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					},display : false
				}],
				xAxes: [{
					gridLines : {
						display : false
					}
				}]
			}
		}
	});
	//OWL
	$("#memes").owlCarousel({
		loop:true,
		margin:10,
		dots:true,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});
	$("#photos").owlCarousel({
		loop:true,
		margin:10,
		dots:false,
		nav:true,
		items:1,
		navSpeed:700,
		navText : [
			"<",
			">"
		  ],
	});
	//Animation "Smooth" pour naviguer entre les sections
	$("nav").on('click', 'a', function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 700, 'swing');
	});
	//Gestion du changement du menu en fonction de la section courante
	$(document).scroll(function() {
		var cutoff = $(window).scrollTop() + 30;
		
		$('section').each(function(){
			var elem = $('li[data-ordre=' + $(this).data('ordre') + ']');
			if($(this).offset().top + $(this).height() > cutoff){
				$('nav li').removeClass('active');
				elem.addClass('active');
				return false; // stops the iteration after the first one on screen
			}
		});
	});
	//Voir/Cacher missions
	$('.description').on('click', '.voirDetail', function() {
		if($(this).next('.missions').css('display') == 'none'){
			$(this).find('.libelleDetail').text("Cacher mes missions");
		}else{
			$(this).find('.libelleDetail').text("Voir mes missions");
		}		     
	   $(this).next('.missions').toggle("hide");
	});
	setHeightBarreChrono();
	setPaddingAPropos();
	$( window ).resize(function() {
		setHeightBarreChrono();
		setPaddingAPropos();
	});
});
