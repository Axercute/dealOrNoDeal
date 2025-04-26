    let ladyRandom=["🫃","🫃🏻","🫃🏼","🫃🏽","🫃🏾","🫃🏿","🫄","🫄🏻","🫄🏼","🫄🏽","🫄🏿","🫄🏾"];
    let originalPrizeMoney=[1,100,150,200,250,500,750,1000,1500,2000,2500,5000,7500,10000,15000,20000,25000,50000,75000,100000,150000,200000,250000,500000,1000000]
    let prizeMoney=[...originalPrizeMoney]
    let turn = 0;
    let yourPrize;
    let dealerOffer;
    let myCash=250000;
    let outcomeDeal;
    let outcomeNoDeal;
    //----------------Cached-------------------
    lady = document.querySelector(".lady");
    Xinner_design = document.querySelector(".inner_design")
    Xdesign = document.querySelector(".design")


    //---------Display-------------------------
    lady.innerText=ladyRandom[Math.floor((Math.random()*ladyRandom.length))] //test for first lady


    //---------Function------------------------
    function createwholeSet(){ //making a function to place inside body
    //declaring we are putting wholeSet into main
    const main = document.querySelector("main")
    const wholeSet = document.createElement("div")
    wholeSet.setAttribute("class","whole_set")
    main.appendChild(wholeSet)
    //Everything here is the same as:
    //<div class="whole_set">
    //<div id="inner_design">$500,000</div>
    //<div id="design">
    //    <div id="row1_design"></div>
    //    <div id="row2_design">
    //        <div id="button_design"></div>
    //    </div>
    //    <div id="row3_design">
    //    </div>
    //</div>
    //<div class="lady"></div>
    //</div>

    const inner_design=document.createElement("div")
    inner_design.setAttribute("class","inner_design")
    wholeSet.appendChild(inner_design)

    const design = document.createElement("div")
    design.setAttribute("class","design")
    wholeSet.appendChild(design)

    const row1_design=document.createElement("div")
    row1_design.setAttribute("id","row1_design")
    design.appendChild(row1_design)

    const row2_design=document.createElement("div")
    row2_design.setAttribute("id","row2_design")
    design.appendChild(row2_design)

    const button_design = document.createElement("div")
    button_design.setAttribute("id","button_design")
    button_design.innerText="₿"
    row2_design.appendChild(button_design)

    const row3_design=document.createElement("div")
    row3_design.setAttribute("id","row3_design")
    design.appendChild(row3_design)

    const lady = document.createElement("div")
    lady.setAttribute("class","lady")
    lady.innerText=ladyRandom[Math.floor((Math.random()*ladyRandom.length))]
    design.after(lady)
    //--------------------same as the one outside----------------------------
    design.addEventListener("click",()=>{ 
    design.setAttribute("id","clicked")
    turn++
    //--------------------same as the one outside----------------------------
    rngPrize = Math.floor((Math.random()*prizeMoney.length)) //rng and store it
    generatedPrize=prizeMoney[rngPrize] //store the generatedPrize
    inner_design.innerText=`$${generatedPrize.toLocaleString()}` //generating
    prizeMoney.splice(rngPrize,1) //use generated rng and remove that index

    if(turn===1){
        yourPrize=generatedPrize
        inner_design.innerText='You chose this box'
    }
    if(turn===6){
        bankAlert(10)
        }
    if(turn===11){
        bankAlert(10)
        }
    if(turn===16){
        bankAlert(10)
        }
    if(turn===19){
        bankAlert(20)
        }
    if(turn===22){
        bankAlert(20)
        }
    if(turn===24){
        bankAlert(30)
        }

    const prizeBar = document.querySelectorAll(".prizeBar")
    prizeBar.forEach((element)=>{
        if(element.innerText===inner_design.innerText){
            element.setAttribute("id","match")
        }
    })
            
    })

    }
    //repeat this for 24 times as we have one default. 
    for(let i=0;i<24;i++){
        createwholeSet()
    }


    //---------AddEventListener-----------------
    Xdesign.addEventListener("click",()=>{ //test for first lady.
    Xdesign.setAttribute("id","clicked")
    turn++
    //randomized prizeMoney into the box
    XrngPrize = Math.floor((Math.random()*prizeMoney.length)) //rng and store it
    XgeneratedPrize=prizeMoney[XrngPrize] //store the generatedPrize
    Xinner_design.innerText=`$${prizeMoney[XrngPrize].toLocaleString()}` //generating
    prizeMoney.splice(XrngPrize,1) //use generated rng and remove that index
    if(turn===1){
        yourPrize=XgeneratedPrize
        Xinner_design.innerText='You chose this box'
    }
    if(turn===6){
        bankAlert(10)
        }
    if(turn===11){
        bankAlert(10)
        }
    if(turn===16){
        bankAlert(10)
        }
    if(turn===19){
        bankAlert(20)
        }
    if(turn===22){
        bankAlert(20)
        }
    if(turn===24){
        bankAlert(30)
        }

    const prizeBar = document.querySelectorAll(".prizeBar")
    prizeBar.forEach((element)=>{
        if(element.innerText===Xinner_design.innerText){
            element.setAttribute("id","match")
        }
    })
    })

    //----------Slider caches----------------------
    const navPrizePool = document.querySelector(".navPrizePool")
    const sliderPrizePool = document.querySelector(".sliderPrizePool")
    const navHtp = document.querySelector(".navHtp")
    const sliderHtp = document.querySelector(".sliderHtp")
    const navInventory = document.querySelector(".navInventory")
    const sliderInventory = document.querySelector(".sliderInventory")
    const sliderNotification = document.querySelector(".sliderNotification")

    //---------Inputting prizeBar info------------
    prizeMoney.forEach((element)=>{
        const prizeBar = document.createElement("div")
        prizeBar.setAttribute("class","prizeBar")
        prizeBar.innerText=`$${element.toLocaleString()}`
        sliderPrizePool.appendChild(prizeBar)
    })

    //---------Event Listeners for nav Bars-------
    navHtp.addEventListener("click",()=>{  
        sliderHtp.classList.toggle("sliderToggleIn")
        sliderPrizePool.classList.remove("sliderToggleIn")
        sliderInventory.classList.remove("sliderToggleIn")
        sliderStartNewGame.classList.remove("sliderToggleIn")
    })

    navPrizePool.addEventListener("click",()=>{
        sliderPrizePool.classList.toggle("sliderToggleIn")
        sliderHtp.classList.remove("sliderToggleIn")
        sliderInventory.classList.remove("sliderToggleIn")
        sliderStartNewGame.classList.remove("sliderToggleIn")
    })

    navInventory.addEventListener("click",()=>{
        sliderInventory.classList.toggle("sliderToggleIn")
        sliderPrizePool.classList.remove("sliderToggleIn")
        sliderHtp.classList.remove("sliderToggleIn")
        sliderStartNewGame.classList.remove("sliderToggleIn")
    })


    //---------------------------------------------

    //bankAlert Notification cache
    const timer = document.querySelector(".timer")
    const timeBar = document.querySelector(".timeBar")
    const countDown = document.querySelector(".countDown")
    const offerPrize = document.querySelector("#offerPrize")
    const sliderDeal = document.querySelector(".sliderDeal")
    const transparentWall = document.querySelector(".transparentWall")

    //----------function for the Bank Alert-----------------
    function bankAlert(secondsInput){
    transparentWall.style.display="block"
    timeBar.style.width=`100%`;
    timeBar.style.backgroundColor=" rgb(0, 255, 0)"
    sliderDeal.style.display="block"
    dealerOffer=prizeMoney.reduce((startElement,nextElement)=>{return (startElement+nextElement)},yourPrize)
    dealerOffer=Math.round((dealerOffer/100*0.9)/(prizeMoney.length+1))*100
    offerPrize.innerText=`$${dealerOffer.toLocaleString()}`;
    countDown.innerText=secondsInput
    let width=100;
    let timerStart=secondsInput
    outcomeDeal=dealerOffer;
    function counting(){
        timerStart--;
        width-=100/secondsInput;
        if(timerStart>=0){
            countDown.innerHTML=timerStart
            timeBar.style.width=width+`%`;
        }
        if(width<=25){
            timeBar.style.backgroundColor="red"
        }
        else if(width<=50){
            timeBar.style.backgroundColor=" rgb(255, 251, 0)"
        }
        else{
            timeBar.style.backgroundColor=" rgb(0, 255, 0)"
        }
        if (width<=0){
            timeBar.style.width="0"
            setTimeout(()=>{transparentWall.style.display="none"},1000)
            setTimeout(()=>{sliderDeal.style.display="none"},1000)
            clearInterval(intervalName)
            if(turn===24){
                setTimeout(()=>{transparentWall.style.display="block"},1000)
            }
        }
        if(turn===24){
            if (width<=0){
                sliderDeal.style.display="none"
                transparentWall.style.display="block"
                myCash+=yourPrize;
                const displayCash = document.querySelector(".displayCash")
                displayCash.innerText=`My Cash: $${myCash.toLocaleString()}`
                clearInterval(intervalName)
                factoryReset()
                faiz=0
            }
        }
    }
    if(turn===24){
        offerPrize.style.fontSize="2.5rem"
        offerPrize.innerHTML="Exchange your very own case with <i>The Dealer</i>"
    }
    const intervalName = setInterval(counting,1000)
    //------------Event Listener for the button pressed------------
    const noDealButton = document.querySelector("#noDealButton")
    noDealButton.addEventListener("click", ()=>{
        sliderDeal.style.display="none"
        transparentWall.style.display="none"
        clearInterval(intervalName)
        faiz=0;

    //----------THis is only for last round, rest is not included----
    if(turn===24){
        outcomeNoDeal=yourPrize;
        myCash+=yourPrize;
        const displayCash = document.querySelector(".displayCash")
        displayCash.innerText=`My Cash: $${myCash.toLocaleString()}`
        clearInterval(intervalName)
        factoryReset()
    }
    //---------------------------------------------------------------
    })

    const dealButton = document.querySelector("#dealButton")
    dealButton.addEventListener("click", ()=>{
        sliderDeal.style.display="none"
        transparentWall.style.display="none"
        //------------Only changing display on our displayCash and adding to myCash--------
        if(turn===24){
            outcomeDeal=prizeMoney[0];
            myCash+=prizeMoney[0];
        }
        else{
            myCash+=dealerOffer;
        }
        //------------------------------------------------------------------
        const displayCash = document.querySelector(".displayCash")
        displayCash.innerText=`My Cash: $${myCash.toLocaleString()}`
        clearInterval(intervalName)
        factoryReset()
        faiz=0;
    })

    }


    function messageUpdate() {
    const message = document.querySelector("#message")
    if(turn<0){
        howMany=6;
    }
    else if(turn<6){
        howMany=6;
    }
    else if(turn<11){
        howMany=11;
    }
    else if(turn<16){
        howMany=16;
    }
    else if(turn<19){
        howMany=19;
    }
    else if(turn<22){
        howMany=22;
    }
    else if(turn<24){
        howMany=24;
    }
    if(turn>0){
        message.innerText=`Pick ${howMany-turn} cases`
    }
    const dealButton = document.querySelector("#dealButton")
    dealButton.addEventListener("click", ()=>{
        message.innerText=`You have won $${outcomeDeal.toLocaleString()}`
        if(turn===24){
            message.innerText=`You have won $${prizeMoney[0].toLocaleString()}`
        }
    })
    if(turn===24){
    const noDealButton = document.querySelector("#noDealButton")
    noDealButton.addEventListener("click", ()=>{
        message.innerText=`You have won $${outcomeNoDeal.toLocaleString()}`
    })
    }
    requestAnimationFrame(messageUpdate)
    }

    requestAnimationFrame(messageUpdate)

    //js runs like a normal function, it only run once
    const displayCash = document.querySelector(".displayCash")
    displayCash.innerText=`My Cash: $${myCash.toLocaleString()}`

    //Factory reset
    function factoryReset(){
        turn=0;
        dealerOffer=0;
        Xdesign.removeAttribute("id","clicked")
        const design=document.querySelectorAll(".design")
        design.forEach((element)=>{element.removeAttribute("id","clicked")})
        yourPrize=undefined;
        const prizeBar = document.querySelectorAll(".prizeBar")
        prizeBar.forEach((element)=>{
            element.removeAttribute("id","match")
        })
        lady = document.querySelectorAll(".lady")
        lady.forEach((element)=>{
            element.innerText=ladyRandom[Math.floor((Math.random()*ladyRandom.length))]
        })
        prizeMoney=[...originalPrizeMoney]
        offerPrize.style.fontSize="300%"
        transparentWall.style.display="block"
        sliderStartNewGame.classList.toggle("sliderToggleIn")
        navstartNewGame.style.pointerEvents = "auto";
    }
    //---------------Hiding all slider when body is clicked-------------
    let faiz=0
    function AFK (){
    if(faiz>5000){
    sliderNotification.classList.remove("sliderToggleIn")
    }
    if(faiz===0){
    sliderNotification.classList.add("sliderToggleIn") 
    }
    faiz+=16
    requestAnimationFrame(AFK)
    }
    requestAnimationFrame(AFK)

    const main = document.querySelector(".main");
    main.addEventListener("click", () => {
        sliderPrizePool.classList.remove("sliderToggleIn");
        sliderInventory.classList.remove("sliderToggleIn");
        sliderHtp.classList.remove("sliderToggleIn");
        sliderStartNewGame.classList.remove("sliderToggleIn")
        faiz=0;
    });

    const navstartNewGame = document.querySelector(".navStartNewGame")
    const sliderStartNewGame = document.querySelector(".sliderStartNewGame")
    const yesButton = document.querySelector("#yesButton")
    const noButton = document.querySelector("#noButton")
    const entryPrice = document.querySelector("#entryPrice")
    let entryPriceAmount = originalPrizeMoney.reduce((startElement,nextElement)=>{return (startElement+nextElement)},0)
    entryPriceAmount=Math.round(entryPriceAmount/originalPrizeMoney.length/100)*100
    entryPrice.innerHTML=`$${entryPriceAmount.toLocaleString()}`

    navstartNewGame.addEventListener("click",()=>{  
        if(turn===0){
            sliderStartNewGame.classList.toggle("sliderToggleIn")
            sliderHtp.classList.remove("sliderToggleIn")
            sliderPrizePool.classList.remove("sliderToggleIn")
            sliderInventory.classList.remove("sliderToggleIn")
        }
    })

    noButton.addEventListener("click",()=>{ 
        sliderStartNewGame.classList.toggle("sliderToggleIn")
    })

    yesButton.addEventListener("click",()=>{ 
        if(myCash>=entryPriceAmount){
        sliderStartNewGame.classList.toggle("sliderToggleIn")
        myCash-=entryPriceAmount;
        displayCash.innerText=`My Cash: $${myCash.toLocaleString()}`
        transparentWall.style.display="none"
        message.innerHTML="Pick your own case"
        navstartNewGame.style.pointerEvents = "none";
        faiz=0
        }
        else{
               transparentWall.style.display="block"
               remark=document.querySelector("#remark")
               remark.innerHTML="You are a brokie now"
        }
    })

    transparentWall.addEventListener("click", () => {
        sliderPrizePool.classList.remove("sliderToggleIn");
        sliderInventory.classList.remove("sliderToggleIn");
        sliderHtp.classList.remove("sliderToggleIn");
        sliderStartNewGame.classList.remove("sliderToggleIn")
        faiz=0
    });


    achievement1=document.querySelector("#achievement1")
    achievement2=document.querySelector("#achievement2")
    achievement3=document.querySelector("#achievement3")
    achievement4=document.querySelector("#achievement4")
    achievement5=document.querySelector("#achievement5")
    achievement6=document.querySelector("#achievement6")
    achievement7=document.querySelector("#achievement7")
    achievement8=document.querySelector("#achievement8")

    function checkAchievement(){
        //----------achievement1------------
        if(outcomeDeal>entryPriceAmount || outcomeNoDeal>entryPriceAmount){
        achievement1.setAttribute("id","achievementComplete")
        }
        //----------achievement2------------
        if(myCash>=500000){
        achievement2.setAttribute("id","achievementComplete")
        }
        //----------achievement3------------
        if(myCash>=1000000){
        achievement3.setAttribute("id","achievementComplete")
        }
        //----------achievement4------------
        if(outcomeNoDeal===1 || outcomeDeal===1){
        achievement4.setAttribute("id","achievementComplete")
        }
        //----------achievement5------------
        if(outcomeNoDeal===1000000 || outcomeDeal===1000000){
        achievement5.setAttribute("id","achievementComplete")
        }
        //----------achievement6------------
        // if(prizeBar.innerText.trim() === "$1"){
        // achievement6.setAttribute("id","achievementComplete")
        // }
        //----------achievement7------------
        if(myCash>=5000000){
        achievement7.setAttribute("id","achievementComplete")
        }
        //----------achievement8------------
        if(myCash>=10000000){
        achievement8.setAttribute("id","achievementComplete")
        }
    requestAnimationFrame(checkAchievement)
    }

    requestAnimationFrame(checkAchievement)
    sliderHtp.classList.toggle("sliderToggleIn")