<script>
    import { onMount } from "svelte";
    import {draw_fireworks} from './Random'

    export let show='off'
    let cv
    onMount(()=>
    {
        let c=cv.getContext('2d')
        cv.width=innerWidth
        cv.height=innerHeight
        let delta=534-497
        draw_random(cv,c,delta)
    })

</script>
<canvas class={show} bind:this={cv}>hello</canvas>
<style>
    .on
    {
        display:block
    }
    .off
    {
        display:none
    }
</style>
