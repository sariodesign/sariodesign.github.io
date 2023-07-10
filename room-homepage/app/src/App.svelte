<script>
	import { onMount } from 'svelte';
	import Navigation from './components/Navigation.svelte';
	import HeroSlider from './components/HeroSlider.svelte';
	import Content from './components/Content.svelte';
	import Image from './components/Image.svelte';

	let darkImage = {
		classes: 'about-image',
		srcUrl: 'https://sariodesign.github.io/room-homepage/app/public/static/img/image-about-dark.jpg',
		altName: 'About dark image'
	};

	let lightImage = {
		classes: 'about-image',
		srcUrl: 'https://sariodesign.github.io/room-homepage/app/public/static/img/image-about-light.jpg',
		altName: 'About light image'
	}

	onMount(() => {
		if(window.matchMedia("(max-width: 767px)").matches){

			let target = document.querySelector("#target-nav");
			let nav = document.querySelector("nav");
			let callback = (entries) => {
				entries.forEach((entry) => {
					console.log('Entry: ', entry)
					if(entry.isIntersecting){
						nav.classList.add('is-fixed');
					} else {
						nav.classList.remove('is-fixed');
					}
				});
			};
		
			let observer = new IntersectionObserver(callback);
		
			observer.observe(target);
		}
	})

</script>

<svelte:head>
	<title>Frontend Mentor | Room homepage</title>
</svelte:head>

<div class="container">
	<Navigation/>
	<div class="hero-container">
		<HeroSlider/>
	</div>
	<Content classes="content first-content">
		<h1 slot="title">Discover innovative ways to decorate</h1>
		<p slot="text">We provide unmatched quality, confort and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
		<a slot="link" href="/">Shop Now <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg></a>
	</Content>
	<Image {...darkImage}/>
	<Content classes="content second-content">
		<h2 id="target-nav" slot="title">About our furniture</h2>
		<p slot="text">Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
	</Content>
	<Image {...lightImage}/>
</div>

<style lang="scss">	
	:global(body) {
		position: relative;
		&:after {
			background-color: rgba(0,0,0,0);
			overflow: hidden;
			content: '';
			height: 100vh;
			left: 0;
			position: fixed;
			top: 0;
			transition: all .25s ease-in-out;
			width: 100%;
			visibility: hidden;
			z-index: 2;
		}
	}

	:global(.about-image) {
		margin: 0;
	}

	:global(.is-locked) {
		overflow: hidden;

		&:after {
			background-color: rgba(0,0,0,.75);
			visibility: visible;
		}
	}

	.container {
		@media (min-width: 1440px) {
			display: grid;
			grid-template-columns: 420px 420px 100px 60px 440px;
			grid-template-rows: 534px auto;
			max-width: 1440px;
			margin: 0 auto;
			position: relative;
		}
	}

	.hero-container {
		position: relative;

		@media (min-width: 1440px) {
			grid-column: 1 / 3
    }
	}
</style>