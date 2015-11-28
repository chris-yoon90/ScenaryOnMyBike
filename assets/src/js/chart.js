"use strict";

(function() {
	$(function() {
		if(App.isContext('page', 'about')) {
			Chart.defaults.global.responsive = true;
		
			var influencers = [
				{
					value: 300,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Red"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Green"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Yellow"
				}
			];
			
			var context = $('#influencer-chart').get(0).getContext("2d");
			var doughnutGraph = new Chart(context).Doughnut(influencers);
			var legend = doughnutGraph.generateLegend();
			$('#influencer-chart').parent().parent().append(legend);
		}
	});
})();