$(function(){
	//Carte
	$("#container-map").mapael({
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
			, defaultPlot : {
					size:12
				}
		},
		plots: {
			'connemara': {
				latitude: 53.258888,
				longitude: -9.032135,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "Irlande<br>Connemara"}
			},
			'newyork': {
				latitude: 40.717079,
				longitude: -74.00116,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "USA<br>New York"}
			},
			'manaus': {
				latitude: -3.119028,
				longitude: -60.021731,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "Brésil<br>Manaus"}
			},
			'buenosaires': {
				latitude: -34.603684,
				longitude: -58.381559,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "Argentine<br>Buenos Aires, Salta, etc."}
			},
			'lima': {
				latitude: -12.272096,
				longitude: -76.271083,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "Pérou<br>Lima, Cuzco, etc."}
			},
			'lapaz': {
				latitude: -16.489689,
				longitude: -68.119294,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "Bolivie<br>La Paz, Sucre, Sud Lipez, etc."}
			},
			'caracas': {
				latitude: 10.480594,
				longitude: -66.903606,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "Venezuela<br>Caracas, Merida, etc."}
			},
			'puntadeldiablo': {
				latitude: -34.901113,
				longitude: -56.164531,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "Uruguay<br>Montevideo, Colonia, etc."}
			},
			'marrakech': {
				latitude: 31.629472,
				longitude: -7.981084,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "Maroc<br>Marrakech, Essaouira, etc."}
			},
			'santiago': {
				latitude: -33.448890,
				longitude: -70.669265,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "Chili<br>Santiago, Arica, etc."}
			},
			'londres': {
				latitude: 51.507351,
				longitude: -0.127758,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "Angleterre<br>Londres"}
			},
			'rome': {
				latitude: 41.902783,
				longitude: 12.496366,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "Italie<br>Rome, Venise, Florence, etc."}
			},
			'madrid': {
				latitude: 40.416775,
				longitude: -3.703790,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: 'Espagne<br>Madrid, Barcelone, etc'}
			},
			'newcal': {
				latitude: -22.255823,
				longitude: 166.450524,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "Nouvelle-Calédonie<br>Nouméa, Ouvéa, etc."}
			},
			'Bali': {
				latitude: -8.340539,
				longitude: 115.091951,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "Bali<br>Ubud, Bukit, Amed, etc."}
			},
			'seoul': {
				latitude: 37.566535,
				longitude: 126.977969,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "Corée du Sud<br>Séoul"}
			},
			'sidney': {
				latitude: -33.868820,
				longitude: 151.209296,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "Australie<br>Sidney"}
			},
			'benelux': {
				latitude: 50.850346,
				longitude: 4.351721,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "Benelux<br>Bruxelles, Amsterdam, etc."}
			},
			'prague': {
				latitude: 50.075538,
				longitude: 14.437800,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "République Tchèque<br>Prague"}
			},
			'geneve': {
				latitude: 46.204391,
				longitude: 6.143158,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: "Suisse<br>Genève, Lausanne"}
			},
			'porto': {
				latitude: 41.157944,
				longitude: -8.629105,
				attrs: {fill : "#e74c3c", stroke : "#000", "stroke-width" : 1 },
				tooltip: {content: 'Portugal<br>Porto'}
			},
		}
	});
});
