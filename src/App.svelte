<script>
	import Search from './Search/index.svelte'
	import SubmitFormModal from './SubmitFormModal.svelte';

	let isShowingForm = false;
	let emails = [];
	function showForm({ detail: selectedEmails }){
		emails = selectedEmails;
		isShowingForm = true;
	}
	function hideForm(){
		isShowingForm = false;
	}
</script>

<div class="app">
	<div class="app__content">
		<Search on:submit-emails={showForm} />

		{#if isShowingForm}
			<SubmitFormModal on:cancel={hideForm} {emails} />
		{/if}
	</div>
</div>

<style>
.app {
	min-height: 100vh;
	background-color: whitesmoke;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 180px;
	position: relative;
}
.app__content {
	width: 100%;
	max-width: 1000px;
}
</style>