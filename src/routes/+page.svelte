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
	<div class="pt-8 flex justify-center">
		<div class="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden">
			<div class="flex items-center justify-between px-6 py-4 bg-gray-800">
				<div class="flex items-center">
					<svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
						<path
							d="M12 0C5.371 0 0 5.373 0 12c0 5.303 3.438 9.799 8.207 11.387.6.111.793-.261.793-.578 0-.285-.011-1.041-.017-2.043-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.091-.744.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.833 2.806 1.303 3.492.996.108-.774.419-1.303.762-1.603-2.665-.304-5.466-1.333-5.466-5.932 0-1.31.469-2.382 1.235-3.22-.123-.303-.535-1.521.117-3.168 0 0 1.008-.322 3.301 1.23.957-.267 1.984-.4 3.005-.405 1.021.005 2.048.138 3.006.405 2.291-1.553 3.297-1.23 3.297-1.23.653 1.647.241 2.865.118 3.168.769.838 1.234 1.91 1.234 3.22 0 4.61-2.804 5.625-5.475 5.92.43.372.814 1.104.814 2.225 0 1.608-.015 2.903-.015 3.293 0 .32.192.694.801.576C20.565 21.796 24 17.301 24 12 24 5.373 18.627 0 12 0z"
						/>
					</svg>
					<span class="text-white text-lg font-semibold ml-3">GitHub</span>
				</div>
				<a
					href="https://github.com/lokcito/svelte-requirements"
					target="_blank"
					class="text-white">lokcito/svelte-requirements</a
				>
			</div>
		</div>
	</div>
</section>

<style>
	body {
		background-color: red;
	}
</style>
