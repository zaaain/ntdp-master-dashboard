
import { Chart, ArcElement, Tooltip, Legend, registerables } from "chart.js";
Chart.register(...registerables, ArcElement, Tooltip, Legend);

//  Chartjs Line Chart

export const Option1 = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
	scales: {
		x: {
			grid: {
				color: "rgba(165, 178, 189, 0.5)"
			}
		},
		y: {
			grid: {
				color: "rgba(165, 178, 189, 0.5)"
			}
		}
	},
	cutout: 90,
};
export const Data1 = {
	type: "line",
	labels: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
	],
	datasets: [{
		label: "My First dataset",
		backgroundColor: "rgb(0, 255, 190)",
		borderColor: "rgb(0, 255, 190)",
		data: [0, 10, 5, 2, 20, 30, 45],
	}]
};

//  Chartjs Bar Chart

export const Option2 = {

	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
	scales: {
		y: {
			beginAtZero: true,
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		},
		x: {
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		}
	}
};
export const Data2 = {
	type: "bar",
	labels: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
	],
	datasets: [{
		label: "My First Dataset",
		data: [65, 59, 80, 81, 56, 55, 40],
		backgroundColor: [
			"rgb(0, 255, 190, 0.2)",
			"rgb(72, 247, 104, 0.2)",
			"rgb(245, 184, 73, 0.2)",
			"rgb(73, 182, 245, 0.2)",
			"rgb(230, 83, 60, 0.2)",
			"rgb(72, 247, 104, 0.2)",
			"rgb(44, 62, 80, 0.2)"
		],
		borderColor: [
			"rgb(0, 255, 190)",
			"rgb(72, 247, 104)",
			"rgb(245, 184, 73)",
			"rgb(73, 182, 245)",
			"rgb(230, 83, 60)",
			"rgb(72, 247, 104)",
			"rgb(44, 62, 80)"
		],
		borderWidth: 1
	}]
};

//Chartjs Pie Chart

export const Option3 = {

	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
};
export const Data3 = {
	type: "pie",
	labels: [
		"Red",
		"Blue",
		"Yellow"
	],
	datasets: [{
		label: "My First Dataset",
		data: [300, 50, 100],
		backgroundColor: [
			"rgb(0, 255, 190)",
			"rgb(35, 183, 229)",
			"rgb(245, 184, 73)"
		],
		hoverOffset: 4
	}]
};

//Chartjs Doughnut Chart

export const Option4 = {

	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
};
export const Data4 = {
	type: "donut",
	labels: [
		"Red",
		"Blue",
		"Yellow"
	],
	datasets: [{
		label: "My First Dataset",
		data: [300, 50, 100],
		backgroundColor: [
			"rgb(0, 255, 190)",
			"rgb(35, 183, 229)",
			"rgb(245, 184, 73)"
		],
		hoverOffset: 4
	}]
};

//Chartjs Mixed Chart

export const Option5 = {

	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
	scales: {
		y: {
			grid: {
				color: "rgba(230, 236, 246, 0.25)"
			},
			beginAtZero: true
		}
	}
};
export const Data5 = {
	labels: [
		"January",
		"February",
		"March",
		"April"
	],
	datasets: [
		{
			type: "bar",
			label: "Bar Dataset",
			data: ["10", "20", "30", "40"],
			borderColor: "rgb(0, 255, 190)",
			backgroundColor: "rgba(0, 255, 190, 0.2)"
		},
		{
			type: "line",
			label: "Line Dataset",
			data: ["50", "50", "50", "50"],
			fill: false,
			borderColor: "rgb(35, 183, 229)"
		}
	]
};

//Chartjs Polar Chart

export const Option6 = {

	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},

};
export const Data6 = {
	type: "polarArea",
	labels: [
		"Red",
		"Green",
		"Yellow",
		"Grey",
		"Blue"
	],
	datasets: [{
		label: "My First Dataset",
		data: [11, 16, 7, 3, 14],
		backgroundColor: [
			"rgb(0, 255, 190)",
			"rgb(75, 192, 192)",
			"rgb(245, 184, 73)",
			"rgb(201, 203, 207)",
			"rgb(35, 183, 229)"
		]
	}]
};

//Chartjs Radial Chart

export const Option7 = {

	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					color: "rgba(142, 156, 173,0.1)"
				}
			},
			x: {
				grid: {
					color: "rgba(142, 156, 173,0.1)"
				}
			}
		}
	},
	elements: {
		line: {
			borderWidth: 3,
			borderColor: "rgba(142, 156, 173,0.1)",
		}
	}

};
export const Data7 = {
	type: "radar",
	labels: [
		"Eating",
		"Drinking",
		"Sleeping",
		"Designing",
		"Coding",
		"Cycling",
		"Running"
	],
	datasets: [{
		label: "My First Dataset",
		data: [65, 59, 90, 81, 56, 55, 40],
		fill: true,
		backgroundColor: "rgba(0, 255, 190, 0.2)",
		borderColor: "rgb(0, 255, 190)",
		pointBackgroundColor: "rgb(0, 255, 190)",
		pointBorderColor: "#fff",
		pointHoverBackgroundColor: "#fff",
		pointHoverBorderColor: "rgb(0, 255, 190)"
	}, {
		label: "My Second Dataset",
		data: [28, 48, 40, 19, 96, 27, 100],
		fill: true,
		backgroundColor: "rgba(35, 183, 229, 0.2)",
		borderColor: "rgb(35, 183, 229)",
		pointBackgroundColor: "rgb(35, 183, 229)",
		pointBorderColor: "#fff",
		pointHoverBackgroundColor: "#fff",
		pointHoverBorderColor: "rgb(35, 183, 229)"
	}]
};

//Chartjs Scatter Chart

export const Option8 = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					color: "rgba(142, 156, 173,0.1)"
				}
			},
			x: {
				grid: {
					color: "rgba(142, 156, 173,0.1)"
				}
			}
		}
	},
	scales: {
		x: {
			type: "linear",
			position: "bottom",
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		},
		y: {
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		}
	}

};
export const Data8 = {
	type: "scatter",
	datasets: [{
		label: "Scatter Dataset",
		data: [{
			x: -10,
			y: 0
		}, {
			x: 0,
			y: 10
		}, {
			x: 10,
			y: 5
		}, {
			x: 0.5,
			y: 5.5
		}],
		backgroundColor: "rgb(0, 255, 190)"
	}],
};

//Chartjs Bubble Chart

export const Option9 = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
	scales: {
		x: {
			type: "linear",
			position: "bottom",
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		},
		y: {
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		}
	}

};
export const Data9 = {
	type: "bubble",
	datasets: [{
		label: "First Dataset",
		data: [{
			x: 20,
			y: 30,
			r: 15
		}, {
			x: 40,
			y: 10,
			r: 10
		}],
		backgroundColor: "rgb(0, 255, 190)"
	}]
};
