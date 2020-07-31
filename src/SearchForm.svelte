<script>
  import FormItem from './FormItem.svelte';
  import Button from './Button.svelte';
  export let loading;

  import { createEventDispatcher  } from 'svelte';

  const dispatch = createEventDispatcher ();

  const model = {
    url: "",
    depth: 0,
  };

  function submit(){
    console.log("Hello")
    dispatch('submit', model);
  }

</script>

<div class="search-form">
  <form on:submit|preventDefault={submit} class="search-form__form">
    <FormItem width="500" label="Enter URL:">
      <input class="search-form__input search-form__input" type="url" bind:value={model.url} placeholder="For example: https://google.com/" required />
    </FormItem>
    <FormItem width="80" label="Depth:">
      <input class="search-form__input search-form__input" type="number" bind:value={model.depth} required />
    </FormItem>
    <FormItem width="80">
      <Button {loading} className="search-form__input search-form__input" type="submit">
        <img />
        Hey there
      </Button>
    </FormItem>
  </form>
</div>

<style>
.search-form {
  max-width: 800px;
  width: 100%;
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