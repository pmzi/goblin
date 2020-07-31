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
		// submit
		loading = true;
		setTimeout(()=>{
			isSubmitted = true;
			loading = false;
			result = selectedEmails = [
				{
					id: 1,
					email: 'pouya.mozafar@gmail.com',
					depth: 1,
					link: 'https://google.com/'
				},
				{
					id: 2,
					email: 'pouya@cafebazaar.ir',
					depth: 1,
					link: 'https://google.com/'
				},
			]
		}, 1000)
  }
  
  function submitEmails(){
    dispatch("submit-emails", selectedEmails)
  }
</script>

<div class="search__form" class:search__form--active={isSubmitted}>
  <SearchForm {loading} on:submit={grabEmails} />
</div>

{#if result.length}
  <div class="search__list-wrapper" transition:fade={{delay: 500}}>
    <div class="search__list">
      <ResultList bind:selectedEmails={selectedEmails} {result} />
    </div>
    <Button on:click={submitEmails}>
      Send Email
    </Button>
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