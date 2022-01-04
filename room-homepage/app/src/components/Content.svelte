<div class="content">
  <slot name="title"></slot>
  <slot name="text"></slot>
</div>

<style lang="scss">
  .content {
    padding: 60px 30px;
  }

  :global(h1,h2,h3, p) {
    margin: 0;
  }

  :global(h1) {
    font-size: 32px;
    font-weight: 600;
    margin: 0 0 20px;
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
  }

  
</style>