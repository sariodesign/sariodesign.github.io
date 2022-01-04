<script>
    import Image from './Image.svelte';

    const slides = [
        {   
            classes: 'slide current',
            srcsetList: [
                {
                    src: '../static/img/desktop-image-hero-1.jpg',
                    media: '(min-width: 1400px)'
                }
            ],
            srcUrl: '../static/img/mobile-image-hero-1.jpg',
            alt: 'Image 1',
        },
        {
            classes: 'slide',
            srcsetList: [
                {
                    src: '../static/img/desktop-image-hero-2.jpg',
                    media: '(min-width: 1400px)'
                }
            ],
            srcUrl: '../static/img/mobile-image-hero-2.jpg',
            alt: 'Image 2',
        },
        {
            classes: 'slide',
            srcsetList: [
                {
                    src: '../static/img/desktop-image-hero-3.jpg',
                    media: '(min-width: 1400px)'
                }
            ],
            srcUrl: '../static/img/mobile-image-hero-3.jpg',
            alt: 'Image 3',
        }
    ];

    const slideNext = () => {
        let slides = document.querySelectorAll('.slide');
        let current = document.querySelector('.current');
        let next = current.nextElementSibling;

        if(next && next.classList.contains('slide')){
            next.classList.add('current');
            next.scrollIntoView({ block: "center", behavior: "smooth", inline: "center" })
            current.classList.remove('current');
            let indexCurrent = Array.from(slides).findIndex(el => el.classList.contains('current'));

            checkDisable(indexCurrent, slides.length);
        }
    }

    const slidePrev = () => {
        let slides = document.querySelectorAll('.slide');
        let current = document.querySelector('.current');
        let prev = current.previousElementSibling;

        if(prev && prev.classList.contains('slide')){
            prev.classList.add('current');
            prev.scrollIntoView({ block: "center", behavior: "smooth", inline: "center" })
            current.classList.remove('current');
            let indexCurrent = Array.from(slides).findIndex(el => el.classList.contains('current'));
            
            checkDisable(indexCurrent, slides.length);
        } 
    }

    const checkDisable = (index, length) => {
        if(index === 0) {
            arrowPrev.classList.add('is-disable');
        } else if(index > 0 && index < length - 1) {
            arrowPrev.classList.remove('is-disable');
            arrowNext.classList.remove('is-disable');
        } else if(index === length - 1) {
            arrowNext.classList.add('is-disable');
        }
    }

    const moveSlider = (e) => {        
        let direction = e.target.dataset.direction;

        if(!e.target.classList.contains('is-disable')){
            if(direction === 'next') {
                slideNext();
            } else {
                slidePrev();
            }
        }
    }

</script>

<div class="hero">
    <div class="hero-slider">
        {#each slides as slide}
            <Image {...slide} />
        {/each}
    </div>
</div>
<div class="hero-arrows">
    <button id="arrowPrev" class="arrow-btn is-disable" data-direction="prev" on:click={moveSlider}>
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
    </button>
    <button id="arrowNext" class="arrow-btn" data-direction="next" on:click={moveSlider}>
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
    </button>
</div>

<style lang="scss">
    .hero {
        overflow: hidden;
    }

    .hero-slider {
        display: flex;
    }

    :global(.slide) {
        aspect-ratio: 16 / 9;
        flex: 1 0 auto;
        margin: 0;
        width: 100%;

        :global(picture) {
            display: block;
        }

        :global(img) {
            vertical-align: bottom;
        }
    }
    .hero-arrows {
        bottom: 0;
        display: flex;
        position: absolute;
        right: 0;
    }
    .arrow-btn {
        border: 0;
        background-color: #000;
        height: 80px;
        margin: 0;
        width: 80px;

        &:global(.is-disable) {
            opacity: .5;
        }

        svg {
            pointer-events: none;
        }
    }
</style>