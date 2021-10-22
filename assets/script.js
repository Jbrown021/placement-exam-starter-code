// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Joshua Brown" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0
let gbqty = document.querySelector("#qty-gb")
let ccqty = document.querySelector("#qty-cc")
let sugerqty = document.querySelector("#qty-sugar")
let totalqty = document.querySelector("#qty-total")
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    
    gb++
    
    console.log(gb)
     
    document.querySelector("#qty-gb").textContent =gb
    
    
})

document.getElementById('minus-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    
    gb--
    
    console.log(gb)
     
    document.querySelector("#qty-gb").textContent =gb
   
})

//Chocolate chip

document.getElementById('add-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
   
    cc++
    console.log(cc)
     
    document.querySelector("#qty-cc").textContent =cc
   
})

document.getElementById('minus-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    
    cc--
    
    console.log(cc)
     
    document.querySelector("#qty-cc").textContent =cc
    
})

//Sugar Sprinkle

document.getElementById('add-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
   
    sugar++
    console.log(sugar)
     
    document.querySelector("#qty-sugar").textContent =sugar
    
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    
    sugar--
    
    console.log(sugar)
     
    document.querySelector("#qty-sugar").textContent =sugar
    
})


//Total

document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    
    total++
    
    console.log(total)
     
    document.querySelector("#qty-total").textContent =total
    
    
})


document.getElementById('add-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    
    total++
    
    console.log(total)
     
    document.querySelector("#qty-total").textContent =total
    
    
})

document.getElementById('add-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
   
    total++
    
    console.log(total)
     
    document.querySelector("#qty-total").textContent =total
    
    
})

document.getElementById('minus-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    
    total--
    
    console.log(total)
     
    document.querySelector("#qty-total").textContent =total
    
    
})


document.getElementById('minus-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
   
    total--
    
    console.log(total)
     
    document.querySelector("#qty-total").textContent =total
    
    
})

document.getElementById('minus-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    
    total--
    
    console.log(total)
     
    document.querySelector("#qty-total").textContent =total
    
    
})