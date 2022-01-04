
<script>
  export let classes;
  export let srcsetList;
  export let srcUrl;
  export let altName;
</script>

<figure class={classes}>
  <picture>
    {#if srcsetList}
      {#each srcsetList as source}
        <source srcset={source.src} media={source.media}>
      {/each}
    {/if}
      
      <img src={srcUrl} alt={altName} />
  </picture>
</figure>

<style lang="scss">
  img {
    max-width: 100%;
  }
</style>