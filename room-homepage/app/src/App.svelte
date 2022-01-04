<script>
	import Navigation from './components/Navigation.svelte';
	import HeroSlider from './components/HeroSlider.svelte';
	import Content from './components/Content.svelte';
	import Image from './components/Image.svelte';

	let darkImage = {
		classes: 'about-image',
		srcUrl: '../static/img/image-about-dark.jpg',
		altName: 'About dark image'
	};

	let lightImage = {
		classes: 'about-image',
		srcUrl: '../static/img/image-about-light.jpg',
		altName: 'About light image'
	}

</script>

<div>
	<Navigation/>
	<div class="hero-container">
		<HeroSlider/>
	</div>
	<Content>
		<h1 slot="title">Discover innovative ways to decorate</h1>
		<p slot="text">We provide unmatched quality, confort and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
	</Content>
	<Image {...darkImage}/>
	<Content>
		<h2 slot="title">About our furniture</h2>
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
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			transition: all .25s ease-in-out;
			width: 100%;
			visibility: hidden;
			z-index: 2;
		}
	}

	:global(.about-image) {
		margin: 0;

		img {
			max-width: 100%
		}
	}

	:global(.is-locked) {
		overflow: hidden;

		&:after {
			background-color: rgba(0,0,0,.55);
			visibility: visible;
		}
	}

	.hero-container{
		position: relative;
	}
</style>