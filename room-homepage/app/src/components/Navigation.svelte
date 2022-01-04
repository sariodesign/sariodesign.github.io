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
		        <li>{item}</li>
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
    }
	nav {
        box-sizing: border-box;
        left: 0;
        padding: 40px 30px;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 3;
    }
    .logo {
        color: #fff;
        font-size: 20px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .menu-container {
        background-color: #fff;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        padding: 40px 30px;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-100%);
        transition: transform .25s ease-in-out;
        width: 100%;

        &:global(.is-open) {
            transform: translateY(0);
        }
    }
    .menu {
        align-items: center;
        display: flex;
        gap: 20px;
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>