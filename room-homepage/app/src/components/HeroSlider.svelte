<script>

    const moveSlider = (e) => {        
        let direction = e.target.dataset.direction;

        if(direction === 'next') {
            slideNext();
        } else {
            slidePrev();
        }
    }

    const slideNext = () => {
        let current = document.querySelector('.current');
        let next = current.nextElementSibling;
        if(next && next.classList.contains('slide')){
            next.classList.add('current');
            current.classList.remove('current');
            console.log('Current: ', current);
            console.log('Next: ', next);
            if(next.previousElementSibling){
                arrowPrev.classList.remove('is-disable');
                arrowNext.classList.add('is-disable');
            } else {
                return false;
            }
        }
    }

    const slidePrev = () => {
        let current = document.querySelector('.current');
        let prev = current.previousElementSibling;
        if(prev && prev.classList.contains('slide')){
            prev.classList.add('current');
            current.classList.remove('current');
            if(!prev.previousElementSibling){
                arrowNext.classList.add('is-disable');
            }
        } 
    }
</script>

<div class="hero">
    <div class="hero-slider">
        <figure class="slide current">
            <picture>
                <source srcset="../static/img/desktop-image-hero-1.jpg" media="(min-width: 1440px)">
                <img src="../static/img/mobile-image-hero-1.jpg" alt="" />
            </picture>
        </figure>
        <figure class="slide">
            <picture>
                <source srcset="../static/img/desktop-image-hero-2.jpg" media="(min-width: 1440px)">
                <img src="../static/img/mobile-image-hero-2.jpg" alt="" />
            </picture>
        </figure>
        <figure class="slide">
            <picture>
                <source srcset="../static/img/desktop-image-hero-3.jpg" media="(min-width: 1440px)">
                <img src="../static/img/mobile-image-hero-3.jpg" alt="" />
            </picture>
        </figure>
    </div>
    <div class="hero-arrows">
        <button id="arrowPrev" class="arrow-btn is-disable" data-direction="prev" on:click={moveSlider}>Prev</button>
        <button id="arrowNext" class="arrow-btn" data-direction="next" on:click={moveSlider}>Next</button>
    </div>
</div>

<style lang="scss">
    .hero {
        overflow: hidden;
    }

    .hero-slider {
        display: flex;
    }

    .slide {
        aspect-ratio: 16 / 9;
        flex: 1 0 auto;
        margin: 0;
        width: 100%;

        picture {
            display: block;
        }

        img {
            vertical-align: bottom;
        }
    }
</style>