<script>
    import {flip} from 'svelte/animate'
    export let show='off'

    let infos=[
        {flip_n:0,value:'100k.jpg',id:1},
        {flip_n:0,value:'200k.jpg',id:2},
        {flip_n:0,value:'500k.jpg',id:3}
    ]
    function shuffle()
    {
        for(let i=0;i<3;i++)
        {
            let j=Math.floor(Math.random()*(i+1))
            let temp=infos[i]
            infos[i]=infos[j]
            infos[j]=temp
        }
    }

</script>
<div class='show' id='container'>
    {#each infos as info(info) }
        <button animate:flip={{duration:500}} class={show} id={info.flip_n?'flipped':''}  on:click={()=>{info.flip_n=!info.flip_n}}>
            <div class='front'>
                <img src='lixi.png' alt='f'>
            </div>
            <div class='back'>
                <img src={info.value} alt='f' id='money'>
            </div>
        </button>
    {/each}
</div>

<button on:click={shuffle}>shuffle</button>

<style>
    *
    {
        margin:0;
        padding:0
    }
    .on
    {
        display:block
    }
    .off
    {
        display:none
    }
    #container
    {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
        gap: 20vw;
    }
    button
    {
        border-radius: 5px;
        width: 150px;
        height: 300px;
        transform: rotateY(0deg);
        transition: transform 2s;
        cursor: pointer;
        border: none;
        background-color: white;
        transform-style: preserve-3d;
    }

    img
    {
        width: 150px;
        height: 300px;
    }
    
    .front, .back
    {
        position: absolute;
        backface-visibility: hidden;
        top:1vh
    }
    .back
    {
        transform:rotateY(180deg)
    }
    #flipped
    {
        transform:rotateY(180deg)
    }
    
</style>