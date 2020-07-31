<script>
  export let type = "button";
  export let className = "";
  export let loading = false;
</script>

<button {type} on:click {className} on:submit>
  {#if loading}
    loading...
  {:else}
    <slot>
      Submit
    </slot>
  {/if}
</button>