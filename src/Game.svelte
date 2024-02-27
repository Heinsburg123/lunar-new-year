<script>
    import {flip} from 'svelte/animate'
    import {onMount} from 'svelte'
    export let show='off'

    let infos=[
        {flip_n:0,value:'100k.jpg',val:100,id:1},
        {flip_n:0,value:'200k.jpg',val:200,id:2},
        {flip_n:0,value:'500k.jpg',val:500,id:3}
    ]

    let total=0
    let highest=0
    let count=0
    let interval 
    let times=0
    let play_time=0

    function end()
    {
        count=0
        times=0
        play_time=0
        if(total>highest)
        {
            highest=total
        }
        let card=document.querySelectorAll('.card')
        card[1].disabled=true
        card[2].disabled=true
        card[0].disabled=true
    }
    function start()
    {
        count=1
        total=0
        console.log(1)
        let card=document.querySelectorAll('.card')
        card[1].disabled=false
        card[2].disabled=false
        card[0].disabled=false
    }
    onMount(end)
    function clear()
    {
        for(let i=0;i<3;i++)
        {
            let j=Math.floor(Math.random()*(i+1))
            let temp=infos[i]
            infos[i]=infos[j]
            infos[j]=temp
        }
        times+=1
    }
    $:{if(count==1 && play_time!=5)
        {
            interval=setInterval(clear,300)
            count=0
        }
    }
    $:{if(times==5)
        {
            clearInterval(interval)
            times=0
        }
    }
    

</script>
<div class={show} id='config'>
    <p class='total'>Tổng tiền: {total}</p>
    <button class='play' on:click={start}>Play</button>
    <p class='highest'>Tổng tiền cao nhất: {highest}</p>
</div>
<div class={show} id='contain_all'>
    <div class={show} id='container'>
        {#each infos as info(info) }
            <button animate:flip={{duration:500}} class='card' id={info.flip_n?'flipped':''}  on:click={()=>{
                info.flip_n=!info.flip_n
                setTimeout(() => {
                    info.flip_n=!info.flip_n
                }, 2000)
                total+=info.val
                play_time+=1
                setTimeout(() => {
                    count=1
                }, 3000);
            }}>
                <div class='front'>
                    <img src='lixi.png' alt='f'>
                </div>
                <div class='back'>
                    <img src={info.value} alt='f' id='money'>
                </div>
            </button>
        {/each}
    </div>
    {#if play_time==5}
        <div class={show} id='notify'>
            <p class='noti_content'>GAME OVER!!!</p>
            <p class='noti_content'>Số điểm của eiu là {total}</p>
            {#if total>highest}
                <p class='noti_content'>Chúc mừng!!! Bé iu đã đạt được kỉ lục mới: {total}</p>
            {/if}   
            <button class='close_noti' on:click={end}>x</button>
        </div>
    {/if}
</div>
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
    #config
    {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        margin-top: 40px;
        height: 30px;
        justify-items: center;
    }
    .play
    {
        height: 30px;
        background-color: rgba(255, 72, 0, 0.824);

    }
    .play, .total, .highest
    {
        font-weight: bold;
        font-family:'Courier New', Courier, monospace;
        color:deepskyblue
    }
    .play
    {
        color:white
    }
    #contain_all
    {
        width: 100vw;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
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
    #notify
    {
        position: absolute;
        background-color:darkcyan;
        width: 400px;
        height: 200px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:5px;
    }
    .noti_content
    {
        color:white;
        font-weight: bold;
        font-size: large;
    }
    .close_noti
    {
        position: absolute;
        top:0px;
        right: 0px;
        height: 20px;
        width: 20px;
        border-top-right-radius: 12px;
    }
</style>