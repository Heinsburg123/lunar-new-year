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
    <button class='mailbox' bind:this={pic} on:click={()=>{clicked=!clicked}}>
        <img src="postbox.png" alt='mailbox' class='mailbox_pic'>
    </button>
    {#if clicked}
        <button class='letter'  on:click={()=>{open=!open}} transition:slide>
            <img src='envelope.png' alt='enve' class='letter_pic'>
        </button>
    {/if}
</div>
{#if open}
    <div class={show} id='wrap_content'>
        <div class={show} id='content' transition:scale>
            <p class='line'>Gửi em yêu</p>
            <p class='line'>Đã được hơn 2 tháng kể từ khi mình bắt đầu yêu nhau. Sự việc đến với anh thật bất ngờ, và qua quãng thời gian ấy, anh đã được cùng em trải qua các kì thi, nhiều dịp lễ khác nhau và đã cùng trao cho nhau những tình cảm, những món quà sâu đậm nhất</p>
            <p class='line'>Với anh, một người lần đầu có bạn gái, thì điều này là một trải nghiệm vô cùng mới mẻ nhưng cũng thật quý giá và quan trọng với anh</p>
            <p class='line'>Có lẽ, điều may mắn nhất trong năm qua chính là được gặp và trở thành bạn trai của em. Em là một người bạn gái tuyệt vời, eiu của anh thiệc là thông minh, tinh tế, quan tâm, đa tài, và đặc biệt nhất là em có một tình yêu vô cùng say đậm với anh</p>
            <p class='line'>Tất cả những món quà, lá thư mà bé iu làm cho anh từ trước đến giờ anh đều nhớ, giữ và trân trọng hết á. Cảm ơn em rất rất rất nhìu lunnnn. Trước giờ chưa từng có ai quan tâm và nặng tình cũm như đáng yêu như vợ của anh hếttt</p>
            <p class='line'>Anh cũm rất muốn làm một món quà handmade để tặng em, nhưng lại rất ít khi làm và không có sự khéo tay như. Vậy nên, vào nhưng dịp đặc biệt, anh sẽ có hết sức để làm ra những trang web như vầy để tặng em thui</p>
            <p class='line'>Nhưng mà có thể sau này, khi rảnh rỗi, anh sẽ cố thử học làm handmade một vài cái, và khi đó sẽ tặng thêm cho eiu thiệc nhiều quà nha</p>
            <p class='line'>Mà trang web này cũm là một món quà hơi muộn, anh dự định ban đầu là sẽ làm sớm hơn, nhưng mà do vướng với bài tập của thầy làm hơi lâu nên đã phải dời và tới bây giờ mới tặng eiu cái này cho dịp tết</p>
            <p class='line'>Thui thì Tết này, anh chúc em sẽ càng khỏe mạnh, xinh gái và học giỏi. Qua năm mới rùi, eiu hãy càng chăm chỉ hơn và cũng càng yêu anh hơn nhó. Anh cũng sẽ yêu em hơn thiệc nhiều đó. Và cũng còn vài tháng nữa là tới kì thi thptqg rùi.</p>
            <p class='line'>Anh chúc rằng tất cả những công sức của em sẽ được đền đáp, mọi sự may mắn của anh và em có thể giúp em đạt được kết quả tốt nhất, và eiu sẽ sứm được vào đây với anhhhh. Bé iu của anh cứ tập trung mà lo ôn bài cho kì thi nhó, từ giờ đến đó khum tặng thêm j cho anh nữa nghe chưaa</p>
            <p class='line'>Túm lại, năm mới này sẽ mở ra một chặng đường mới, và anh mong rằng đôi mình sẽ còn tiếp tục được nắm tay nhau mãi về sauuuu thôi</p>
            <p class='line'>Eiu yên tâm, anh tin rằng mọi chuyện rùi sẽ ổn hết thui, chuyện gì xảy ra cũng có lí do của nó hết</p>
            <p class='line'>Yêu em nhiều nhiều nhiều lắmmmmmm</p>
            <p class='line'>Từ Nguyễn Hoàng Long</p>
            <button class={show} id='X' on:click={()=>open=!open}>
                x
            </button>
        </div>
    </div>
{/if}


<style>
    .on
    {
        display: block;
    }
    .off
    {
        display: none;
    }
    #container
    {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        height: 500px;
    }
    .mailbox
    {
        cursor: pointer;
        position: absolute;
        widows: 400px;
        height: 400px;
        z-index: 0;
        border: none;
        background-color: rgba(255, 255, 255, 0);
    }
    
    .mailbox_pic
    {
        width: 400px;
        height: 400px;
    }
    .letter
    {
        width: 400px;
        height: 400px;
        top:140px;
        left:400px;
        z-index: 1;
        border: none;
        background-color: rgba(255, 255, 255, 0);
    }
    .letter_pic
    {
        width: 400px;
        height: 400px;
    }
    #wrap_content
    {
        position: absolute;
        top:0;
        left:0;
        width: 100vw;
        height: 100vh;
        backdrop-filter: blur(20px);
        z-index: 3;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #content
    {
        z-index: 3;
        width: 70vw;
        background-color:white;
        border-style: dashed;
        padding: 10px;
        position: relative;
    }
    .line
    {
        font-size:small;
        margin:0
    }
    #X
    {
        color: white;
        position: absolute;
        top:0;
        right: 0;
        background-color: red;
        height: 20px;
        width: 20px;
        margin: 0;
        padding: 0;
        border:0;
        cursor: pointer;
    }
</style>