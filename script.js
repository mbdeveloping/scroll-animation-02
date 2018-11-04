const mainSection = $('main');

const animBtn = $('#anim-btn');
const circle1 = $('#circle-1');
const circle2 = $('#circle-2');
const circle3 = $('#circle-3');
const circle4 = $('#circle-4');

const introTextH2 = $('.intro-text h2');
const introTextP = $('.intro-text p');
const introTextButton = $('.intro-text button');

const circle1tH2 = $('#circle-1-text h2');
const circle1P = $('#circle-1-text p');
const circle1Button = $('#circle-1-text button');

animBtn.on('click', () => {

	mainSection.addClass('expanded');

	$('.section-border').css('display', 'block');

	TweenMax.to(circle2, 1, { y: ($('#circle-2-pos').offset().top - circle2.offset().top) - circle2.height() / 2 });
	TweenMax.to(circle3, 1, { y: ($('#circle-3-pos').offset().top - circle3.offset().top) - circle3.height() / 2 });
	TweenMax.to(circle4, 1, { y: ($('#circle-4-pos').offset().top - circle4.offset().top) - circle4.height() / 2 });

	animateIntroText();

	testF();
});

function animateIntroText() {

	TweenMax.to(introTextH2, .7, { x: '120%' });
	TweenMax.to(introTextP, .7, { x: '120%' });
	TweenMax.to(introTextButton, .7, { x: '120%', onComplete: animateCircle1Text });
}

function animateCircle1Text() {

	TweenMax.set('#circle-1-text', { x: '0%' });
	TweenMax.to(circle1tH2, .7, { x: '0%' });
	TweenMax.to(circle1P, .7, { x: '0%' });
	TweenMax.to(circle1Button, .7, { x: '0%' });

	TweenMax.to('#circle-1-border', .7, { width: '100%' });
}


function testF() {
	const controller = new ScrollMagic.Controller();

	const circle2TimeLine = new TimelineMax()
		.to('#circle-2-text', .7, { opacity: 1 })
		.to('#circle-2-border', .7, { width: '100%' }, "-=.7");

	let circle2Scene = new ScrollMagic.Scene({
		triggerElement: '#circle-2-section'
	})
		.setTween(circle2TimeLine)
		.addIndicators({ name: "circle-2" })
		.addTo(controller);

	const circle3Timeline = new TimelineMax()
		.to('#circle-3-text', .7, { opacity: 1 })
		.to('#circle-3-border', .7, { width: '100%' }, "-=.7");

	let circle3Scene = new ScrollMagic.Scene({
		triggerElement: '#circle-3-section'
	})
		.setTween(circle3Timeline)
		.addIndicators({ name: "circle-3" })
		.addTo(controller);

	const circle4Timeline = new TimelineMax()
		.to('#circle-4-text', .7, { opacity: 1 });
		// .to('#circle-3-border', .7, { width: '100%' }, "-=.7");

	let circle4Scene = new ScrollMagic.Scene({
		triggerElement: '#circle-4-section'
	})
		.setTween(circle4Timeline)
		.addIndicators({ name: "circle-4" })
		.addTo(controller);
}
