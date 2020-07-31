<script>
  export let type = "button";
  export let loading = false;
  export let disabled = false;
  export let primary = false;
  export let danger = false;
  export let icon = "";
</script>

<button class="button" class:button--primary={primary} class:button--danger={danger} {type} on:click {disabled} on:submit>
  {#if loading}
    <img class="button__loading" src="/icons/spinner.svg" alt="loading" />
  {:else if icon}
    <img class="button__icon" src={`/icons/${icon}`} alt="icon" />
  {:else}
    <slot>
      Submit
    </slot>
  {/if}
</button>

<style>
.button {
  cursor: pointer;
  height: 50px;
  min-width: 60px;
  background-color: white;
  border: 1px solid #eee;
  padding: 0 20px;
}
.button__loading {
  height: 80%;
}
.button__icon {
  height: 60%;
}
.button--primary {
  color: white;
  background-color: #8e44ad;
}
.button--danger {
  color: white;
  background-color: #c0392b;
}
</style>