<script>
	import { RequirementModel } from '../models/requirementModel';

	export let data = new RequirementModel({ id: 0, name: '' });

	/**
	 * @type {HTMLInputElement}
	 */
	let fileRef;

	/**
	 * @type {FileList}
	 */
	let fileValue;

	$: {
		if (fileValue && fileValue[0]) {
			data.fileName = fileValue[0].name;
		}
	}

	const modalFile = () => {
		fileRef.click();
	};
</script>

<section class="mb-2">
	<section class="flex items-center">
		<aside class=" w-2/3">
			<div class="rounded-t bg-slate-200 pl-2 pr-2 pt-1 pb-1">{data.name}</div>
			<div class="rounded-b bg-slate-100 pl-2 pr-2 pt-1 pb-2 text-sm text-slate-600">
				{data.description}
			</div>
		</aside>
		<aside class="w-1/3 pl-4 flex items-center flex-col">
			<input type="file" bind:this={fileRef} bind:files={fileValue} class="hidden" />
			<div class="italic truncate ... overflow-hidden text-clip w-full text-center">
				{data.fileName ? data.fileName : 'Please select a file.'}
			</div>
			<button
				type="button"
				class="bg-slate-700 hover:bg-slate-800 p-2 rounded-full text-white w-full"
				on:click={modalFile}>{data.fileName ? 'Upload' : 'Select'}</button
			>
		</aside>
	</section>
</section>

<style>
</style>
