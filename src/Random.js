export function draw_fireworks(cv,c,delta)
{
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

    let grav=0.001
    let Particles=[]
    animate()

    addEventListener('click',(e)=>{
        let x=e.clientX
        let y=e.clientY-delta
        for(let i=0;i<50;i++)
        {
            let vel_x=Math.cos(((Math.PI*2)/50)*(i+1))*Math.random()
            let vel_y=Math.sin(((Math.PI*2)/50)*(i+1))*Math.random()
            Particles.push(new Particle(x,y,`hsl(${Math.random()*360},50%,50%)`,4,{x:vel_x,y:vel_y}))
        }
    })

}
