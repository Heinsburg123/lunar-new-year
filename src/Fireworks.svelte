<script>
    import { onMount } from "svelte";

    export let show='off'
    let on_1=1
    let on_2=0
    let on_3=0
    let grav=0.001
    let Particles=[]

    let cv
    onMount(()=>
    {
        let c=cv.getContext('2d')
        cv.width=innerWidth
        cv.height=innerHeight
        let delta=534-497

        class Particle
        {
            constructor(x,y,color,r,velo)
            {
                this.x=x
                this.y=y
                this.color=color
                this.r=r
                this.velo=velo
                this.alpha=1
            }
            draw()
            {
                c.save()
                c.globalAlpha=this.alpha
                c.beginPath()
                c.arc(this.x,this.y,this.r,0,Math.PI*2)
                c.fillStyle=this.color
                c.fill()    
                c.closePath()
                c.restore()
                this.x+=this.velo.x
                this.y+=this.velo.y
                this.velo.y+=grav
                this.alpha-=0.007
            }
        }
    
        function animate()
        {
            requestAnimationFrame(animate)
            c.fillStyle='rgb(0,0,0,0.05)'
            c.fillRect(0,0,cv.width,cv.height)
            Particles.forEach((par,i) => {
                if(par.alpha>0)
                {
                    par.draw()
                }
                else
                {
                    Particles.splice(i,1)
                }
            });
        }
        animate()
        cv.addEventListener('click',(e)=>{
            let x=e.clientX
            let y=e.clientY-delta
            if(on_1==1)
            {   
                for(let i=0;i<50;i++)
                {
                    let vel_x=Math.cos(((Math.PI*2)/50)*(i+1))*Math.random()
                    let vel_y=Math.sin(((Math.PI*2)/50)*(i+1))*Math.random()
                    Particles.push(new Particle(x,y,`hsl(${Math.random()*360},50%,50%)`,4,{x:vel_x,y:vel_y}))
                }
            }
            if(on_2==1)
            {
                for(let i=0;i<28;i++)
                {
                    let vel_x=Math.cos(((Math.PI*2)/28)*(i+1))
                    let vel_y=Math.sin(((Math.PI*2)/28)*(i+1))
                    Particles.push(new Particle(x,y,`hsl(${Math.random()*360},50%,50%)`,4,{x:vel_x,y:vel_y}))
                }
                let vel_x=Math.cos(Math.PI*2-Math.PI*0.25)*0.5
                let vel_y=Math.sin(Math.PI*2-Math.PI*0.25)*0.5
                Particles.push(new Particle(x,y,`hsl(${Math.random()*360},50%,50%)`,4,{x:vel_x,y:vel_y}))
                vel_x=Math.cos(Math.PI*2-Math.PI*0.75)*0.5
                vel_y=Math.sin(Math.PI*2-Math.PI*0.75)*0.5
                Particles.push(new Particle(x,y,`hsl(${Math.random()*360},50%,50%)`,4,{x:vel_x,y:vel_y}))

                for(let i=0;i<10;i++)
                {
                    let vel_x=Math.cos(((Math.PI)/10)*(i+1))*0.5
                    let vel_y=Math.sin(((Math.PI)/10)*(i+1))*0.5
                    Particles.push(new Particle(x,y,`hsl(${Math.random()*360},50%,50%)`,4,{x:vel_x,y:vel_y}))
                }
            }
            if(on_3==1)
            {
                for(let i=0;i<20;i++)
                {
                    let vel_x=Math.cos(((Math.PI*2)/20)*(i+1))
                    let vel_y=Math.sin(((Math.PI*2)/20)*(i+1))
                    Particles.push(new Particle(x,y,`hsl(${Math.random()*360},50%,50%)`,4,{x:vel_x,y:vel_y}))
                }
            }
            })
    })
</script>
<canvas class={show} bind:this={cv}>hello</canvas>

<div class={show} id='container'>
    <button class={on_1?'clicked':''} on:click={()=>{
        on_1=1
        on_2=0
        on_3=0
    }}>
        <img src='fireworks.png' alt='button'>
    </button>
    <button class={on_2?'clicked':''} on:click={()=>{
        on_1=0
        on_2=1
        on_3=0
    }}>
        <img src='smile.png' alt='button'>
    </button>
    <button class={on_3?'clicked':''} on:click={()=>{
        on_1=0
        on_2=0
        on_3=1
    }}>
        <img src='circle.png' alt='buton'>
    </button>
</div>

<style> 
    .on
    {
        display:block
    }
    .off
    {
        display:none
    }
    .clicked
    {
        background-color:aqua;
    }
    canvas
    {
        z-index: 0;
        width: 100vw;
        height: 92vh;
    }
    img
    {
        width: 30px;
        height: 30px;
    }
    button
    {
        width: 40px;
        height: 40px;
        border-radius: 12px;
        background-color: white;
        border: 0;
        padding: 0;
    }
    #container
    {
        display: flex;
        position: absolute;
        left:90vw;
        top:70vh;
        flex-direction: column;
        justify-content: center;
    }
</style>
