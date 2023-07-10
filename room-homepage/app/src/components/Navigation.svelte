<script>

    const showHideMenu = (e) => {
        let globalPage = document.querySelector('body');
        let menuContainer = document.querySelector('.menu-container');
        let actionEvent = e.target.dataset.action;

        if(actionEvent === 'open') {
            menuContainer.classList.add('is-open');
            globalPage.classList.add('is-locked');
        } else {
            menuContainer.classList.remove('is-open');
            globalPage.classList.remove('is-locked');
        }
    }

    const menuItems = ['home','shop','about','contact'];
    

</script>

<nav>
    <button class="btn-menu btn-open" data-action="open" on:click={showHideMenu}></button>
    <div class="logo">room</div>
    <div class="menu-container">
        <button class="btn-menu btn-close" data-action="close" on:click={showHideMenu}></button>
        <ul class="menu">
            {#each menuItems as item}
		        <li>
                    <a href="/">{item}</a>
                </li>
	        {/each}
        </ul>
    </div>
</nav>

<style lang="scss">
    .btn-menu {
        background-color: transparent;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 20px;
        border: 0;
        margin: 0;
        height: 32px;
        width: 32px;

        &.btn-open {
            background-image: url('../static/img/icon-hamburger.svg');
        }

        &.btn-close {
            background-image: url('../static/img/icon-close.svg');
        }

        @media (min-width: 1440px) {
            display: none;
        }
    }
	nav {
        box-sizing: border-box;
        left: 0;
        padding: 40px 30px;
        position: fixed;
        top: 0;
        transition: background .25s ease-in-out;
        width: 100%;
        z-index: 3;

        &:global(.is-fixed) {
            background-color: rgba(0,0,0,.75);
        }

        @media (min-width: 1440px) {
            display: flex;
            left: 0;
            padding: 64px 0 0 64px;
            position: absolute;
            top: 0;
        }
    }
    .logo {
        color: #fff;
        font-size: 20px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        @media (min-width: 1440px) {
            left: auto;
            margin-right: 36px;
            position: relative;
            top: auto;
            transform: none;
        }

    }
    .menu-container {
        background-color: #fff;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        padding: 40px 20px;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-100%);
        transition: transform .25s ease-in-out;
        width: 100%;

        &:global(.is-open) {
            transform: translateY(0);
        }

        @media (min-width: 375px) {
            padding: 40px 30px
        }

        @media (min-width: 1440px) {
            background-color: transparent;
            padding: 0;
            position: relative;
            transform: none;
        }
    }
    .menu {
        align-items: center;
        display: flex;
        gap: 20px;
        list-style: none;
        margin: 0;
        padding: 0;

        @media (min-width: 1440px) {
            gap: 35px;
        }

        a {
            letter-spacing: normal;
            position: relative;
            text-decoration: none;
            text-transform: lowercase;
            @media (min-width: 1440px) {
                color: #fff;

                &:hover {
                    opacity: 1;

                    &::after {
                        opacity: 1;
                    }
                }

                &:after {
                    background-color: #fff;
                    content: '';
                    display: block;
                    left: 50%;
                    height: 2px;
                    position: absolute;
                    top: calc(100% + 12px);
                    transform: translateX(-50%);
                    transition: opacity .25s ease-in-out;
                    opacity: 0;
                    width: 16px;
                }
            }
        }

    }
</style>