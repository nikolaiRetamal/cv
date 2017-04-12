$(function(){
	//Chart JS
	var ctx1 = $('#myChart1');
	var ctx2 = $('#myChart2');
	Chart.defaults.global.animation.duration = 2000;
	Chart.defaults.global.animation.easing = 'easeInOutCubic';
	Chart.defaults.global.tooltips.enabled = false;
	Chart.defaults.global.defaultFontSize=16;
	var myChart1 = new Chart(ctx1, {
		type: 'bar',
		data: competences1,
		options: {
			legend: { display: false },
			responsive:true,
			maintainAspectRatio: true,
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
				}],scaleLabel: { fontSize: 26 }
			}
		}
	});
	var myChart2 = new Chart(ctx2, {
		type: 'doughnut',
		data: competences2,
		options: {
			responsive:true,
			maintainAspectRatio: false,
			legend: { 
				display: true, 
				position: 'bottom' }
		}
	});
	
	//caroussel photo
	var owl = $("#photos").owlCarousel({
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
	
	//Menu boutons points d'intérêt
	$('#boutons-interets').on('click', '.bouton', function() {
		var idInteret = $(this).data('interet');
		var idElemActif = $('.actif').data('interet');
		if(idInteret != idElemActif){
			$('.actif').fadeOut(300).removeClass('actif');
			var blocAffiche = $('.interet[data-interet=' + idInteret + ']');
			$('.bouton').removeClass('boutonActif');
			$(this).addClass('boutonActif');
			setTimeout(function() {
				blocAffiche.css('opacity', '0');
				blocAffiche.show();
				blocAffiche.animate({
				  opacity: 1
				},300);
				blocAffiche.addClass('actif');
			}, 300);
		}
		
	});
	
	//Navigation au clavier images
	$(document.documentElement).keyup(function (event) {
		//Ne marche que si carroussel visible
		if($('.boutonActif').data('interet') == 2){
			if (event.keyCode == 37) {
			   owl.trigger('prev.owl.carousel');
			} else if (event.keyCode == 39) {
				owl.trigger('next.owl.carousel');
			}
		}
	});
});
