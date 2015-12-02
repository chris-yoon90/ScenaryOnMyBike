"use strict";

(function() {
	$(function() {
		if(App.isContext('page', 'about')) {
			Chart.defaults.global.responsive = true;
		
			var influencers = [
				{
					value: 30,
					color:"#F44336",
					highlight: "#B71C1C",
					label: "Bleeding edge Tech"
				},
				{
					value: 15,
					color: "#9C27B0",
					highlight: "#4A148C",
					label: "Product design"
				},
				{
					value: 10,
					color: "#FFEB3B",
					highlight: "#F57F17",
					label: "Money"
				},
				{
					value: 20,
					color: "#009688",
					highlight: "#004D40",
					label: "Blade & Soul"
				},
				{
					value: 5,
					color: "#795548",
					highlight: "#3E2723",
					label: "Board games (Resistance!!!)"
				}
			];
			
			var context = $('#influencer-chart').get(0).getContext("2d");
			var doughnutGraph = new Chart(context).Doughnut(influencers);
			var legend = doughnutGraph.generateLegend();
			$('#influencer-chart').parent().parent().append(legend);
		}
	});
})();