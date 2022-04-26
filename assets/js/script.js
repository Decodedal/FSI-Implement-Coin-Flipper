// TODO: Declare any global variables we need
let heads = 0 
let tails = 0
let avgHeadNum = 0
let avgTailsNum= 0
let gamePlaying = false
let total = 0 
let numHead = document.querySelector("#heads")
let penny = document.querySelector("#penny")
let numTails = document.querySelector("#tails")
let avgHead = document.querySelector("#heads-percent")
let avgTails = document.querySelector("#tails-percent")
let clear = document.querySelector("#clear")

function update(){
numHead.textContent = heads
avgHead.textContent = `${avgHeadNum}%`
numTails.textContent = tails
avgTails.textContent = `${avgTailsNum}%`
}

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
let flip = document.querySelector("#flip")
       flip.addEventListener("click", function(){
        let rand = Math.ceil(Math.random() * 100)
        if (rand % 2 === 0){
           penny.src="/assets/images/penny-heads.jpg" 
           heads++         
        }else{
            penny.src="/assets/images/penny-tails.jpg"
            tails++
        }
        total++
        avgHeadNum = Math.ceil(heads /total * 100)
        avgTailsNum = Math.ceil(tails/total * 100)
        update()
        console.log(heads,tails, total,avgHeadNum,avgTailsNum)
       })
    })
    clear.addEventListener("click",function(){
         heads = 0 
         tails = 0
         avgHeadNum = 0
         avgTailsNum= 0
         total = 0 
         update()
         
    })
       
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        
        // numHead.textContent = heads

       
        // numTails = tails

     
        // avgHead = heads / total

        // avgTails = tails /total

        // console.log()

        
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

