var slider = tns({
	container: ".my-slider",
	items: 4,
	edgePadding: 10,
	gutter: 10,
	slideBy: "page",
	mouseDrag: true,
	swipeAngle: false,
	autoplay: true,
	autoplayButtonOutput: false,
	controls: false,
	nav: false,
	speed: 400,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 3
		},
		1024: {
			items: 5
		}
	},
	loop: true,
});