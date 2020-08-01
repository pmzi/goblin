<script>
  import SearchForm from './SearchForm.svelte';
  import ResultList from './ResultList.svelte'
  import Button from '../Button.svelte';

  import { createEventDispatcher  } from 'svelte';
  import { fade } from 'svelte/transition';

  let loading = false;
	let isSubmitted = false;
  let result = [];
  let selectedEmails = [];
  
  const dispatch = createEventDispatcher();

	function grabEmails({ detail: model }){
		loading = true;
		fetch("/.netlify/functions/grab-emails", {
			body: JSON.stringify(model),
			method: "POST",
    }).then(res => res.json()).then(({ result: { emails } })=>{
			isSubmitted = true;
			result = selectedEmails = emails;
    }).catch(({ message })=>{
			alert(message)
		}).finally(()=>{
			loading = false;
		});
  }
  
  function submitEmails(){
    dispatch("submit-emails", selectedEmails)
  }
</script>

<div class="search__form" class:search__form--active={isSubmitted}>
  <SearchForm {loading} on:submit={grabEmails} />
</div>

{#if isSubmitted && !loading}
  <div class="search__list-wrapper" out:fade in:fade={{delay: 500}}>
    <div class="search__list">
      <ResultList bind:selectedEmails={selectedEmails} {result} />
    </div>
    {#if result.length}
      <Button on:click={submitEmails}>
        Send Email
      </Button>
    {/if}
  </div>
{/if}

<style>
.search__form {
	transition-duration: 0.5s;
	position: absolute;
	top: 50%;
	left: 50%;
	margin: auto;
	transform: translate(-50%, -50%);
}
.search__form--active {
	transform: translateX(-50%);
	top: 50px;
}
.search__list-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search__list {
  margin-bottom: 20px;
  align-self: stretch;
}
</style>