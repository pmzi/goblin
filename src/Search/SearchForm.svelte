<script>
  import FormItem from '../FormItem.svelte';
  import Button from '../Button.svelte';
  export let loading;

  import { createEventDispatcher, onMount  } from 'svelte';

  let urlInputRef = null;
  const dispatch = createEventDispatcher ();

  const model = {
    url: "",
    depth: 0,
  };

  onMount(()=>{
    urlInputRef.focus();
  })

  function submit(){
    dispatch('submit', model);
  }

</script>

<div class="search-form">
  <form on:submit|preventDefault={submit} class="search-form__form">
    <FormItem width="500px" label="Enter URL:">
      <input disabled={loading} bind:this={urlInputRef} class="search-form__input search-form__input" type="url" bind:value={model.url} placeholder="For example: https://google.com/" required />
    </FormItem>
    <FormItem width="80px" label="Depth:">
      <input disabled={loading} class="search-form__input search-form__input" type="number" bind:value={model.depth} required />
    </FormItem>
    <FormItem width="80px">
      <Button {loading} className="search-form__input search-form__input" type="submit" icon="search.png" />
    </FormItem>
  </form>
</div>

<style>
.search-form {

}
.search-form__form {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.search-form__input {
  width: 100%;
  height: 50px;
}
</style>