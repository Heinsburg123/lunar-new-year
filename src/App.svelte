<script>
	import Letter from "./Letter.svelte";
	var active1=false
	var active2=false
	var active3=false
</script>
<main>
	<div>
		<button class={active1?'active':''} on:click={()=>{
			active1=true
			active2=false
			active3=false
		}}>Page 1</button>
		<button class={active2?'active':''} on:click={()=>{
			active1=false
			active2=true
			active3=false
		}}>Page 2</button>
		<button class={active3?'active':''} on:click={()=>{
			active1=false
			active2=false
			active3=true
		}}>Page 3</button>
		{#if active1==true}
			<Letter show='on'></Letter>
		{/if}
	</div>
	{

	}
</main>

<style>
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
		background-image:url('blob:https://www.facebook.com/bfaa6972-5aed-42de-9601-203ccaed2b4b');
		background-repeat: no-repeat;
  		background-attachment: fixed;
  		background-size: cover;
	}	

	button
	{
		padding:5px;
		font-family: 'Courier New', Courier, monospace;
		transition: 0.5s;
	}
	.active
	{
		font-weight: bold;
		background-color:red;
		color:white;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>