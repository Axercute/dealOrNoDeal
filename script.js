let ladyRandom=["🫃","🫃🏻","🫃🏼","🫃🏽","🫃🏾","🫃🏿","🫄","🫄🏻","🫄🏼","🫄🏽","🫄🏿","🫄🏾"];
let prizeMoney=[1,5,10,15,30,50,75,100,150,250,500,1000,1500,3000,5000,7500,10000,15000,25000,50000,100000,150000,300000,500000,1000000]
let turn = 0;
let yourPrize;
let dealerOffer;
//----------------Cached-------------------
lady = document.querySelector(".lady");
Xinner_design = document.querySelector(".inner_design")
Xdesign=document.querySelector(".design")


//---------Display-------------------------
lady.innerText=ladyRandom[Math.floor((Math.random()*ladyRandom.length))] //test for first lady


//---------Function------------------------
function dealorNodeal(){
    dealerOffer=Math.round(prizeMoney.reduce((startElement,nextElement)=>{return (startElement+nextElement)/(prizeMoney.length+1)},yourPrize))
setTimeout(() => {
window.alert(`Dealer offers $${dealerOffer}`)
}, 1);  //wait for last number to load
}

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
    turn+=1
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
    dealorNodeal()
    }
if(turn===11){
    dealorNodeal()
    }
if(turn===16){
    dealorNodeal()
    }
if(turn===19){
    dealorNodeal()
    }
if(turn===22){
    dealorNodeal()
    }
if(turn===24){
    dealorNodeal()
    }
})

}
//repeat this for 24 times as we have one default. 
for(let i=0;i<24;i++){
    createwholeSet()
}


//---------AddEventListener-----------------
Xdesign.addEventListener("click",()=>{ //test for first lady.
    Xdesign.setAttribute("id","clicked")
    turn+=1
//randomized prizeMoney into the box
XrngPrize = Math.floor((Math.random()*prizeMoney.length)) //rng and store it
XgeneratedPrize=prizeMoney[XrngPrize] //store the generatedPrize
Xinner_design.innerText=`$${prizeMoney[XrngPrize].toLocaleString()}` //generating
prizeMoney.splice(XrngPrize,1) //use generated rng and remove that index
if(turn===1){
    yourPrize=XgeneratedPrize
    Xinner_design.innerText='You chose this box'
}
if(turn===9){
dealerOffer=prizeMoney.reduce((startElement,nextElement)=>{return (startElement+nextElement)/(prizeMoney.length-1)},yourPrize)
window.alert(`Dealer offers $${dealerOffer}`)
}
})



//----------Slider----------------------
const prizePool = document.querySelector(".prizePool")
const sliderPrizePool = document.querySelector(".sliderPrizePool")
prizePool.addEventListener("click",()=>{
sliderPrizePool.classList.toggle("sliderToggleIn")
sliderHtp.classList.remove("sliderToggleIn")
})

const htp = document.querySelector(".htp")
const sliderHtp = document.querySelector(".sliderHtp")
htp.addEventListener("click",()=>{  
sliderHtp.classList.toggle("sliderToggleIn")
sliderPrizePool.classList.remove("sliderToggleIn")
})

const timer = document.querySelector(".timer")
const timeBar = document.querySelector(".timeBar")
let width=100

const timeInterval = setInterval(()=>{
    width-=10
    timeBar.style.width=`${width}%`
},1000)





// const box = document.querySelector(".box")
// let lastTime
// function playAnimation(time) {
//   if (lastTime != null) {
//     const delta = time - lastTime
//     box.style.left = `${parseFloat(box.style.left) + delta * 0.1}%`

//     if (parseFloat(box.style.left) >= 100) {
//       box.style.left = 0
//     }
//   }

//   lastTime = time
//   window.requestAnimationFrame(playAnimation)
// }
// window.requestAnimationFrame(playAnimation)