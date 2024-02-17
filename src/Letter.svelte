<script>
    export let show='off'
    import {onMount} from 'svelte'
    import {spring} from 'svelte/motion'
    import {scale, slide} from 'svelte/transition'
    
    let pic;
    let coords=spring({x:400,y:300}
    ,{
        stiffness:0.5,
        damping:0.05
    })
    let prev_t=0,check=0,clicked=0,open=0
    function move(t)
    {
        if(t-prev_t>2000)
        {
            if(check==0)
            {
                coords.set({x:402,y:402})
            }
            else
            {
                coords.set({x:400,y:400})
            }
            check=1-check
            prev_t=t
        }
        let num=Math.min(405,$coords.x)
        num=Math.max(395,num)
        console.log(num)
        pic.style.left=`${num}px`
    }
    onMount(()=>{
        requestAnimationFrame(function loop(t){
            move(t,prev_t)
            if(clicked==1)
            {
                return
            }
            requestAnimationFrame(loop)
            
        })
    })
</script>
<div class={show} id='container'>
    <button class={show} id='wrap'  on:click={()=>{clicked=!clicked}}>
        <img src="postbox.png" alt='mailbox' class={show} bind:this={pic} id='mailbox'>
    </button>
{#if clicked}
    <button class={show} on:click={()=>{open=!open}}>
        <img src='envelope.png  ' alt='enve' class={show} transition:slide id='letter'>
    </button>
{/if}
{#if open}
    <div class={show} id='content' transition:scale>
        <p class={show}>yêu em</p>
    </div>
{/if}
</div>

<style>
    .on
    {
        display: block;
    }
    .off
    {
        display: none;
    }
    #wrap:hover
    {
        cursor: pointer;
    }
    #container
    {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        height: 510px;
    }
    img
    {
        position:absolute;
    }
    #mailbox
    {
        width: 400px;
        height: 400px;
        top:155px;
        z-index: 0;
    }
    #letter
    {
        width: 400px;
        height: 400px;
        top:155px;
        left:400px;
        z-index: 1;
    }
    #content
    {
        position: absolute;
        top:50vh;
        left:50vw;
        z-index: 2;
    }
</style>