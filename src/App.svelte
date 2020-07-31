<script>
	import SearchForm from './SearchForm.svelte';
	export let name;

	let loading = false;
	let isSubmitted = false;

	function submit({ detail: model }){
		// submit
		loading = true;
		setTimeout(()=>{
			isSubmitted = true;
			loading = false;
		}, 1000)
	}
</script>

<div class="app">
	<div class="app__search-form" class:app__search-form--active={isSubmitted}>
		<SearchForm {loading} on:submit={submit} />
	</div>

</div>

<style>
.app {
	min-height: 100vh;
	background-color: whitesmoke;
	display: flex;
	justify-content: center;
	padding-top: 180px;
	position: relative;
}
.app__search-form {
	transition-duration: 0.5s;
	position: absolute;
	top: 50%;
	left: 50%;
	margin: auto;
	transform: translate(-50%, -50%);
}
.app__search-form--active {
	transform: translateX(-50%);
	top: 50px;
}
</style>