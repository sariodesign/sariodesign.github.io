<script>
  export let classes;
</script>

<div class={classes}>
  <slot name="title"></slot>
  <slot name="text"></slot>
  <slot name="link"></slot>
</div>

<style lang="scss">
  .content {
    box-sizing: border-box;
    padding: 60px 30px;

    @media (min-width: 1440px) {
      width: 400px
    }

    &.first-content {
      @media (min-width: 1440px) {
        grid-column: 4 / 6;
        padding: 66px 0 0;
      }
    }

    &.second-content {
      @media (min-width: 1440px) {
        grid-column: 2 / 5;
        padding: 72px 48px 0;
        width: 100%
      }
    }
  }

  :global(h1,h2,h3, p) {
    margin: 0;
  }

  :global(h1) {
    font-size: 32px;
    font-weight: 600;
    margin: 0 0 20px;

    @media(min-width: 1440px) {
      font-size: 36px;
      letter-spacing: 0.125rem;
    }
  }

  :global(h2) {
    font-size: 16px;
    margin: 0 0 20px;
    text-transform: uppercase;
  }

  :global(p) {
    color: var(--dark-gray);
    font-size: 12px;
    line-height: 20px;
    
    @media(min-width: 1440px) {
      font-size: 13px;
      line-height: 24px;
    }
    & + :global(a) {
      margin-top: 50px;
    }

  }

  :global(a) {
    color: #000;
    display: block;
    letter-spacing: 10px;
    text-transform: uppercase;
    transition: all .25s ease-in-out;

    &:visited {
      color: #000;
    }

    &:hover {
      opacity: .7;
      text-decoration: none;
    }
  }
  
</style>