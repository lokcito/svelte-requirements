<script>
	import { requirements } from '../stores/requirementStores';
	import Requirement from '../components/Requirement.svelte';
</script>

<section class="">
	<div class="">
		<h1 class="text-3xl font-bold text-center mb-8 mt-8 text-indigo-900">Requirements</h1>
	</div>
	<div class="bg-slate-50 p-4 rounded drop-shadow-lg">
		{#each $requirements as requirement}
			<Requirement data={requirement}></Requirement>
		{/each}
	</div>
</section>

<style>
	body {
		background-color: red;
	}
</style>
