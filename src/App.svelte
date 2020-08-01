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
	<footer class="app__footer">
		Created By <abbr title="966127020">Fatemeh Alizadeh</abbr>, <abbr title="966127016">Setayesh Saemi</abbr>, <abbr title="966127049">Sogand Tatlari</abbr>, <abbr title="966127033">Pouya MozaffarMagham</abbr>
	</footer>
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
	flex-grow: 1;
}
.app__footer {
	flex-basis: 40px;
	color: rgb(104, 104, 104);
}
</style>