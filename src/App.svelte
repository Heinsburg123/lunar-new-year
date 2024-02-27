<script>
	import Fireworks from "./Fireworks.svelte";
	import Letter from "./Letter.svelte";
	import Game from './Game.svelte'
	var active1=false
	var active2=false
	var active3=false
	document.querySelector('body').style.padding='0'

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
		{#if active2==true}
			<Fireworks show='on'></Fireworks>
		{/if}
		{#if active3==true}
			<Game show='on'></Game>
		{/if}
	</div>
</main>

<style>
	
	main {
		display:flex;
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
		background-image:url('https://i.ibb.co/Kxf3xbX/Artboard-1.png');
		background-repeat: no-repeat;
  		background-attachment: fixed;
  		background-size: cover;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		height: 100vh;
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