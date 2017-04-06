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
	var ctx = $('#myChart');
	Chart.defaults.global.animation.duration = 2000;
	Chart.defaults.global.animation.easing = 'easeInOutCubic';
	Chart.defaults.global.tooltips.enabled = false;
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: obj,
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
	//Carte
	$(".container").mapael({
		map: {
			name: "world_countries"
			, defaultArea: {
				attrs: {
					fill: "#ecf6f7"
					, stroke: "#349fa7"
				}
				, attrsHover: {
					fill: "#ecf6f7"
				}
			}
		},
		plots: {
			'cm': {
				latitude: 53.258888,
				longitude: -9.032135,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "Connemara<br>2013"},
				value: [5000, 20]
			},
			'ny': {
				latitude: 40.717079,
				longitude: -74.00116,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "New York<br>2014"},
				value: [5000, 20]
			},
			
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
